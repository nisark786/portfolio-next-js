import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Projects as ProjectsSection } from "@/components/sections/projects";

export const metadata: Metadata = {
    title: "Projects by Nisar K | Django, FastAPI, React & Next.js Applications",
    description: "Explore web development projects built by Nisar K using Django, FastAPI, React, Next.js, Docker, and modern tech stacks. Full stack portfolio showcase.",
    keywords: [
        "Nisar K Projects",
        "Django Projects",
        "FastAPI Applications",
        "React Projects",
        "Next.js Portfolio",
        "Full Stack Projects",
        "Web Development Portfolio",
        "Python Projects Kerala"
    ],
    openGraph: {
        title: "Projects by Nisar K | Full Stack Development Portfolio",
        description: "Explore Django, FastAPI, React, and Next.js projects built by Nisar K. Modern web applications with cutting-edge technologies.",
        url: "https://nisark.in/projects",
        type: "website",
    },
    alternates: {
        canonical: "https://nisark.in/projects",
    },
};

export default function ProjectsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "Projects by Nisar K",
                        "description": "Portfolio of web development projects including Django, FastAPI, React, and Next.js applications",
                        "url": "https://nisark.in/projects",
                        "author": {
                            "@type": "Person",
                            "name": "Nisar K"
                        }
                    }),
                }}
            />
            <Navbar />
            <main className="min-h-screen pt-20">
                <ProjectsSection />
            </main>
            <Footer />
        </>
    );
}
