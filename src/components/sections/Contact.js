"use client";

import { useState } from "react";
import { profile } from "@/lib/data/profile";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const emailSocial = profile.socials.find((s) => s.name === "Email");
  const emailAddress = emailSocial?.username || "nived.labs@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message, website }),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "We couldn’t send your message. Please try again.");
      }
      setStatus("success");
      setFeedback("Thanks for reaching out! Your message has been sent to our team.");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setWebsite("");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof TypeError
        ? "Connection interrupted. Please try again or email us directly."
        : error.message);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 md:py-28 border-t border-zinc-800/60"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <h2
            id="contact-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Ready to Modernize Your Retail Operations?
          </h2>
          <p className="mt-4 text-base text-zinc-400">
            Whether you need custom offline-first POS systems, smart hardware terminals, or store optimization consulting, our team is ready to empower your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct channels card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Card className="flex flex-col gap-5">
              <h3 className="text-xl font-bold text-foreground tracking-tight">
                Solutions Inquiry
              </h3>
              <p className="text-sm text-zinc-400">
                Reach out to our retail solutions team to schedule a live POS demo, explore smart hardware setups, or discuss pilot merchant onboarding.
              </p>

              {/* Copy email bar */}
              <div className="flex items-center justify-between gap-3 rounded-xl border border-zinc-800 bg-zinc-800/40 p-3">
                <span className="truncate text-sm font-medium text-foreground select-all">
                  {emailAddress}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-zinc-700 bg-background px-3 text-xs font-semibold text-zinc-200 transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>

              {/* Social links grid */}
              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                  Company Channels
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {profile.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-[44px] items-center justify-between rounded-xl border border-zinc-200/80 bg-zinc-50/50 px-4 py-2 text-xs font-medium text-zinc-700 transition-all hover:border-zinc-300 hover:bg-zinc-100 hover:text-foreground dark:border-zinc-800 dark:bg-zinc-800/30 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <span>{social.name}</span>
                      <span className="text-zinc-400 dark:text-zinc-500">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7">
            <Card className="flex flex-col">
              <h3 className="text-xl font-bold text-foreground tracking-tight mb-2">
                Send a Message
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                Tell us what you have in mind. We’ll reply to the email address you provide.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4" aria-busy={status === "sending"}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">Name</label>
                    <input id="contact-name" name="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required maxLength={100} disabled={status === "sending"} className="w-full rounded-xl border border-zinc-200 bg-background px-4 py-2.5 text-sm text-foreground placeholder-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-800 dark:bg-zinc-900" />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">Email address</label>
                    <input id="contact-email" name="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" required maxLength={254} disabled={status === "sending"} className="w-full rounded-xl border border-zinc-200 bg-background px-4 py-2.5 text-sm text-foreground placeholder-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-800 dark:bg-zinc-900" />
                  </div>
                </div>
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="contact-website">Website</label>
                  <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
                </div>
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    maxLength={200}
                    disabled={status === "sending"}
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="E.g., Project collaboration or consulting"
                    required
                    className="w-full rounded-xl border border-zinc-200 bg-background px-4 py-2.5 text-sm text-foreground placeholder-zinc-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-800 dark:bg-zinc-900"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    maxLength={5000}
                    disabled={status === "sending"}
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project, timeline, or inquiry..."
                    required
                    className="w-full rounded-xl border border-zinc-200 bg-background px-4 py-2.5 text-sm text-foreground placeholder-zinc-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-800 dark:bg-zinc-900"
                  />
                </div>

                <p role={status === "error" ? "alert" : "status"} aria-live="polite" className={`text-sm ${status === "error" ? "text-red-600 dark:text-red-400" : "text-emerald-600 dark:text-emerald-400"}`}>
                  {feedback}
                </p>
                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    {status === "sending" ? "Sending…" : "Send Message"}
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
