import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = new URL("https://apexnovalabs.lk");
const title = "Apex Nova Labs Sri Lanka | Peak-quality software, stellar outcomes";
const description =
  "Apex Nova Labs Sri Lanka builds modern web and mobile products with precision engineering, thoughtful design, and measurable impact for organisations across Sri Lanka and South Asia.";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: "https://apexnovalabs.lk",
  description,
  email: siteConfig.contactEmail,
  sameAs: siteConfig.socials.map((item) => item.href),
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteConfig.contactEmail,
      availableLanguage: ["en"],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: title,
    template: "%s | Apex Nova Labs Sri Lanka",
  },
  description,
  keywords: [
    "Apex Nova Labs Sri Lanka",
    "software studio",
    "product design",
    "web development",
    "mobile apps",
    "cloud engineering",
  ],
  authors: [{ name: "Apex Nova Labs Sri Lanka" }],
  creator: "Apex Nova Labs Sri Lanka",
  publisher: "Apex Nova Labs Sri Lanka",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Apex Nova Labs Sri Lanka",
    images: [
      {
        url: "/og/default.svg",
        width: 1200,
        height: 630,
        alt: "Apex Nova Labs Sri Lanka - Build peak-quality software",
      },
    ],
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@apexnovalabslk",
    title,
    description,
    images: ["/og/default.svg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        data-theme="dark"
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--color-background)] text-[var(--color-foreground)]`}
      >
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
