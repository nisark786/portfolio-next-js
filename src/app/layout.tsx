import type { Metadata } from "next";
import { Geist, Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgress } from "@/components/scroll-progress";
import { Particles } from "@/components/particles";
import { ClientComponents } from "@/components/client-components";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nisark.in"),
  title: {
    default: "Nisar K | Full Stack Python Developer from Malappuram, Kerala",
    template: "%s | Nisar K",
  },
  description: "Nisar K is a Full Stack Python Developer from Malappuram, Kerala, India specializing in Django, FastAPI, React, Next.js, and scalable web applications. Expert in building high-performance systems with Docker, Redis, and WebSockets.",
  keywords: [
    "Nisar K",
    "Nisar K Portfolio",
    "Nisar K Full Stack Developer",
    "Nisar K Python Developer",
    "Nisar K Django Developer",
    "Full Stack Developer Malappuram",
    "Full Stack Developer Kerala",
    "Full Stack Developer India",
    "Python Developer Kerala",
    "Django Developer India",
    "React Developer Kerala",
    "Next.js Developer",
    "FastAPI Developer",
    "Full Stack Python Developer",
    "Django REST Framework Developer",
    "Backend Developer Kerala",
    "Web Developer Malappuram",
    "Software Engineer Kerala",
    "Freelance Developer Kerala",
    "Docker Expert India",
    "Redis Developer",
    "WebSocket Developer",
    "AI Developer Kerala",
    "Celery Developer",
    "PostgreSQL Developer",
    "AWS Developer India"
  ],

  authors: [{ name: "Nisar K", url: "https://nisark.in" }],
  creator: "Nisar K",
  publisher: "Nisar K",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nisark.in",
    siteName: "Nisar K - Full Stack Python Developer",
    title: "Nisar K | Full Stack Python Developer from Malappuram, Kerala",
    description: "Nisar K is a Full Stack Python Developer from Malappuram, Kerala, India specializing in Django, FastAPI, React, Next.js, and scalable web applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nisar K - Full Stack Python Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nisar K | Full Stack Python Developer",
    description: "Full Stack Python Developer from Malappuram, Kerala specializing in Django, FastAPI, React, and Next.js. Building scalable web applications.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://nisark.in",
  },
  verification: {
    google: "PqdS5PR7Tmc7KwL6aSA0j4r5Xlo-O3JqM3PyNy5ISLk",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Nisar K Portfolio",
                "url": "https://nisark.in",
                "description": "Full Stack Python Developer Portfolio - Nisar K",
                "author": {
                  "@type": "Person",
                  "name": "Nisar K"
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://nisark.in/?s={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Nisar K",
                "url": "https://nisark.in",
                "image": "https://nisark.in/icon.png",
                "jobTitle": "Full Stack Python Developer",
                "description": "Full Stack Python Developer specializing in Django, FastAPI, React, and Next.js",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Malappuram",
                  "addressRegion": "Kerala",
                  "addressCountry": "India"
                },
                "alumniOf": {
                  "@type": "EducationalOrganization",
                  "name": "University of Calicut",
                  "address": {
                    "@type": "PostalAddress",
                    "addressRegion": "Kerala",
                    "addressCountry": "India"
                  }
                },
                "knowsAbout": [
                  "Python",
                  "Django",
                  "FastAPI",
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Docker",
                  "Redis",
                  "WebSockets",
                  "Celery",
                  "PostgreSQL",
                  "AWS",
                  "Full Stack Development",
                  "Backend Development",
                  "Frontend Development",
                  "API Development",
                  "Microservices"
                ],
                "hasOccupation": {
                  "@type": "Occupation",
                  "name": "Full Stack Developer",
                  "occupationLocation": {
                    "@type": "City",
                    "name": "Malappuram, Kerala, India"
                  },
                  "skills": [
                    "Django",
                    "FastAPI",
                    "React.js",
                    "Next.js",
                    "Python",
                    "TypeScript",
                    "Docker",
                    "Redis",
                    "WebSockets",
                    "Celery",
                    "PostgreSQL"
                  ]
                },
                "worksFor": {
                  "@type": "Organization",
                  "name": "Freelance / Independent"
                },
                "sameAs": [
                  "https://www.linkedin.com/in/nisar-k",
                  "https://github.com/nisark786"
                ]
              }
            ]),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <ClientComponents />
          <ScrollProgress />
          <Particles />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
