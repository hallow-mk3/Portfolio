import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Swasthik Shetty | Portfolio",
  description: "Senior Software Engineer specializing in Next.js, WebAssembly, and High-Performance Web Graphics. Explore my featured projects and technical background.",
  metadataBase: new URL("https://swasthik.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${display.variable} font-sans bg-[#09090B] text-white antialiased min-h-screen flex flex-col justify-between selection:bg-[#FF2E63] selection:text-white`}>
        <Navbar />
        <main className="flex-grow pt-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
