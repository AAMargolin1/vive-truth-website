// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ['400', '700', '800'],
  variable: '--font-playfair-display',
});

export const metadata: Metadata = {
  title: "The God Hypothesis: An Analytical Investigation",
  description: "An analytical, evidence-based investigation of the God hypothesis.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable} scroll-smooth`}>
      {/*
        The <head> tag is implicitly managed by Next.js through the `metadata` export and 
        any <Head> components used in child pages (though less common with App Router metadata).
        Do NOT add an explicit <head> tag here unless you have a very specific reason
        and understand how it interacts with Next.js's head management.
      */}
      <body className={`font-sans bg-brand-navy text-gray-100 flex flex-col min-h-screen antialiased`}>
        <Header />
        <main className="flex-grow"> {/* Removed container mx-auto from here, apply it on page.tsx if needed */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}