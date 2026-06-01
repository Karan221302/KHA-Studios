import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "KHA STUDIOS | Architecture & Interior Design",
  description:
    "KHA Studios provides architectural design, interior design, planning and 3D visualization services.",
    verification:{
      google: "uIYKlljoFmBqCPZ9qHBdyn7EWl5Dq4uwvoUnPhk5RpU",
      
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}