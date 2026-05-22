import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "KHA STUDIOS",
  description:
    "Architectural & Interior Design Studio",
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