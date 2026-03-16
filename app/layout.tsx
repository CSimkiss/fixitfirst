import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import StorageBanner from "@/components/StorageBanner";
import NewsletterPopup from "@/components/NewsletterPopup";
import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://fixit-first.co.uk"),
  title: {
    default: "FixItFirst — DIY Guides for People Nobody Taught",
    template: "%s | FixItFirst",
  },
  description:
    "Step-by-step DIY guides written for complete beginners. Fix taps, unblock drains, paint rooms and more — no experience needed. Save hundreds vs calling a tradesperson.",
  openGraph: {
    siteName: "FixItFirst",
    locale: "en_GB",
    type: "website",
    title: "FixItFirst — DIY Guides for People Nobody Taught",
    description:
      "Step-by-step DIY guides written for complete beginners. Fix taps, unblock drains, paint rooms and more — no experience needed. Save hundreds vs calling a tradesperson.",
    url: "https://fixit-first.co.uk",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "FixItFirst — DIY Guides for People Nobody Taught",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FixItFirst — DIY Guides for People Nobody Taught",
    description:
      "Step-by-step DIY guides written for complete beginners. Fix taps, unblock drains, paint rooms and more — no experience needed.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
        <Footer />
        <StorageBanner />
        <NewsletterPopup />
        <CookieBanner />
      </body>
    </html>
  );
}
