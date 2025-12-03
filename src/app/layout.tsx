import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Maxxar | Mobile Car Cleaning & AutoCare",
  description: "Professional mobile car cleaning and auto care services. We come to you! Premium detailing, wash packages, and paint protection for vehicles across Australia.",
  keywords: "mobile car wash, car cleaning, auto detailing, car care, mobile detailing, Australia",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Maxxar | Mobile Car Cleaning & AutoCare",
    description: "Professional mobile car cleaning and auto care services. We come to you!",
    type: "website",
    locale: "en_AU",
    siteName: "Maxxar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
