import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Client Onboarding & Quote Request | Web Design Services",
  description:
    "Fill out this interactive onboarding form to help us understand your website project needs. We'll provide an accurate custom quote tailored to your business.",
  keywords: [
    "web design",
    "website quote",
    "client onboarding",
    "website development",
    "freelance web designer",
  ],
  openGraph: {
    title: "Client Website Onboarding & Quote Request",
    description:
      "Tell us about your project and get an accurate custom quote for your website.",
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
  themeColor: "#4f46e5",
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
