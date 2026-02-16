"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SkillCloud } from "@/components/skill-cloud";
import { motion } from "framer-motion";

const skillCategories = [
    {
        category: "Backend Development",
        skills: [
            { name: "Python", level: "Expert" },
            { name: "Django", level: "Expert" },
            { name: "FastAPI", level: "Expert" },
            { name: "Django REST Framework", level: "Expert" },
            { name: "Celery", level: "Advanced" },
            { name: "Redis", level: "Advanced" },
        ]
    },
    {
        category: "Frontend Development",
        skills: [
            { name: "React", level: "Expert" },
            { name: "Next.js", level: "Expert" },
            { name: "TypeScript", level: "Advanced" },
            { name: "JavaScript", level: "Expert" },
            { name: "Tailwind CSS", level: "Advanced" },
            { name: "HTML/CSS", level: "Expert" },
        ]
    },
    {
        category: "DevOps & Cloud",
        skills: [
            { name: "Docker", level: "Advanced" },
            { name: "AWS", level: "Intermediate" },
            { name: "Git", level: "Expert" },
            { name: "CI/CD", level: "Intermediate" },
            { name: "Linux", level: "Advanced" },
        ]
    },
    {
        category: "Databases & Tools",
        skills: [
            { name: "PostgreSQL", level: "Advanced" },
            { name: "MongoDB", level: "Intermediate" },
            { name: "WebSockets", level: "Advanced" },
            { name: "RESTful APIs", level: "Expert" },
            { name: "GraphQL", level: "Intermediate" },
        ]
    }
];

export default function SkillsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "name": "Technical Skills of Nisar K",
                        "description": "Comprehensive list of technical skills and expertise",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Python" },
                            { "@type": "ListItem", "position": 2, "name": "Django" },
                            { "@type": "ListItem", "position": 3, "name": "FastAPI" },
                            { "@type": "ListItem", "position": 4, "name": "React" },
                            { "@type": "ListItem", "position": 5, "name": "Next.js" },
                            { "@type": "ListItem", "position": 6, "name": "TypeScript" },
                            { "@type": "ListItem", "position": 7, "name": "Docker" },
                            { "@type": "ListItem", "position": 8, "name": "Redis" },
                            { "@type": "ListItem", "position": 9, "name": "PostgreSQL" },
                            { "@type": "ListItem", "position": 10, "name": "AWS" }
                        ]
                    }),
                }}
            />
            <Navbar />
            <main className="min-h-screen pt-20">
                <section className="py-24 px-6">
                    <div className="mx-auto max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-16 text-center"
                        >
                            <h1 className="mb-4 font-outfit text-4xl font-bold md:text-5xl">
                                Technical Skills
                            </h1>
                            <p className="mx-auto max-w-2xl text-lg text-muted">
                                Comprehensive expertise across modern web development technologies,
                                from backend Python frameworks to frontend React ecosystems.
                            </p>
                        </motion.div>

                        {/* Interactive Skill Cloud */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-24 relative"
                        >
                            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[300px] bg-gradient-to-r from-accent-primary/20 via-accent-secondary/20 to-accent-primary/20 blur-[100px] opacity-50 -z-10" />
                            <SkillCloud />
                        </motion.div>

                        {/* Categorized Skills */}
                        <div className="grid gap-8 md:grid-cols-2">
                            {skillCategories.map((category, categoryIndex) => (
                                <motion.div
                                    key={category.category}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + categoryIndex * 0.1 }}
                                    className="rounded-2xl border border-border bg-surface/30 p-6 backdrop-blur-sm"
                                >
                                    <h2 className="mb-4 font-outfit text-2xl font-bold text-accent-primary">
                                        {category.category}
                                    </h2>
                                    <div className="space-y-3">
                                        {category.skills.map((skill) => (
                                            <div key={skill.name} className="flex items-center justify-between">
                                                <span className="font-medium">{skill.name}</span>
                                                <span className="text-sm text-muted">{skill.level}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Additional Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="mt-16 rounded-2xl border border-border bg-surface/30 p-8 text-center backdrop-blur-sm"
                        >
                            <h2 className="mb-4 font-outfit text-2xl font-bold">
                                Continuous Learning
                            </h2>
                            <p className="text-muted">
                                Always exploring new technologies and best practices in web development.
                                Currently deepening expertise in microservices architecture, AI integration,
                                and cloud-native applications.
                            </p>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
