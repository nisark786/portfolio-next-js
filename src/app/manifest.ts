import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Nisar K - Full Stack Python Developer Portfolio',
        short_name: 'Nisar K Portfolio',
        description: 'Full Stack Python Developer from Malappuram, Kerala specializing in Django, FastAPI, React, and Next.js. Building scalable, high-performance web applications.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0a0a0a',
        theme_color: '#6366f1',
        icons: [
            {
                src: '/icon.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    }
}
