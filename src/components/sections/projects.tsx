"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Developer Portfolio",
        description:
            "A high-performance, interactive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features include a 3D skill cloud, smooth Framer Motion animations, dark mode support, and a custom responsive design. Optimized for SEO and accessibility.",
        tags: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        image: "/projects/portfolio.png",
        videoUrl: "",
        github: "https://github.com/nisark786/portfolio-ai",
        demo: "https://nisar-portfolio.vercel.app/",
    },
    {
        title: "Choco-Nut",
        description:
            "Premium Full-Stack E-commerce Platform built for high-concurrency (500+ users). Features real-time admin notifications via Django Channels + Redis, AI chatbot powered by Gemini Flash (60% faster query resolution), Celery integration (50% API latency reduction), multi-layered auth (40% reduction in unauthorized access), and Razorpay payment integration (PCI compliant). Deployed on AWS EC2 with Nginx reverse proxy achieving 99.9% uptime.",
        tags: ["Django DRF", "React.js", "PostgreSQL", "Docker", "AWS", "Redis", "WebSockets", "Celery", "Gemini AI"],
        image: "/projects/choconut.png",
        videoUrl: "",
        github: "https://github.com/nisark786/choconut-frontend-v2",
        githubBackend: "https://github.com/nisark786/choconut-backend-v2",
        demo: "https://choconut.vercel.app/",
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-24 px-6 bg-surface/30">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 font-outfit text-4xl font-bold md:text-5xl">
                        Featured Projects
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted">
                        A selection of projects that showcase my skills and experience in
                        building modern applications.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            if (isHovered) {
                videoRef.current.play().catch(() => { });
            } else {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        }
    }, [isHovered]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface backdrop-blur-sm transition-all hover:border-accent-primary/50 hover:shadow-xl hover:shadow-accent-primary/10"
        >
            {/* Image/Video Container */}
            <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20">

                {/* Fallback Initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-outfit text-6xl font-bold text-accent-primary/20">
                        {project.title.charAt(0)}
                    </span>
                </div>

                {/* Video Preview */}
                {project.videoUrl && (
                    <video
                        ref={videoRef}
                        src={project.videoUrl}
                        className={`absolute inset-0 z-10 h-full w-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                        muted
                        loop
                        playsInline
                    />
                )}

                {/* Image */}
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-cover transition-transform duration-500 group-hover:scale-110 ${isHovered && project.videoUrl ? 'opacity-0' : 'opacity-100'}`}
                />

                {/* Overlay */}
                <div className={`absolute inset-0 z-20 bg-black/50 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-0 group-hover:opacity-10'}`} />
            </div>

            <div className="p-6">
                <h3 className="mb-2 font-outfit text-xl font-bold transition-colors group-hover:text-accent-primary">
                    {project.title}
                </h3>
                <p className="mb-4 text-sm text-muted">{project.description}</p>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-accent-primary/10 px-3 py-1 text-xs font-medium text-accent-primary"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent-primary"
                    >
                        <Github className="h-4 w-4" />
                        Frontend
                    </a>
                    {project.githubBackend && (
                        <a
                            href={project.githubBackend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent-primary"
                        >
                            <Github className="h-4 w-4" />
                            Backend
                        </a>
                    )}
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent-primary"
                    >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                    </a>
                </div>
            </div>

            {/* Hover Background Glow */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 opacity-0 transition-opacity group-hover:opacity-100" />
        </motion.div>
    );
}
