"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        year: "July 2025 - Present",
        title: "Python Full Stack Developer",
        company: "Bridgeon Solutions, Calicut",
        description:
            "Architected end-to-end web solutions using Django and React, reducing development time by 20%. Engineered RESTful APIs with DRF, optimizing database queries that enhanced data retrieval speeds by 30%. Implemented Unit Testing with Pytest, reducing critical bugs by 50% before production deployment. Spearheaded the implementation of Clean Architecture patterns, improving maintainability and reducing technical debt by 30%. Streamlined deployment pipelines using Docker, reducing deployment time by 40%.",
    },
    {
        year: "2024 - 2025",
        title: "Instructor (Islamic Culture & History)",
        company: "Najathul Islam Higher Secondary Madrasa, Kozhippuram",
        description: "Educated and mentored a class of 30+ students daily, fostering discipline and cultural understanding. Developed engaging curriculum plans and managed classroom dynamics, enhancing public speaking and leadership skills.",
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-24 px-6">
            <div className="mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 font-outfit text-4xl font-bold md:text-5xl">
                        Experience
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted">
                        My professional journey building innovative solutions.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-primary md:left-1/2" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-0 top-0 flex h-4 w-4 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                                    <div className="h-4 w-4 rounded-full border-4 border-background bg-accent-primary shadow-lg shadow-accent-primary/50" />
                                </div>

                                {/* Content */}
                                <div
                                    className={`ml-8 flex-1 md:ml-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                                        }`}
                                >
                                    <div className="rounded-2xl border border-border bg-surface p-6 backdrop-blur-sm transition-all hover:border-accent-primary/50 hover:shadow-lg hover:shadow-accent-primary/10">
                                        <span className="mb-2 inline-block rounded-full bg-accent-primary/10 px-3 py-1 text-xs font-medium text-accent-primary">
                                            {exp.year}
                                        </span>
                                        <h3 className="mb-1 font-outfit text-xl font-bold">
                                            {exp.title}
                                        </h3>
                                        <p className="mb-2 text-sm font-medium text-accent-secondary">
                                            {exp.company}
                                        </p>
                                        <p className="text-sm text-muted">{exp.description}</p>
                                    </div>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="hidden flex-1 md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
