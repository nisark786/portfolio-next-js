import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { FAQSchema } from "@/components/faq-schema";

// Lazy load below-the-fold components
const Projects = dynamic(() => import("@/components/sections/projects").then(mod => ({ default: mod.Projects })), {
  loading: () => <div className="py-24 px-6 bg-surface/30" />,
});

const Experience = dynamic(() => import("@/components/sections/experience").then(mod => ({ default: mod.Experience })), {
  loading: () => <div className="py-24 px-6" />,
});

const Contact = dynamic(() => import("@/components/sections/contact").then(mod => ({ default: mod.Contact })), {
  loading: () => <div className="py-24 px-6" />,
});

export default function Home() {
  return (
    <>
      <FAQSchema />
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
