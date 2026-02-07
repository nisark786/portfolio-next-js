"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useState, useRef } from "react";

export function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus("idle");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to send message");
            }

            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error: any) {
            console.error("SMTP Error:", error);
            setErrorMessage(error.message || "Failed to send message. Please try again later.");
            setStatus("error");
            setTimeout(() => {
                setStatus("idle");
                setErrorMessage("");
            }, 5000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-6 bg-surface/30">
            <div className="mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 font-outfit text-4xl font-bold md:text-5xl">
                        Get In Touch
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted">
                        Have a project in mind? Let's work together to create something
                        amazing.
                    </p>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <div className="rounded-2xl border border-border bg-surface p-6 backdrop-blur-sm">
                            <Mail className="mb-4 h-8 w-8 text-accent-primary" />
                            <h3 className="mb-2 font-medium">Email</h3>
                            <a
                                href="mailto:nisar.dev12@gmail.com"
                                className="text-sm text-muted hover:text-accent-primary"
                            >
                                nisar.dev12@gmail.com
                            </a>
                        </div>

                        <div className="rounded-2xl border border-border bg-surface p-6 backdrop-blur-sm">
                            <MapPin className="mb-4 h-8 w-8 text-accent-primary" />
                            <h3 className="mb-2 font-medium">Location</h3>
                            <p className="text-sm text-muted">
                                Kozhikode, Kerala
                                <br />
                                India
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        ref={formRef}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        onSubmit={handleSubmit}
                        className="lg:col-span-2"
                    >
                        <div className="space-y-4 rounded-2xl border border-border bg-surface p-8 backdrop-blur-sm">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="user_name" // Required for EmailJS default template
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-colors focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20"
                                    placeholder="Your name"
                                    required
                                    disabled={loading}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="user_email" // Required for EmailJS default template
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                    className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-colors focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20"
                                    placeholder="your.email@example.com"
                                    required
                                    disabled={loading}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message" // Required for EmailJS default template
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                                    rows={6}
                                    className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 transition-colors focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20"
                                    placeholder="Tell me about your project..."
                                    required
                                    disabled={loading}
                                />
                            </div>

                            {status === "success" && (
                                <div className="flex items-center gap-2 rounded-lg bg-emerald-500/10 p-3 text-sm text-emerald-500">
                                    <CheckCircle2 className="h-4 w-4" />
                                    Message sent successfully! I'll get back to you soon.
                                </div>
                            )}

                            {status === "error" && (
                                <div className="flex items-center gap-2 rounded-lg bg-red-500/10 p-3 text-sm text-red-500">
                                    <AlertCircle className="h-4 w-4" />
                                    {errorMessage}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-accent-primary px-6 py-3 font-medium text-white transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-accent-primary/50 disabled:opacity-70 disabled:hover:scale-100"
                            >
                                {loading ? (
                                    <>
                                        Sending...
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </>
                                )}
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
