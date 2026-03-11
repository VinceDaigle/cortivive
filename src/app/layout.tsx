import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CortiVive — Fix Your Cortisol, Lose the Belly",
  description:
    "Weekly cortisol-reduction routines, anti-inflammatory meal plans, and stress management protocols. Your cortisol is keeping the weight on. We fix that.",
  openGraph: {
    title: "CortiVive — Fix Your Cortisol, Lose the Belly",
    description:
      "Weekly cortisol-reduction routines, anti-inflammatory meal plans, and stress management protocols.",
    type: "website",
    url: "https://cortivive.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "CortiVive — Fix Your Cortisol, Lose the Belly",
    description:
      "Weekly cortisol-reduction routines, anti-inflammatory meal plans, and stress management protocols.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
