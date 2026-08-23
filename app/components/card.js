'use client'
import { useState } from 'react'
import Image from 'next/image'

const FlipIcon = () => (
    <svg viewBox='0 0 24 24' fill='none' className='h-[13px] w-[13px] flex-shrink-0'>
        <path d='M4 12a8 8 0 0 1 14.5-4.5M20 12a8 8 0 0 1-14.5 4.5M15 4v4h4M9 20v-4H5' stroke='currentColor' strokeWidth='1.6' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
)

// Tarjeta de profesional con flip 3D: cara frontal liviana (foto, nombre,
// rol, especialidad) y cara trasera con formación/experiencia completa.
// Reemplaza la dependencia de react-card-flip por un transform CSS directo
// (más liviano, mismo resultado visual).
export default function ProfesionalsCard ({ Profesional, isLead = false }) {
    const [isFlipped, setIsFlipped] = useState(false)

    if (!Profesional) return null

    const { srcRute, name, specialty, specialist, university, experience } = Profesional
    const hasMeta = Boolean(university) || (experience && experience.some((e) => e))

    return (
        <div className={`tilt w-full max-w-[320px] [perspective:1600px] ${isLead ? 'h-[460px]' : 'h-[440px]'}`} data-tilt-max='5'>
            <div
                className='relative h-full w-full transition-transform duration-[650ms] [transform-style:preserve-3d]'
                style={{ transform: isFlipped ? 'rotateY(180deg)' : 'none', transitionTimingFunction: 'cubic-bezier(0.4, 0.1, 0.2, 1)' }}
            >
                {/* Cara frontal */}
                <div className='absolute inset-0 flex flex-col overflow-hidden rounded-3xl border border-primary-300/60 bg-white shadow-[0_4px_18px_-10px_rgba(0,0,0,0.3)] transition-shadow duration-300 [backface-visibility:hidden]'>
                    <div className='aspect-[4/3] w-full flex-shrink-0 overflow-hidden bg-primary-150'>
                        <Image
                            src={srcRute}
                            alt={`Foto de ${name}`}
                            placeholder='blur'
                            className='h-full w-full object-cover'
                            style={{ objectPosition: '50% 15%' }}
                        />
                    </div>
                    <div className='flex flex-1 flex-col justify-between gap-2 p-5 text-center'>
                        <div>
                            <div className='text-[1.08rem] font-[600] leading-tight text-primary-700'>{name}</div>
                            <div className='mt-1 text-[0.84rem] font-[600] text-primary-600'>{specialty}</div>
                            {specialist && specialist !== '-'
                                ? <div className='mt-2 text-[0.88rem] text-primary-500'>{specialist}</div>
                                : null}
                        </div>
                        <button
                            type='button'
                            onClick={() => setIsFlipped(true)}
                            className='mx-auto inline-flex items-center gap-[0.4rem] rounded-full border border-primary-300 bg-primary-150 px-[1.05rem] py-2 text-[0.8rem] font-[600] text-primary-600 transition-colors duration-200 hover:bg-primary-600 hover:text-white'
                        >
                            <FlipIcon />
                            Ver experiencia
                        </button>
                    </div>
                </div>

                {/* Cara trasera */}
                <div
                    className='absolute inset-0 flex flex-col items-center overflow-y-auto rounded-3xl bg-gradient-to-br from-primary-600 to-primary-700 p-6 text-center text-primary-100/90 [backface-visibility:hidden]'
                    style={{ transform: 'rotateY(180deg)' }}
                >
                    <div className='mb-4 font-[600] text-primary-100'>{name}</div>
                    <div className='w-full text-left text-[0.8rem] leading-relaxed text-primary-100/85'>
                        {hasMeta
                            ? (
                                <>
                                    {university ? <p><strong className='text-primary-100'>Formación:</strong> {university}</p> : null}
                                    {experience && experience.some((e) => e)
                                        ? (
                                            <p className='mt-3'>
                                                <strong className='text-primary-100'>Experiencia:</strong> {experience.filter(Boolean).join('; ')}.
                                            </p>
                                        )
                                        : null}
                                </>
                            )
                            : <p>Sin información adicional registrada.</p>}
                    </div>
                    <button
                        type='button'
                        onClick={() => setIsFlipped(false)}
                        className='mt-auto inline-flex items-center gap-[0.4rem] rounded-full border border-primary-100/28 bg-primary-100/14 px-[1.05rem] py-2 text-[0.8rem] font-[600] text-primary-100 transition-colors duration-200 hover:bg-primary-100 hover:text-primary-600'
                    >
                        <FlipIcon />
                        Volver
                    </button>
                </div>
            </div>
        </div>
    )
}
