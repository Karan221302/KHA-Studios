import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "KHA STUDIOS | Architecture & Interior Design",
  description:
    "KHA Studios provides architectural design, interior design, planning and 3D visualization servies.",
    verification:{
      google: "uIYKlljoFmBqCPZ9qHBdyn7EWl5Dq4uwvoUnPhk5RpU"
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