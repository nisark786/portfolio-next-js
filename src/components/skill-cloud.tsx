"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import { motion } from "framer-motion";

// Skills list
const skills = [
    "Python", "Django", "FastAPI", "JavaScript", "TypeScript",
    "React", "Next.js", "Redux", "Zustand", "HTML5",
    "CSS3", "Tailwind", "Bootstrap", "MUI", "shadcn/ui",
    "PostgreSQL", "SQL", "Supabase", "Redis", "Docker",
    "Kubernetes", "AWS", "Git", "Jest", "DRF"
];

export function SkillCloud() {
    return (
        <div className="relative flex h-[450px] w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface/30 backdrop-blur-sm">
            <TagCloud tags={skills} radius={180} />
            <div className="absolute bottom-4 right-4 text-xs text-muted/50">
                Independent 3D Skill Sphere
            </div>
        </div>
    );
}

function TagCloud({ tags, radius }: { tags: string[]; radius: number }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });

    // Compute initial positions regarding a sphere
    const items = useMemo(() => {
        const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle
        return tags.map((tag, i) => {
            const y = 1 - (i / (tags.length - 1)) * 2;
            const radiusAtY = Math.sqrt(1 - y * y);
            const theta = phi * i;

            const x = Math.cos(theta) * radiusAtY;
            const z = Math.sin(theta) * radiusAtY;

            return { tag, x, y, z };
        });
    }, [tags]);

    // Animation Loop
    useEffect(() => {
        let animationFrameId: number;
        let startX = 0;
        let startY = 0;
        let currentX = 0;
        let currentY = 0;

        // Base rotation speed
        let speedX = 0.001;
        let speedY = 0.001;

        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            // Mouse position relative to center
            const x = e.clientX - (rect.left + rect.width / 2);
            const y = e.clientY - (rect.top + rect.height / 2);

            // Interaction logic: mouse position affects rotation speed
            speedY = x * 0.0001;
            speedX = -y * 0.0001;
        };

        const animate = () => {
            setRotation((prev) => ({
                x: prev.x + speedX,
                y: prev.y + speedY,
                z: prev.z,
            }));
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", handleMouseMove);
        animationFrameId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative flex h-full w-full items-center justify-center [perspective:1000px]"
        >
            <div className="relative h-full w-full [transform-style:preserve-3d]">
                {items.map((item, i) => (
                    <Tag key={i} item={item} rotation={rotation} radius={radius} />
                ))}
            </div>
        </div>
    );
}

function Tag({
    item,
    rotation,
    radius,
}: {
    item: { tag: string; x: number; y: number; z: number };
    rotation: { x: number; y: number; z: number };
    radius: number;
}) {
    // 3D Rotation Math
    const sinX = Math.sin(rotation.x);
    const cosX = Math.cos(rotation.x);
    const sinY = Math.sin(rotation.y);
    const cosY = Math.cos(rotation.y);
    const sinZ = Math.sin(rotation.z);
    const cosZ = Math.cos(rotation.z);

    // Rotate around X
    let y1 = item.y * cosX - item.z * sinX;
    let z1 = item.z * cosX + item.y * sinX;

    // Rotate around Y
    let x2 = item.x * cosY - z1 * sinY;
    let z2 = z1 * cosY + item.x * sinY;

    // Rotate around Z
    let x3 = x2 * cosZ - y1 * sinZ;
    let y3 = y1 * cosZ + x2 * sinZ;

    // Final positions
    const x = x3 * radius;
    const y = y3 * radius;
    const z = z2 * radius;

    // Scale and opacity based on Z (depth)
    const scale = (z + 2 * radius) / (2.5 * radius); // Simple perspective projection
    const opacity = Math.max(0.1, (z + radius) / (2 * radius)); // Fade out back items

    return (
        <span
            className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 cursor-default whitespace-nowrap font-outfit text-sm font-bold text-accent-primary transition-colors hover:text-white hover:z-50"
            style={{
                transform: `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`,
                opacity: opacity,
                zIndex: Math.floor(scale * 100),
                filter: `blur(${(1 - scale) * 2}px)`, // Optional depth blur
            }}
        >
            {item.tag}
        </span>
    );
}
