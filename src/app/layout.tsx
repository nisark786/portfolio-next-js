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
    default: "Developer Portfolio | Nisar K",
    template: "%s | Nisar K",
  },
  description: "Modern, high-performance portfolio of Nisar K, specializing in Full Stack Development, AI, and Python Architecture.",
  keywords: ["Nisar K", "Full Stack Developer", "AI Developer", "Python Developer", "Portfolio", "Web Development", "React", "Next.js"],
  authors: [{ name: "Nisar K" }],
  creator: "Nisar K",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nisark.in",
    siteName: "Nisar K Portfolio",
    title: "Nisar K | Developer Portfolio",
    description: "Modern, high-performance portfolio showcasing advanced web applications and AI solutions.",
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
    title: "Nisar K | Developer Portfolio",
    description: "Modern, high-performance portfolio showcasing advanced web applications and AI solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
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
