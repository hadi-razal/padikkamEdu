import type { Metadata } from "next";
import { Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";

// Poppins font for better readability and modern look
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
});

// Roboto Mono for code snippets or technical sections
const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Education Portal",
  description:
    "Your go-to platform for online learning, resources, and courses.",
  openGraph: {
    type: "website",
    title: "Education Portal",
    description: "Empowering students with knowledge and resources.",
    url: "https://education-portal.com",
    images: [
      {
        url: "/images/portal-preview.jpg",
        width: 800,
        height: 600,
        alt: "Education Portal Preview",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${poppins.variable} ${robotoMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
