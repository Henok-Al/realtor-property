import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/assets/styles/globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HnkPropertyPulse",
  description: "Find The Perfect Rental Property",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
