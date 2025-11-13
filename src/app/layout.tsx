import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ConnectX - Smart Twitter Networking for Creators",
    template: "%s | ConnectX",
  },
  description: "Match with Twitter creators in your niche and tier. Build meaningful connections through smart, spam-free networking designed for quality over quantity.",
  keywords: [
    "Twitter networking",
    "creator connections",
    "niche communities",
    "professional networking",
    "social media growth",
    "creator economy",
    "Twitter creators",
    "networking platform",
  ],
  authors: [{ name: "ConnectX Team" }],
  creator: "ConnectX",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://connectx.example.com",
    siteName: "ConnectX",
    title: "ConnectX - Smart Twitter Networking for Creators",
    description: "Match with Twitter creators in your niche and tier. Build meaningful connections through smart, spam-free networking.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ConnectX - Smart Twitter Networking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ConnectX - Smart Twitter Networking for Creators",
    description: "Match with Twitter creators in your niche and tier. Build meaningful connections.",
    creator: "@connectx",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // TODO: Add Google Search Console verification
    // google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
