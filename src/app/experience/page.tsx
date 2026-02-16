import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Experience as ExperienceSection } from "@/components/sections/experience";

export const metadata: Metadata = {
    title: "Work Experience | Nisar K - Full Stack Python Developer",
    description: "Professional work experience of Nisar K, including Django development, FastAPI projects, and full stack web applications. Freelance and independent development.",
    keywords: [
        "Nisar K Experience",
        "Python Developer Experience",
        "Django Developer Career",
        "FastAPI Projects",
        "Freelance Developer Kerala",
        "Full Stack Work History",
        "Web Development Experience"
    ],
    openGraph: {
        title: "Work Experience | Nisar K",
        description: "Professional journey and work experience of Nisar K as a Full Stack Python Developer.",
        url: "https://nisark.in/experience",
        type: "website",
    },
    alternates: {
        canonical: "https://nisark.in/experience",
    },
};

export default function ExperiencePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Nisar K",
                        "jobTitle": "Full Stack Python Developer",
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
                                "WebSockets"
                            ]
                        },
                        "worksFor": {
                            "@type": "Organization",
                            "name": "Freelance / Independent"
                        }
                    }),
                }}
            />
            <Navbar />
            <main className="min-h-screen pt-20">
                <ExperienceSection />
            </main>
            <Footer />
        </>
    );
}
