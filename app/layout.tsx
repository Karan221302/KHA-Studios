import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KHA STUDIOS | Architecture, Interior Design & 3D Visualization",
  description:
    "KHA Studios provides architectural design, interior design, planning and 3D visualization services.",

  applicationName: "KHA Studios",
  authors: [{ name: "KHA Studios" }],
  creator: "KHA Studios",
  publisher: "KHA Studios",

  keywords: [
    "KHA Studios",
    "Architect",
    "Architecture",
    "Interior Design",
    "3D Visualization",
    "Residential Design",
    "Commercial Design",
    "Kolhapur Architect",
  ],

  verification: {
    google: "uIYKlljoFmBqCPZ9qHBdyn7EWl5Dq4uwvoUnPhk5RpU",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Architect",
    name: "KHA Studios",
    url: "https://kha-studios.vercel.app",
    description: "Architecture and Interior Design Studio",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}