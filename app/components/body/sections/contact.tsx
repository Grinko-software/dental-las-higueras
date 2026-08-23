'use client'
import InfoCard from '@/ui/info-card'
import EmblaCarousel from '../../../../ui/carousel/EmblaCarousel'
import branches from '@/app/data/branches'
import useReveal from '@/app/hooks/useReveal'
import useTilt from '@/app/hooks/useTilt'

const OPTIONS = {}

const ClockIcon = () => (
    <svg viewBox='0 0 24 24' fill='none' className='h-[18px] w-[18px]'>
        <circle cx='12' cy='12' r='9' stroke='currentColor' strokeWidth='1.5' />
        <path d='M12 7v5l3.5 2' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
    </svg>
)

const LocationIcon = () => (
    <svg viewBox='0 0 24 24' fill='none' className='h-[18px] w-[18px]'>
        <path d='M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21Z' stroke='currentColor' strokeWidth='1.5' strokeLinejoin='round' />
        <circle cx='12' cy='9.5' r='2.4' stroke='currentColor' strokeWidth='1.5' />
    </svg>
)

const PhoneIcon = () => (
    <svg viewBox='0 0 24 24' fill='none' className='h-[18px] w-[18px]'>
        <path d='M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1.1L6.6 10.8Z' stroke='currentColor' strokeWidth='1.5' strokeLinejoin='round' />
    </svg>
)

export default function Contact () {
    useReveal('#Contacto')
    useTilt('#Contacto')
    const mainBranch = branches[0]
    const phones = [mainBranch.phone, ...(mainBranch.additionalPhones ?? [])]

    return (
        <section id='Contacto' className='bg-white py-16 lg:py-24'>
            <div className='mx-auto max-w-screen-xl px-5 lg:px-10'>
                <div className='reveal mb-10'>
                    <span className='text-sm font-bold uppercase tracking-wider text-primary-600'>Contacto</span>
                    <h2 className='mt-2 text-3xl font-[600] text-primary-700 lg:text-5xl'>
                        Hablemos de tu sonrisa.
                    </h2>
                </div>

                <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12'>
                    <div className='reveal-left rounded-3xl border border-primary-300/60 bg-primary-150/60 p-6 shadow-sm lg:p-8'>
                        <InfoCard icon={<PhoneIcon />} label='Teléfono'>
                            {phones.join(' / ')}
                        </InfoCard>
                        <InfoCard icon={<ClockIcon />} label='Horario'>
                            Lunes a Viernes, 09:00 a 19:00 hrs.
                        </InfoCard>
                        <InfoCard icon={<LocationIcon />} label='Dirección'>
                            {mainBranch.adress}
                        </InfoCard>
                    </div>

                    <div id='Ubicacion' className='reveal-right tilt overflow-hidden rounded-3xl border border-primary-300/60 shadow-2xl' data-tilt-max='3'>
                        <EmblaCarousel slides={mainBranch.images} options={OPTIONS} />
                    </div>
                </div>
            </div>
        </section>
    )
}
