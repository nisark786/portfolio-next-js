"use client";

import { motion } from "framer-motion";
import { SkillCloud } from "@/components/skill-cloud";

export function About() {
    return (
        <section id="about" className="py-24 px-6 bg-surface/30">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 font-outfit text-4xl font-bold md:text-5xl">
                        About Me
                    </h2>
                </motion.div>

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
                    {/* Bio & Photo Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        {/* Profile Image Placeholder */}
                        <div className="relative w-48 h-48 mx-auto lg:mx-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-2xl rotate-6 opacity-50 blur-lg" />
                            <div className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-accent-primary/20 bg-surface">
                                {/* Use a placeholder or user's image if available. user asked to "give my photo" but didn't provide URL for profile, unlike project. using placeholder. */}
                                <img
                                    src="/profile.jpg"
                                    alt="Nisar Patel"
                                    className="h-full w-full object-cover transition-all duration-500 dark:grayscale dark:hover:grayscale-0"
                                />
                            </div>
                        </div>

                        <div className="prose prose-invert">
                            <p className="text-lg leading-relaxed text-muted">
                                I'm a <span className="text-accent-primary font-bold">Full Stack Python Developer</span> specializing in the Python ecosystem{" "}
                                <span className="text-foreground">(Django, FastAPI)</span> and modern frontend{" "}
                                <span className="text-foreground">(React, Next.js)</span>. Expert in architecting distributed systems using{" "}
                                <span className="text-accent-primary font-bold">Docker, Celery, and Redis</span> for asynchronous task processing and real-time communication via{" "}
                                <span className="text-foreground">WebSockets</span>.
                            </p>
                            <p className="text-lg leading-relaxed text-muted mt-4">
                                I've implemented AI-driven features with <span className="text-accent-primary font-bold">Gemini Flash</span>, reducing response times by 40% and enhancing security with <span className="text-foreground">JWT & OAuth2</span>. Currently pursuing <span className="text-foreground">Bachelor of Arts in Arabic</span> at University of Calicut (Expected 2026).
                            </p>
                        </div>
                    </motion.div>

                    {/* Skills Visualization Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Decorative glow behind the cloud */}
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[300px] bg-gradient-to-r from-accent-primary/20 via-accent-secondary/20 to-accent-primary/20 blur-[100px] opacity-50 -z-10" />
                        <SkillCloud />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
