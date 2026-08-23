'use client'
import Image from 'next/image'
import clinicaMisionVision from '@/assets/images/clinica-mision-vision.jpg'
import especialidades from '@/app/data/specialties'
import SpecialtyCard from '@/ui/specialty-card'
import useReveal from '@/app/hooks/useReveal'
import useTilt from '@/app/hooks/useTilt'
import useParallax from '@/app/hooks/useParallax'

export default function About () {
    useReveal('#Nosotros')
    useTilt('#Nosotros')
    useParallax('#Nosotros')

    return (
        <section id='Nosotros' className='bg-white py-16 lg:py-24'>
            <div className='mx-auto max-w-screen-xl px-5 lg:px-10'>
                <div className='mb-4'>
                    <span className='text-sm font-bold uppercase tracking-wider text-primary-600'>Nosotros</span>
                    <h2 className='mt-2 text-3xl font-[600] text-primary-700 lg:text-5xl'>
                        Un equipo que cuenta con los mejores profesionales.
                    </h2>
                </div>

                <div className='grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14'>
                    <div className='reveal-left space-y-5 text-primary-700'>
                        <p className='text-base lg:text-lg'>
                            Un equipo que cuenta con los mejores profesionales, preocupados por brindar la mejor atención, para atender las necesidades de nuestros pacientes, <strong>cuidando de ti y de tu sonrisa</strong>. Nace de la necesidad de reunir en un sólo lugar las complejas especialidades que comprende la odontología, caracterizándonos por la calidad en nuestros tratamientos y en brindar una buena atención.
                        </p>
                        <div>
                            <h4 className='font-bold text-primary-600'>Nuestra misión</h4>
                            <p className='text-base lg:text-lg'>
                                Buscamos conocer perfectamente cada caso y las complicaciones de cada uno, y así poder ofrecer una atención personalizada e individualizada, alcanzando la excelencia en nuestra labor.
                            </p>
                        </div>
                        <div>
                            <h4 className='font-bold text-primary-600'>Nuestra visión</h4>
                            <p className='text-base lg:text-lg'>
                                Queremos que nos conozcan por nuestro profesionalismo, por el buen trato, destacándonos por ser los mejores profesionales a vuestro servicio en la Región.
                            </p>
                        </div>
                    </div>

                    <div className='reveal-right tilt mx-auto w-full max-w-[560px]' data-tilt-max='3'>
                        <div className='relative aspect-[5/4] overflow-hidden rounded-[26px] border border-primary-300/60 shadow-2xl'>
                            <div className='parallax-wrap h-full w-full scale-[1.15]' data-parallax='0.1'>
                                <Image
                                    src={clinicaMisionVision}
                                    alt='Profesionales de Dental Las Higueras enseñando técnica de cepillado a un paciente'
                                    fill
                                    sizes='(max-width: 1024px) 90vw, 560px'
                                    className='object-cover transition-transform duration-700 ease-out hover:scale-[1.08]'
                                    style={{ objectPosition: '50% 30%' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='reveal mt-16 lg:mt-24'>
                    <div className='mb-8 text-center'>
                        <span className='text-sm font-bold uppercase tracking-wider text-primary-600'>Especialidades</span>
                        <h3 className='mx-auto mt-2 max-w-2xl text-2xl font-[600] text-primary-700 lg:text-3xl'>
                            Todo lo que tu sonrisa necesita, en un mismo lugar.
                        </h3>
                    </div>
                    <div className='grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-5' data-stagger-group>
                        {especialidades?.map((item) => (
                            <div key={item.name} className='reveal'>
                                <SpecialtyCard title={item.name} imageSrc={item.image} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
