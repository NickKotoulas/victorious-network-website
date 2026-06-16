import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "greek"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Victorious Network",
  description:
    "Premium AI-driven marketing and communications agency website foundation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
