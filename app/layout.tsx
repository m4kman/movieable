import type { Metadata } from "next";
import localFont from "next/font/local";

import Navbar from "@/app/ui/Navbar";
import Footer from "@/app/ui/Footer";

import "./globals.css";

const monoSans = localFont({
  src: "./font/mona-sans.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Movieable - What to watch next?",
  description: "A search engine for movies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark mx-auto max-w-7xl" lang="en">
      <body className={`${monoSans.className} flex min-h-screen flex-col`}>
        <Navbar />
        {children}
        <div className="mt-auto">
          <Footer />
        </div>
      </body>
    </html>
  );
}
