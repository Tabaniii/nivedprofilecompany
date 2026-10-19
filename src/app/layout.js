import {
  Geist,
  Geist_Mono,
  Space_Grotesk,
  Newsreader,
} from "next/font/google";
import localFont from "next/font/local";
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

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const bricolage = localFont({
  src: "../../public/fonts/Bricolage_Grotesque/BricolageGrotesque-VariableFont_opsz,wdth,wght.ttf",
  variable: "--font-bricolage-grotesque",
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader-serif",
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
  icons: {
    icon: "/logofix.svg",
    apple: "/logofix.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${bricolage.variable} ${newsreader.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Carattere&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SkipToContent />
        {children}
      </body>
    </html>
  );
}
