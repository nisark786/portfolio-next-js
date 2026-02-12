"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { GlitchText } from "@/components/glitch-text";

export function Hero() {
    return (
        <section
            id="hero"
            className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
        >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-accent-primary/20 blur-[128px]" />
                <div className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-accent-secondary/20 blur-[128px] animation-delay-2000" />
            </div>

            <div className="mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.p
                        className="mb-4 text-sm font-medium tracking-wider text-accent-primary"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        HI, I'M NISAR K
                    </motion.p>

                    <motion.h1
                        className="mb-6 font-outfit text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                            Nisar K
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl">
                            <GlitchText text="Full Stack Python Developer" />
                        </span>
                    </motion.h1>

                    <motion.p
                        className="mb-8 text-lg text-muted md:text-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Nisar K is a Full Stack Python Developer from Malappuram, Kerala, specializing in Django, FastAPI, and React Architecture. Expert in building scalable, high-performance web applications with Docker, Redis, and modern technologies.
                    </motion.p>

                    <motion.div
                        className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <a
                            href="#projects"
                            className="group relative overflow-hidden rounded-full bg-accent-primary px-8 py-3 font-medium text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent-primary/50"
                        >
                            <span className="relative z-10">View My Work</span>
                            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-accent-primary to-accent-secondary opacity-0 transition-opacity group-hover:opacity-100" />
                        </a>
                        <a
                            href="#contact"
                            className="rounded-full border border-border bg-surface/50 px-8 py-3 font-medium backdrop-blur-sm transition-all hover:border-accent-primary hover:bg-accent-primary/10"
                        >
                            Get in Touch
                        </a>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown className="h-6 w-6 text-muted" />
                </motion.div>
            </div>
        </section>
    );
}
