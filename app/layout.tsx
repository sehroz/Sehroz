import "./globals.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "sehroz.com",
    template: "%s | sehroz.com",
  },
  description:
    "Web developer at alphaappraisals.ca,condosx.ca and founder of stackedtowns.com",
  openGraph: {
    title: "sehroz.com",
    description:
      "Web developer at alphaappraisals.ca,condosx.ca and founder of stackedtowns.com",
    url: "https://sehroz.com",
    siteName: "sehroz.com",
    images: [
      {
        url: "/sehroz.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "SehrozKhan",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <body className={`bg-black`}> {children}</body>
    </html>
  );
}
