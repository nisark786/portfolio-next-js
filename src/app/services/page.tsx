"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Code, Zap, Users, Sparkles } from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Code,
        title: "Django Web Development",
        description: "Full-stack Django applications with Django REST Framework, Celery for async tasks, and Redis caching. Building scalable, maintainable web applications from scratch.",
        features: [
            "Custom Django applications",
            "RESTful API development",
            "Database design & optimization",
            "Authentication & authorization",
            "Admin panel customization"
        ]
    },
    {
        icon: Zap,
        title: "FastAPI Development",
        description: "High-performance async Python APIs with FastAPI. Perfect for microservices, real-time applications, and modern backend architecture.",
        features: [
            "Async API development",
            "WebSocket implementation",
            "API documentation (OpenAPI)",
            "Microservices architecture",
            "Integration with modern frontends"
        ]
    },
    {
        icon: Sparkles,
        title: "React & Next.js Development",
        description: "Modern, responsive frontend applications using React and Next.js. Server-side rendering, static generation, and optimized performance.",
        features: [
            "Next.js applications",
            "React component libraries",
            "TypeScript integration",
            "SEO optimization",
            "Performance optimization"
        ]
    },
    {
        icon: Users,
        title: "Full Stack Solutions",
        description: "End-to-end web application development combining Python backends with modern React frontends. Complete project lifecycle from design to deployment.",
        features: [
            "Full project architecture",
            "Docker containerization",
            "CI/CD pipeline setup",
            "Cloud deployment (AWS)",
            "Maintenance & support"
        ]
    }
];

export default function ServicesPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Web Development",
                        "provider": {
                            "@type": "Person",
                            "name": "Nisar K",
                            "jobTitle": "Full Stack Python Developer"
                        },
                        "areaServed": {
                            "@type": "Country",
                            "name": "India"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Development Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Django Web Development",
                                        "description": "Full-stack Django application development"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "FastAPI Development",
                                        "description": "High-performance async Python APIs"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "React & Next.js Development",
                                        "description": "Modern frontend applications"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Full Stack Solutions",
                                        "description": "Complete web application development"
                                    }
                                }
                            ]
                        }
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
                                Development Services
                            </h1>
                            <p className="mx-auto max-w-2xl text-lg text-muted">
                                Professional web development services specializing in Python, Django, FastAPI,
                                React, and Next.js. From MVP to enterprise-grade applications.
                            </p>
                        </motion.div>

                        {/* Services Grid */}
                        <div className="grid gap-8 md:grid-cols-2 mb-16">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="rounded-2xl border border-border bg-surface/30 p-8 backdrop-blur-sm hover:border-accent-primary/50 transition-all"
                                >
                                    <div className="mb-6 inline-flex rounded-xl bg-accent-primary/10 p-3">
                                        <service.icon className="h-8 w-8 text-accent-primary" />
                                    </div>
                                    <h2 className="mb-4 font-outfit text-2xl font-bold">
                                        {service.title}
                                    </h2>
                                    <p className="mb-6 text-muted">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-start">
                                                <span className="mr-2 mt-1 text-accent-primary">✓</span>
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="rounded-2xl border border-border bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 p-12 text-center backdrop-blur-sm"
                        >
                            <h2 className="mb-4 font-outfit text-3xl font-bold">
                                Ready to Start Your Project?
                            </h2>
                            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted">
                                Let's discuss your requirements and build something amazing together.
                                Available for freelance projects and long-term collaborations.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-accent-primary px-8 py-3 font-medium text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent-primary/50"
                            >
                                Get in Touch
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
