"use client";

export function FAQSchema() {
    const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Who is Nisar K?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nisar K is a Full Stack Python Developer from Malappuram, Kerala, India specializing in Django, FastAPI, React, and Next.js. He has expertise in building scalable, high-performance web applications with modern technologies including Docker, Redis, WebSockets, and Celery."
                }
            },
            {
                "@type": "Question",
                "name": "What technologies does Nisar K specialize in?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nisar K specializes in Python (Django, FastAPI), JavaScript/TypeScript (React, Next.js), database technologies (PostgreSQL), DevOps tools (Docker), message brokers (Redis, Celery), real-time communication (WebSockets), and cloud platforms (AWS). He focuses on full stack development with emphasis on backend architecture."
                }
            },
            {
                "@type": "Question",
                "name": "How can I contact Nisar K for web development projects?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can contact Nisar K through email at nisar.dev12@gmail.com, connect on LinkedIn at https://linkedin.com/in/nisar-k, or check out his work on GitHub at https://github.com/nisark786. Visit his portfolio at https://nisark.in for more information and a contact form."
                }
            },
            {
                "@type": "Question",
                "name": "What projects has Nisar K built?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nisar K has built several notable projects including Choco-Nut, a premium full-stack e-commerce platform with AI chatbot integration and real-time admin notifications, and a high-performance developer portfolio website. His projects showcase expertise in Django, React, PostgreSQL, Docker, AWS, Redis, and WebSockets."
                }
            },
            {
                "@type": "Question",
                "name": "Where is Nisar K located?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nisar K is based in Malappuram, Kerala, India. He works as a Full Stack Python Developer and is available for remote work and freelance projects."
                }
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
    );
}
