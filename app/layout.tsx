import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/ui/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dhruvtripathi.in"), // ✅ change to your real domain
  title: {
    default: "Dhruv Tripathi | Frontend Developer",
    template: "%s | Dhruv Tripathi",
  },
  description:
    "Dhruv Tripathi is a passionate Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies. Crafting smooth, responsive, and SEO-optimized web experiences.",
  keywords: [
    "Dhruv Tripathi",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "UI Engineer",
  ],
  openGraph: {
    title: "Dhruv Tripathi | Frontend Developer",
    description:
      "Portfolio of Dhruv Tripathi — a React & Next.js Frontend Developer building fast, modern web experiences.",
    url: "https://www.dhruvtripathi.dev",
    siteName: "Dhruv Tripathi",
    images: [
      {
        url: "/og-image.png", // ✅ place your OG image in /public
        width: 1200,
        height: 630,
        alt: "Dhruv Tripathi Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhruv Tripathi | Frontend Developer",
    description:
      "React & Next.js developer building sleek, high-performance web applications.",
    creator: "@dhruvtripathi77", // ✅ replace if you have Twitter handle
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.dhruvtripathi.in",
  },
  authors: [{ name: "Dhruv Tripathi", url: "https://www.dhruvtripathi.in" }],
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}
