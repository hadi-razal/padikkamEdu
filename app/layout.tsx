import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Configure Poppins with multiple weights for better typography
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Padikkam.com - Your Gateway to Knowledge",
    template: "%s | Padikkam.com",
  },
  description: "Discover expert-led courses and elevate your learning journey with Padikkam.com - Kerala's premier online education platform.",
  keywords: ["online education", "courses", "learning platform", "education portal", "online learning", "Kerala education"],
  authors: [{ name: "Padikkam.com" }],
  creator: "Padikkam.com",
  publisher: "Padikkam.com",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://padikkam.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://padikkam.com",
    title: "Padikkam.com - Your Gateway to Knowledge",
    description: "Transform your learning journey with expert-led courses at Padikkam.com",
    siteName: "Padikkam.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Padikkam.com - Your Gateway to Knowledge",
    description: "Transform your learning journey with expert-led courses at Padikkam.com",
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
  verification: {
    google: "google-site-verification-code", // Add your verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#4F46E5" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-sans antialiased bg-gradient-to-b from-purple-950 to-indigo-900 min-h-screen">
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}