import nodemailer from "nodemailer";

/**
 * Escapes HTML characters to prevent XSS / formatting corruption in email clients.
 */
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Send an email notification to the business email when a new contact message is received.
 * Reads SMTP credentials from environment variables.
 *
 * @param {Object} params
 * @param {string} params.name - Sender name
 * @param {string} params.email - Sender email
 * @param {string} params.subject - Message subject
 * @param {string} params.message - Message body
 * @returns {Promise<{ success: boolean, skipped?: boolean, reason?: string, error?: string }>}
 */
export async function sendContactEmail({ name, email, subject, message }) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT) || 587;
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  const to = process.env.BUSINESS_EMAIL || "nived.labs@gmail.com";
  
  // Format Display Name agar di inbox Gmail/klien email muncul nama pengirim (misal: "pep (Portfolio)")
  let from = process.env.SMTP_FROM?.trim();
  if (!from) {
    from = `"${name} (Portfolio)" <${user}>`;
  } else if (!from.includes("<")) {
    from = `"${name} (Portfolio)" <${from}>`;
  }

  // If SMTP credentials aren't configured yet, skip sending email gracefully without throwing
  if (!host || !user || !pass) {
    return {
      success: false,
      skipped: true,
      reason: "SMTP credentials (SMTP_HOST, SMTP_USER, SMTP_PASS) not configured in .env.local",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from,
      to,
      replyTo: `"${name}" <${email}>`,
      subject: `[Contact Form] ${subject} - from ${name}`,
      text: `You received a new inquiry from your portfolio website:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent via Nived Portfolio Website`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e4e4e7; border-radius: 12px; background-color: #ffffff; color: #18181b;">
          <h2 style="margin-top: 0; color: #09090b; font-size: 20px; border-bottom: 2px solid #2563eb; padding-bottom: 8px;">
            New Portfolio Inquiry
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #71717a; width: 100px;"><strong>Name:</strong></td>
              <td style="padding: 8px 0; color: #09090b;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #71717a;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; color: #09090b;"><a href="mailto:${escapeHtml(email)}" style="color: #2563eb; text-decoration: underline;">${escapeHtml(email)}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #71717a;"><strong>Subject:</strong></td>
              <td style="padding: 8px 0; color: #09090b; font-weight: 600;">${escapeHtml(subject)}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background-color: #f4f4f5; border-radius: 8px; border-left: 4px solid #2563eb;">
            <p style="margin: 0 0 6px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #71717a; font-weight: bold;">Message:</p>
            <p style="margin: 0; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #18181b;">${escapeHtml(message)}</p>
          </div>
          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e4e4e7; font-size: 12px; color: #a1a1aa; text-align: center;">
            Click "Reply" to respond directly to ${escapeHtml(email)}.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (err) {
    console.error("[sendContactEmail Error]:", err.message);
    return {
      success: false,
      error: err.message,
    };
  }
}
