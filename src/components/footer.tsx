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
                            Nisar K
                        </h3>
                        <p className="mt-2 text-sm text-muted">
                            Full Stack Python Developer from Malappuram, Kerala. Building scalable web applications with Django, FastAPI, and React.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 font-medium text-foreground">Pages</h4>
                        <ul className="space-y-2">
                            {[
                                { name: "About", href: "/about" },
                                { name: "Projects", href: "/projects" },
                                { name: "Experience", href: "/experience" },
                                { name: "Skills", href: "/skills" },
                                { name: "Services", href: "/services" },
                                { name: "Blog", href: "/blog" },
                                { name: "Contact", href: "/contact" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-muted transition-colors hover:text-accent-primary"
                                    >
                                        {item.name}
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

                <div className="mt-8 border-t border-border pt-8">
                    <p className="text-center text-sm text-muted mb-3">
                        © {currentYear} Nisar K - Full Stack Python Developer | Malappuram, Kerala, India | Built with Next.js & Tailwind CSS
                    </p>
                    <div className="flex justify-center gap-6 text-xs text-muted">
                        <Link href="/privacy-policy" className="hover:text-accent-primary transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-of-service" className="hover:text-accent-primary transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
