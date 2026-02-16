import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Contact as ContactSection } from "@/components/sections/contact";

export const metadata: Metadata = {
    title: "Contact Nisar K | Full Stack Python Developer in Malappuram, Kerala",
    description: "Get in touch with Nisar K for Django, FastAPI, React, and Next.js development projects. Based in Malappuram, Kerala, India. Available for freelance work.",
    keywords: [
        "Contact Nisar K",
        "Hire Python Developer",
        "Django Developer Contact",
        "FastAPI Developer Malappuram",
        "Freelance Developer Kerala",
        "Full Stack Developer Contact",
        "Web Development Services Kerala"
    ],
    openGraph: {
        title: "Contact Nisar K | Full Stack Python Developer",
        description: "Get in touch for Django, FastAPI, React, and Next.js development projects.",
        url: "https://nisark.in/contact",
        type: "website",
    },
    alternates: {
        canonical: "https://nisark.in/contact",
    },
};

export default function ContactPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "name": "Contact Nisar K",
                        "description": "Contact page for Nisar K - Full Stack Python Developer",
                        "url": "https://nisark.in/contact",
                        "mainEntity": {
                            "@type": "Person",
                            "name": "Nisar K",
                            "email": "nisar.dev12@gmail.com",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Malappuram",
                                "addressRegion": "Kerala",
                                "addressCountry": "India"
                            }
                        }
                    }),
                }}
            />
            <Navbar />
            <main className="min-h-screen pt-20">
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}
