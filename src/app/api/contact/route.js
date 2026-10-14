import { getSupabaseAdmin, getSupabaseClient } from "../../../lib/server/db.js";
import { sendContactEmail } from "../../../lib/server/email.js";

// Best-effort protection per server instance; entries expire after ten minutes.
const attempts = new Map();
const windowMs = 10 * 60 * 1000;
const emailPattern = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;

function reply(body, status = 200, headers = {}) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store", ...headers } });
}

export async function POST(request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return reply({ error: "Please send your message from our website." }, 403);
  }
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return reply({ error: "Expected a JSON message." }, 415);
  }

  let data;
  try {
    // Bound the streamed body before parsing, including requests without Content-Length.
    const reader = request.body?.getReader();
    if (!reader) return reply({ error: "Please enter your message." }, 400);
    const chunks = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 32_768) {
        await reader.cancel();
        return reply({ error: "Your message is too long." }, 413);
      }
      chunks.push(value);
    }
    data = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    return reply({ error: "Invalid message. Please try again." }, 400);
  }
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return reply({ error: "Invalid message." }, 400);
  }
  if (data.website) return reply({ success: true });

  const fields = { name: 100, email: 254, subject: 200, message: 5000 };
  for (const [field, max] of Object.entries(fields)) {
    if (typeof data[field] !== "string" || !data[field].trim() || data[field].length > max) {
      return reply({ error: `Please enter a valid ${field} (up to ${max} characters).` }, 400);
    }
    data[field] = data[field].trim();
  }
  if (!emailPattern.test(data.email) || /[\r\n]/.test(data.name + data.email + data.subject)) {
    return reply({ error: "Please check your name, email address, and subject." }, 400);
  }

  const supabase = getSupabaseAdmin() || getSupabaseClient();
  if (!supabase) {
    return reply({ error: "Contact service is currently unavailable. Please reach out directly." }, 503);
  }

  const now = Date.now();
  for (const [key, entry] of attempts) {
    if (entry.expires <= now) attempts.delete(key);
  }
  const key = data.email.toLowerCase();
  const entry = attempts.get(key) || { count: 0, expires: now + windowMs };
  if (entry.count >= 3 || attempts.size >= 10_000) {
    return reply({ error: "Too many messages. Please wait ten minutes or email us directly." }, 429, { "Retry-After": "600" });
  }
  entry.count += 1;
  attempts.set(key, entry);

  try {
    // 1. Simpan ke Supabase table 'contacts'
    const { error: dbError } = await supabase.from("contacts").insert({
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    });

    if (dbError) {
      console.error("[Supabase DB Error]:", dbError.message);
      return reply({ error: "We couldn’t send your message. Please try again or reach out directly." }, 502);
    }

    // 2. Opsional: Trigger Supabase Edge Function jika dideploy
    if (process.env.SUPABASE_EDGE_FUNCTION_NAME) {
      await supabase.functions.invoke(process.env.SUPABASE_EDGE_FUNCTION_NAME, {
        body: data,
      }).catch((e) => console.warn("[Supabase Edge Function warn]:", e.message));
    }

    // 3. Kirim notifikasi langsung ke email bisnis via custom SMTP
    const emailResult = await sendContactEmail(data);
    if (!emailResult.success && !emailResult.skipped) {
      console.warn("[Email Notification warn]:", emailResult.error);
    }

    return reply({ success: true });
  } catch (err) {
    console.error("[Contact API error]:", err);
    return reply({ error: "Contact service unavailable. Please try again or reach out directly." }, 502);
  }
}
