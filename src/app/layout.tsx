// src/app/layout.tsx
import type { Metadata } from "next";
// Import Playfair Display along with Inter
import { Inter, Playfair_Display } from "next/font/google"; // Corrected import
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Initialize the fonts
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter', // CSS variable for Inter
});
const playfairDisplay = Playfair_Display({ // Corrected variable name
  subsets: ["latin"],
  weight: ['400', '700', '800'], // Specify weights used
  variable: '--font-playfair-display', // CSS variable for Playfair Display
});

export const metadata: Metadata = {
  title: "The God Hypothesis: An Analytical Investigation", // Updated title
  description: "An analytical, evidence-based investigation of the God hypothesis.", // Updated description
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth"> {/* Added scroll-smooth */}
      {/* Apply font variables to the body */}
      <body className={`${inter.variable} ${playfairDisplay.variable} font-sans bg-[#0a0f1f] text-gray-200 flex flex-col min-h-screen antialiased`}>
        <Header />
        <main className="flex-grow"> {/* Removed container mx-auto here, will add per-page */}
          {children}
        </main>
        <Footer /> {/* We'll make a new footer component based on your HTML */}
      </body>
    </html>
  );
}