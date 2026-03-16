import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import StorageBanner from "@/components/StorageBanner";
import NewsletterPopup from "@/components/NewsletterPopup";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://fixit-first.co.uk"),
  title: "FixItFirst — DIY Guides for People Nobody Taught",
  description: "Step-by-step DIY guides written for complete beginners. Fix taps, unblock drains, paint rooms and more — no experience needed. Save hundreds vs calling a tradesperson.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
        <StorageBanner />
        <NewsletterPopup />
        <CookieBanner />
      </body>
    </html>
  );
}
