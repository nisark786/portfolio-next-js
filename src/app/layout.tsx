import type { Metadata } from "next";
import { Geist, Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import SplashCursor from "@/components/splash-cursor";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ScrollProgress } from "@/components/scroll-progress";
import { Particles } from "@/components/particles";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nisark.in"),
  title: {
    default: "Nisar K | Full Stack Developer",
    template: "%s | Nisar K",
  },
  description: "Nisar K is a Full Stack Developer specializing in React, Next.js, Django, Python, and scalable web applications.",
  keywords: [
    "Nisar K",
    "Nisar K Full Stack Developer",
    "Nisar K Portfolio",
    "Full Stack Developer India",
    "Next.js Developer",
    "React Developer",
    "Python Django Developer"
  ],

  authors: [{ name: "Nisar K" }],
  creator: "Nisar K",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nisark.in",
    siteName: "Nisar K Portfolio",
    title: "Nisar K | Full Stack Developer",
    description: "Nisar K is a Full Stack Developer specializing in React, Next.js, Django, Python, and scalable web applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nisar K Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nisar K | Full Stack Developer",
    description: "Nisar K is a Full Stack Developer specializing in React, Next.js, Django, Python, and scalable web applications.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nisark.in",
  },

};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Nisar K",
            url: "https://nisark.in",
            image: "https://nisark.in/icon.png",
            jobTitle: "Full Stack Developer",
            sameAs: [
              "https://linkedin.com/in/nisar-k",
              "https://github.com/nisark786"
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Nisar K",
            url: "https://nisark.in",
            image: "https://nisark.in/favicon.ico",
            jobTitle: "Full Stack Developer",
            sameAs: [
              "https://www.linkedin.com/in/YOUR_LINKEDIN",
              "https://github.com/YOUR_GITHUB"
            ]
          })
        }}
      />

      <body
        className={`${geistSans.variable} ${outfit.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <SmoothScroll />
          <SplashCursor />
          <ScrollProgress />
          <Particles />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
