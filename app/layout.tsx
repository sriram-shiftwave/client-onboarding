import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Client Onboarding & Project Scope | Web Design & Development",
  description:
    "Interactive website onboarding and scope intake form to evaluate your project needs and prepare an accurate custom quote.",
  keywords: [
    "client onboarding",
    "website scope",
    "web design quote",
    "project intake",
    "freelance web designer",
  ],
  openGraph: {
    title: "Client Onboarding & Project Scope",
    description:
      "Interactive website onboarding and scope intake form to evaluate your project needs and prepare an accurate custom quote.",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbfb" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        {children}
      </body>
    </html>
  );
}
