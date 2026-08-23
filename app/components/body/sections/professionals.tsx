'use client'
import { useState, useEffect, type ReactElement } from 'react'
import ProfesionalsCard from '../../card'
import EmblaCarousel from '../../../../ui/carousel/EmblaCarousel'
import { v4 as uuidv4 } from 'uuid'
import { useViewport } from 'react-viewport-hooks'

import ProfesionalsArray from '@/app/data/professionals'
import useReveal from '@/app/hooks/useReveal'
import useTilt from '@/app/hooks/useTilt'

export default function Profesionals () {
    const { vw } = useViewport()
    const [useView, setUseView] = useState<number | null>(null)

    useEffect(() => {
        setUseView(vw)
    }, [vw])

    useReveal('#Profesionales')
    useTilt('#Profesionales')

    const slides = ProfesionalsArray.map((item, index) => ({
        key: uuidv4(),
        content: <ProfesionalsCard Profesional={item} isLead={index === 0} />
    }))

    return (
        <section id='Profesionales' className='bg-primary-150 py-16 lg:py-24'>
            <div className='mx-auto max-w-screen-xl px-5 lg:px-10'>
                <div className='reveal mb-10'>
                    <span className='text-sm font-bold uppercase tracking-wider text-primary-600'>Profesionales</span>
                    <h2 className='mt-2 text-3xl font-[600] text-primary-700 lg:text-5xl'>
                        Diez especialistas, un mismo compromiso.
                    </h2>
                    <p className='mt-3 max-w-2xl text-base text-primary-500 lg:text-lg'>
                        Cada tratamiento pasa por manos con formación específica —de la ortodoncia a la rehabilitación oral— para que recibas siempre la mirada de un especialista.
                    </p>
                </div>

                {(useView ?? 0) > 640
                    ? (
                        <EmblaCarousel
                            className='embla--multi'
                            slides={slides}
                            options={{ loop: true, align: 'start' }}
                            autoplayInterval={3000}
                            renderSlide={(slide: { content: ReactElement }) => (
                                <div className='reveal flex justify-center px-3 py-5'>
                                    {slide.content}
                                </div>
                            )}
                        />
                    )
                    : (
                        <div className='grid grid-cols-1 gap-6' data-stagger-group>
                            {ProfesionalsArray.map((item, index) => (
                                <div key={index} className='reveal'>
                                    <ProfesionalsCard Profesional={item} isLead={index === 0} />
                                </div>
                            ))}
                        </div>
                    )}
            </div>
        </section>
    )
}
