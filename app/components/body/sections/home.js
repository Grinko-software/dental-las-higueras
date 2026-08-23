'use client'
import Image from 'next/image'
import team from '@/assets/images/team.jpg'
import useGlobalStore from '@/store/globalStore'
import useReveal from '@/app/hooks/useReveal'
import useTilt from '@/app/hooks/useTilt'
import useParallax from '@/app/hooks/useParallax'
import useRipple from '@/app/hooks/useRipple'

export default function Home () {
    const { setSection } = useGlobalStore(({ setSection }) => ({ setSection }))
    useReveal('#Inicio')
    useTilt('#Inicio')
    useParallax('#Inicio')
    const ripple = useRipple()

    return (
        <section id='Inicio' className='relative overflow-hidden bg-[linear-gradient(180deg,theme(colors.primary.150)_0%,theme(colors.primary.200/40%)_55%,#fff_100%)] pt-16 pb-28 lg:pt-24 lg:pb-36'>
            <div className='mx-auto max-w-screen-xl px-5 lg:px-10'>
                <div className='grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16'>
                    <div className='reveal-left order-2 lg:order-1'>
                        <div className='grid gap-y-4 text-center lg:text-left'>
                            <h1 className='text-3xl font-[600] text-primary-700 lg:text-6xl'>
                                Cuidando de ti<br />y de tu <em className='text-primary-600 font-[600] italic'>sonrisa</em>.
                            </h1>
                            <p className='max-w-xl text-lg font-[350] text-primary-700 lg:text-xl'>
                                Un equipo de especialistas —ortodoncia, periodoncia, rehabilitación oral y más— reunidos en un mismo consultorio en el corazón de La Serena, para acompañarte en cada etapa de tu sonrisa.
                            </p>
                        </div>
                        <div className='mt-8 flex flex-wrap justify-center gap-4 lg:justify-start'>
                            <button
                                type='button'
                                onClick={(e) => { ripple(e); setSection('Agendar') }}
                                className='btn-ripple-host inline-flex h-14 items-center justify-center rounded-full bg-primary-600 px-8 text-base font-[600] text-white shadow-lg shadow-primary-600/30 transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02]'
                            >
                                Agendar tu hora
                            </button>
                            <button
                                type='button'
                                onClick={(e) => { ripple(e); setSection('Profesionales') }}
                                className='btn-ripple-host btn-ripple-dark inline-flex h-14 items-center justify-center rounded-full border-[1.5px] border-primary-600 px-8 text-base font-[600] text-primary-600 transition-transform duration-300 ease-out hover:-translate-y-1'
                            >
                                Conocer al equipo
                            </button>
                        </div>
                    </div>

                    <div className='reveal-scale tilt order-1 mx-auto w-full max-w-[620px] lg:order-2' data-tilt-max='4'>
                        <div className='relative rotate-[-3deg] overflow-hidden rounded-[2rem] border-[6px] border-white shadow-2xl'>
                            <div className='parallax-wrap aspect-[3/2] w-full' style={{ '--parallax-scale': 1.15 }} data-parallax='0.08'>
                                <Image
                                    src={team}
                                    alt='Equipo de Dental Las Higueras en el consultorio de Centro La Serena'
                                    fill
                                    sizes='(max-width: 1024px) 90vw, 620px'
                                    className='object-cover'
                                    style={{ objectPosition: '50% 42%' }}
                                    priority
                                />
                            </div>
                        </div>

                        {/*
                            Antes era position:absolute -bottom-4, anclado al
                            contenedor .relative de la foto (línea 49, que tiene
                            rotate-[-3deg] + overflow-hidden). WebKit real
                            (Safari/Chrome iOS) directamente NO PINTABA este
                            elemento con esa combinación — bug de compositing
                            confirmado con el motor webkit real de Playwright
                            (device iPhone 13); no reproducible en Chromium ni
                            en el emulador de DevTools, por eso pasó desapercibido
                            hasta que el usuario lo vio en su celular real.
                            Se reemplaza el positioning absoluto por flujo normal
                            con margin-top negativo: mismo efecto visual de
                            "flotar sobre el borde de la foto", sin depender de
                            que el navegador combine bien absolute+transform+
                            overflow-hidden de un ancestro.
                        */}
                        <div className='relative z-10 mx-3 -mt-[4.5rem] flex justify-center lg:mx-0 lg:-mt-[3.75rem] lg:justify-start lg:pl-3'>
                            <div data-header-contrast='dark' className='reveal flex w-full max-w-[300px] items-center gap-3 rounded-[18px] border border-primary-100/20 bg-primary-700/90 p-4 shadow-2xl lg:max-w-none lg:gap-4 lg:rounded-[22px] lg:p-5'>
                                <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 shadow-md lg:h-[52px] lg:w-[52px]'>
                                    <svg viewBox='0 0 24 24' fill='none' className='h-5 w-5 lg:h-6 lg:w-6'>
                                        <path d='M5 12.5l4.5 4.5L19 7' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round' />
                                    </svg>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-[0.6rem] font-bold uppercase tracking-wider text-primary-100/75 lg:text-[0.66rem]'>Sin compromiso</span>
                                    <span className='text-sm font-[600] leading-tight text-primary-100 lg:text-base'>Primera evaluación<br />sin costo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
