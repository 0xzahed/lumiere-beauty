import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "LUMIÈRE — Premium Skincare & Beauty",
  description: "Thoughtfully selected skincare and beauty essentials for your everyday glow.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Jost:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-ivory text-ink font-sans antialiased"><Providers>{children}</Providers></body>
    </html>
  );
}
