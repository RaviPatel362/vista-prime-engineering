import type { Metadata } from "next";
import { Inter, Oswald, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

export const metadata: Metadata = {
  metadataBase: new URL("https://ravipatel362.github.io/vista-prime-engineering"),
  title: "Vista Prime Engineering | Precision CNC Turning, VMC Milling & Machining",
  description:
    "Vista Prime Engineering (VPE) delivers high-precision CNC Turning, VMC Milling, and Precision Machining services. Precision Today... Better Tomorrow. Partner with us for long-term manufacturing excellence.",
  keywords: [
    "Vista Prime Engineering",
    "VPE",
    "CNC Turning",
    "VMC Milling",
    "Precision Machining",
    "CNC services India",
    "metal machining",
    "Ruchit Patel",
    "manufacturing partner",
    "precision engineering",
  ],
  authors: [{ name: "Vista Prime Engineering", url: "https://vistaprimeengineering.com" }],
  creator: "Vista Prime Engineering",
  publisher: "Vista Prime Engineering",
  icons: {
    icon: [
      { url: `${basePath}/favicon.svg`, type: "image/svg+xml" },
      { url: `${basePath}/favicon-32.png`, type: "image/png", sizes: "32x32" },
      { url: `${basePath}/logo-192.png`, type: "image/png", sizes: "192x192" },
    ],
    apple: `${basePath}/logo-192.png`,
    shortcut: `${basePath}/favicon-32.png`,
  },
  openGraph: {
    title: "Vista Prime Engineering | Precision Today, Better Tomorrow",
    description:
      "High-precision CNC Turning, VMC Milling, and Precision Machining services. Together We Build Better.",
    siteName: "Vista Prime Engineering",
    type: "website",
    locale: "en_IN",
    images: [`${basePath}/logo-192.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vista Prime Engineering",
    description: "Precision Today... Better Tomorrow. CNC Turning | VMC Milling | Precision Machining",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    // Replace YOUR_VERIFICATION_CODE with the actual code from Google Search Console
    google: "YOUR_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${oswald.variable} ${robotoMono.variable} antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
