import type { Metadata } from "next";
import SchemaMarkup from "@/components/SEO/SchemaMarkup";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://possiblehealth.org'),
  title: "Possible Health | Community Health Innovation in Nepal",
  description: "Possible reduces suffering and improves lives by co-designing, testing, and scaling solutions that strengthen community care systems in Nepal and beyond.",
  openGraph: {
    title: "Possible Health | Health Innovation Rooted in Community",
    description: "Community-based health innovation — researching and scaling mental health, chronic disease, and primary care solutions in Nepal.",
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
