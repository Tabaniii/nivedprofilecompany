// Supabase Edge Function: send-contact-email
// Deploy command: supabase functions deploy send-contact-email --no-verify-jwt
import nodemailer from "npm:nodemailer";

// Declarations for Deno environment when opened in non-Deno IDEs
declare const Deno: {
  serve: (handler: (req: Request) => Promise<Response> | Response) => void;
  env: {
    get: (key: string) => string | undefined;
  };
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const host = Deno.env.get("SMTP_HOST");
    const port = Number(Deno.env.get("SMTP_PORT")) || 465;
    const user = Deno.env.get("SMTP_USER");
    const pass = Deno.env.get("SMTP_PASS");
    const to = Deno.env.get("BUSINESS_EMAIL") || "nived.labs@gmail.com";
    const secure = Deno.env.get("SMTP_SECURE") === "true" || port === 465;

    if (!host || !user || !pass) {
      console.warn("SMTP credentials not configured in Supabase Edge Function Secrets.");
      return new Response(
        JSON.stringify({
          success: false,
          error: "SMTP credentials not configured in Supabase Edge Function Secrets.",
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"${name} (Portfolio)" <${user}>`,
      to,
      replyTo: `"${name}" <${email}>`,
      subject: `[Contact Form] ${subject || "Inquiry"} - from ${name}`,
      text: `You received a new inquiry from your portfolio website:

Name: ${name}
Email: ${email}
Subject: ${subject || "-"}

Message:
${message}

---
Sent via Supabase Edge Function`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e4e4e7; border-radius: 12px; background-color: #ffffff; color: #18181b;">
          <h2 style="margin-top: 0; color: #09090b; font-size: 20px; border-bottom: 2px solid #2563eb; padding-bottom: 8px;">
            New Portfolio Inquiry
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #71717a; width: 100px;"><strong>Name:</strong></td>
              <td style="padding: 8px 0; color: #09090b;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #71717a;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; color: #09090b;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #71717a;"><strong>Subject:</strong></td>
              <td style="padding: 8px 0; color: #09090b; font-weight: 600;">${subject || "-"}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background-color: #f4f4f5; border-radius: 8px; border-left: 4px solid #2563eb;">
            <p style="margin: 0 0 6px 0; font-size: 12px; text-transform: uppercase; color: #71717a; font-weight: bold;">Message:</p>
            <p style="margin: 0; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #18181b;">${message}</p>
          </div>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal server error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
