import Image from 'next/image'

// Íconos temáticos lineales por especialidad (acento visual sobre la foto).
const ICONS = {
    'Odontología General': (
        <path d="M12 3c-2.8 0-4.6 1.7-5.4 3.4-.6 1.3-.6 2.7-.3 4.3.4 2.1 1.3 4.4 2 6.2.4 1 1 2.1 2.1 2.1.9 0 1.3-.8 1.6-1.9.2-.9.3-2 1-2s.8 1.1 1 2c.3 1.1.7 1.9 1.6 1.9 1.1 0 1.7-1.1 2.1-2.1.7-1.8 1.6-4.1 2-6.2.3-1.6.3-3-.3-4.3C16.6 4.7 14.8 3 12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    ),
    Ortodoncia: (
        <>
            <rect x="4" y="10" width="16" height="4" rx="2" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="7.5" cy="12" r="1.1" fill="currentColor" />
            <circle cx="12" cy="12" r="1.1" fill="currentColor" />
            <circle cx="16.5" cy="12" r="1.1" fill="currentColor" />
        </>
    ),
    Periodoncia: (
        <>
            <path d="M4 14c2-6 5-9 8-9s6 3 8 9c-2 3-5 5-8 5s-6-2-8-5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M12 9v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </>
    ),
    Endodoncia: (
        <path d="M12 3v6M12 9c-2 0-3.5 1.5-3.5 3.5S9 17 12 21c3-4 3.5-6.5 3.5-8.5S14 9 12 9Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    ),
    'Cirugías Implantes': (
        <>
            <path d="M12 3v5M9 8h6l-1 4h-4l-1-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M10 12v4a2 2 0 0 0 4 0v-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </>
    ),
    'Estética Dental': (
        <>
            <path d="M12 3l1.6 4.9L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.1L12 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
            <path d="M18 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        </>
    )
}

// Tarjeta de imagen con título superpuesto e ícono temático (especialidades odontológicas).
export default function SpecialtyCard ({ title, imageSrc }) {
    return (
        <div className="tilt group relative flex aspect-[20/17] w-full flex-col overflow-hidden rounded-[22px] border border-primary-300/60 shadow-[0_10px_24px_-16px_rgba(0,0,0,0.35)] transition-shadow duration-300" data-tilt-max="8">
            <Image
                alt={title}
                src={imageSrc}
                fill
                placeholder="blur"
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
            />
            <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'linear-gradient(180deg, rgba(36,26,43,0) 42%, rgba(36,26,43,0.85) 100%)' }} />
            <div className="absolute left-[0.9rem] top-[0.9rem] flex h-9 w-9 items-center justify-center rounded-full bg-primary-100/95 text-primary-600 shadow-md">
                <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]">
                    {ICONS[title] ?? null}
                </svg>
            </div>
            <span className="relative z-10 mt-auto p-[1.1rem] font-[700] leading-tight text-white">
                {title}
            </span>
        </div>
    )
}
