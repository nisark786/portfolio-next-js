import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
    { icon: Github, href: "https://github.com/nisark786", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/nisar-k", label: "LinkedIn" },
    { icon: Mail, href: "mailto:nisar.dev12@gmail.com", label: "Email" },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-surface/50 backdrop-blur-sm">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Brand */}
                    <div>
                        <h3 className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text font-outfit text-xl font-bold text-transparent">
                            Nisar
                        </h3>
                        <p className="mt-2 text-sm text-muted">
                            Building intelligent systems with modern technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 font-medium text-foreground">Quick Links</h4>
                        <ul className="space-y-2">
                            {["About", "Projects", "Experience", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase()}`}
                                        className="text-sm text-muted transition-colors hover:text-accent-primary"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="mb-4 font-medium text-foreground">Connect</h4>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full border border-border bg-surface p-2 transition-all hover:border-accent-primary hover:bg-accent-primary/10"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-5 w-5 text-muted hover:text-accent-primary" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-border pt-8 text-center">
                    <p className="text-sm text-muted">
                        © {currentYear} Nisar. Built with Next.js & Tailwind CSS.
                    </p>
                </div>
            </div>
        </footer>
    );
}
