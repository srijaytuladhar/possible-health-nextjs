import type { Metadata } from "next";
import SchemaMarkup from "@/components/SEO/SchemaMarkup";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://ngoheart.org'),
  title: "Empowering Communities | Leading Health & Education NGO",
  description: "Join our mission to empower communities through sustainable health, education, and development programs worldwide.",
  openGraph: {
    title: "Empowering Communities | NGO",
    description: "Building better lives through community empowerment.",
    images: ["/og-image.png"],
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
        <SchemaMarkup />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
