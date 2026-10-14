This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contact webmailer

The contact form sends email through `POST /api/contact` using the
[Resend Send Email API](https://resend.com/docs/api-reference/emails/send-email).
Visitors can enter their name, reply email, subject, and message without opening
an email app. Replies go to the visitor through the email's Reply-To header.

To enable delivery:

1. Copy `.env.example` to `.env.local`.
2. Set `RESEND_API_KEY` to your Resend API key.
3. Verify a sending domain in Resend and set `CONTACT_FROM_EMAIL` to an address
   on that domain, e.g. `Nived Studio <contact@your-domain.com>`.
4. Set `CONTACT_TO_EMAIL` to the receiving inbox, or omit it to use the profile's
   email address (`nived.labs@gmail.com`).
5. Restart the development server. For production, configure the same secrets
   on your hosting provider and deploy with a Next.js server runtime.

Secrets stay on the server. Missing configuration returns a clear error and
keeps the visitor's draft. The endpoint validates input, caps request size,
checks browser origins, ignores honeypot submissions, and limits each sender
email to three attempts per ten minutes. Rate limits are in memory per server
instance; use shared rate limiting or your host's bot protection for larger
public deployments. A success means the provider accepted the message; inbox
delivery can still depend on the recipient's mail filters.

Run the mailer tests without sending real emails:

```bash
node --test tests/contact.test.mjs
```
