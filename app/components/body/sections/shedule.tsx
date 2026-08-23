'use client'
import { Tab, Tabs } from '@nextui-org/react'
import branches from '@/app/data/branches'
import useReveal from '@/app/hooks/useReveal'
import useRipple from '@/app/hooks/useRipple'

const SCHEDULE_ITEMS = branches.map((branch) => ({
    key: branch.key,
    label: branch.label,
    url: branch.scheduleUrl
}))

export default function Shedule () {
    useReveal('#Agendar')
    const ripple = useRipple()
    return (
        <section id='Agendar' className='bg-white py-16 lg:py-24'>
            <div className='mx-auto max-w-screen-xl px-5 lg:px-10'>
                <div className='reveal-scale overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 to-primary-500 px-6 py-12 text-center shadow-2xl lg:px-16 lg:py-16'>
                    <span className='inline-block rounded-full bg-white/16 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white'>
                        Reserva online
                    </span>
                    <h2 className='mt-4 text-2xl font-[600] text-white lg:text-4xl'>
                        Agenda tu hora en un par de clics.
                    </h2>
                    <p className='mx-auto mt-3 max-w-xl text-base text-white/85 lg:text-lg'>
                        Elegí el motivo de consulta, el profesional y el horario que más te acomode. Te confirmamos por WhatsApp o llamada.
                    </p>
                    <a
                        href={`tel:${branches[0].phone.replace(/[^\d+]/g, '')}`}
                        onClick={ripple}
                        className='btn-ripple-host btn-ripple-dark mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-base font-[600] text-primary-600 shadow-lg transition-transform duration-300 ease-out hover:-translate-y-0.5'
                    >
                        Agendar tu hora
                    </a>
                </div>

                <div className='reveal mt-10'>
                    <Tabs
                        aria-label='Sucursales para agendar'
                        items={SCHEDULE_ITEMS}
                        classNames={{
                            cursor: 'w-full bg-primary-600',
                            tabContent: 'group-data-[selected=true]:text-white font-normal'
                        }}
                    >
                        {(item) => (
                            <Tab key={item.key} title={item.label} className='w-full flex-1'>
                                <section className='w-full flex-1 overflow-hidden rounded-2xl border border-primary-300/60 shadow-lg'>
                                    <iframe src={item.url} className='h-full min-h-[35rem] w-full' title={`Agendamiento — ${item.label}`} />
                                </section>
                            </Tab>
                        )}
                    </Tabs>
                </div>
            </div>
        </section>
    )
}
