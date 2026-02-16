import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { About as AboutSection } from "@/components/sections/about";

export const metadata: Metadata = {
    title: "About Nisar K | Full Stack Python Developer from Malappuram, Kerala",
    description: "Learn about Nisar K, a Full Stack Python Developer from Malappuram, Kerala specializing in Django, FastAPI, React, and Next.js. Educational background at University of Calicut.",
    keywords: [
        "About Nisar K",
        "Nisar K Biography",
        "Full Stack Developer Malappuram",
        "Python Developer Kerala",
        "University of Calicut",
        "Django Developer Background",
        "FastAPI Developer Profile",
        "Web Developer Kerala India"
    ],
    openGraph: {
        title: "About Nisar K | Full Stack Python Developer",
        description: "Learn about Nisar K's journey as a Full Stack Python Developer from Malappuram, Kerala. Expertise in Django, FastAPI, React, and Next.js.",
        url: "https://nisark.in/about",
        type: "profile",
    },
    alternates: {
        canonical: "https://nisark.in/about",
    },
};

export default function AboutPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "mainEntity": {
                            "@type": "Person",
                            "name": "Nisar K",
                            "jobTitle": "Full Stack Python Developer",
                            "description": "Full Stack Python Developer from Malappuram, Kerala specializing in Django, FastAPI, React, and Next.js",
                            "url": "https://nisark.in",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Malappuram",
                                "addressRegion": "Kerala",
                                "addressCountry": "India"
                            },
                            "alumniOf": {
                                "@type": "EducationalOrganization",
                                "name": "University of Calicut"
                            }
                        }
                    }),
                }}
            />
            <Navbar />
            <main className="min-h-screen pt-20">
                <AboutSection />
            </main>
            <Footer />
        </>
    );
}
