import assert from "node:assert/strict";
import { after, test } from "node:test";
import { POST } from "../src/app/api/contact/route.js";

const originalFetch = globalThis.fetch;
const originalEnv = { ...process.env };

after(() => {
  globalThis.fetch = originalFetch;
  for (const key of ["NEXT_PUBLIC_SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_ANON_KEY", "SUPABASE_SERVICE_ROLE_KEY"]) {
    if (originalEnv[key] === undefined) delete process.env[key];
    else process.env[key] = originalEnv[key];
  }
});

const valid = {
  name: "Visitor",
  email: "visitor@example.com",
  subject: "POS demo",
  message: "Please tell me more about your POS solutions.",
};

function request(data = valid, headers = {}) {
  return new Request("https://nived.example/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json", origin: "https://nived.example", ...headers },
    body: typeof data === "string" ? data : JSON.stringify(data),
  });
}

function configure() {
  process.env.NEXT_PUBLIC_SUPABASE_URL = "https://mock.supabase.co";
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "mock-anon-key";
}

test("rejects cross-origin, malformed, oversized, and invalid submissions without sending", async () => {
  globalThis.fetch = () => {
    throw new Error("Must not call provider");
  };
  for (const [req, status] of [
    [request(valid, { origin: "https://other.example" }), 403],
    [request(valid, { "Content-Type": "text/plain" }), 415],
    [request("{"), 400],
    [request(null), 400],
    [request("x".repeat(32_769)), 413],
    [request({ ...valid, email: "invalid" }), 400],
    [request({ ...valid, name: " " }), 400],
    [request({ ...valid, subject: "Subject\r\nInjected" }), 400],
    [request({ ...valid, message: "x".repeat(5001) }), 400],
  ]) {
    assert.equal((await POST(req)).status, status);
  }
  assert.equal((await POST(request({ ...valid, website: "bot.example" }))).status, 200);
});

test("reports missing configuration without sending", async () => {
  delete process.env.NEXT_PUBLIC_SUPABASE_URL;
  delete process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  delete process.env.SUPABASE_SERVICE_ROLE_KEY;
  assert.equal((await POST(request())).status, 503);
});

test("saves to contacts table and enforces attempt limit", async () => {
  configure();
  let calls = 0;
  globalThis.fetch = async (url, options) => {
    calls++;
    assert.ok(String(url).includes("/rest/v1/contacts"));
    assert.equal(options.method, "POST");
    const payload = JSON.parse(options.body);
    assert.equal(payload.name, valid.name);
    assert.equal(payload.email, valid.email);
    assert.equal(payload.subject, valid.subject);
    assert.equal(payload.message, valid.message);
    return new Response(JSON.stringify([{ id: "mock-contact-id" }]), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  };
  for (let i = 0; i < 3; i++) {
    const result = await POST(request());
    assert.equal(result.status, 200);
    assert.deepEqual(await result.json(), { success: true });
  }
  const limited = await POST(request());
  assert.equal(limited.status, 429);
  assert.equal(limited.headers.get("Retry-After"), "600");
  assert.equal(calls, 3);
});

test("provider failures and network errors never report success or expose secrets", async () => {
  configure();
  globalThis.fetch = async () =>
    new Response(JSON.stringify({ message: "secret database error details" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  const failed = await POST(request({ ...valid, email: "failure@example.com" }));
  assert.equal(failed.status, 502);
  assert.ok(!(await failed.text()).includes("secret database error details"));
  globalThis.fetch = async () => {
    throw new Error("network error");
  };
  assert.equal((await POST(request({ ...valid, email: "network@example.com" }))).status, 502);
});
