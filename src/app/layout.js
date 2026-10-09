import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SkipToContent } from "@/components/layout/SkipToContent";
import { profile } from "@/lib/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.bio,
  keywords: [
    "Smart POS",
    "Hardware Solutions",
    "Offline Merchants",
    "SMB Tech",
    "Store Optimization",
    "Digital Consulting",
    profile.name,
  ],
  authors: [{ name: profile.name, url: "https://github.com" }],
  creator: profile.name,
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SkipToContent />
        {children}
      </body>
    </html>
  );
}
