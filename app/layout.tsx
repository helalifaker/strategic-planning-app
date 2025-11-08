import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Strategic Planning | School Board Financial Modeling",
  description: "Sophisticated strategic planning application for school board members to assess building developer proposals through 2052",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.className} antialiased bg-neutral-50 text-neutral-900`}>
        {children}
      </body>
    </html>
  );
}