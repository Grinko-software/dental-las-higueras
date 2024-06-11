'use client'
import { useEffect } from 'react'
import { callbackFadeUp } from '../services'
import { Tab, Tabs } from '@nextui-org/react'

const SCHEDULE_ITEMS = [
    {
        key: '1',
        label: 'Las Higueras',
        url: 'https://agendamiento.reservo.cl/makereserva/agenda/w0s1lns0L0VWaB0T4j46uux5w0b293'
    },
    {
        key: '2',
        label: 'Centro La Serena',
        url: 'https://agendamiento.reservo.cl/makereserva/agenda/h0Mp9FV0s0gi199k5a77Efi6i5i3QS'
    }
]

export default function Shedule () {
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFadeUp)
        const targets = document.querySelectorAll('.scroll-up')
        targets.forEach(function (target) {
            target.classList.add('opacity-0')
            observer.observe(target)
        })
    }, [])
    return (
        <section id='Agendar' className='flex flex-1 flex-col items items-center'>
            <div className="scroll-up h-full mx-5 flex flex-col items items-center">
                <div className='fade-in flex flex-row py-5'>
                    <h5 className="text-bold fade-in hover:shadow text-3xl items-start lg:text-6xl font-[600] text-primary-700" >
                        Agenda con nosotros
                    </h5>
                </div>
            </div>

            <Tabs
                aria-label="Dynamic tabs"
                items={SCHEDULE_ITEMS}
                classNames={{
                    cursor: 'w-full bg-[#672881]',
                    tabContent: 'group-data-[selected=true]:text-primary-50 font-normal'
                }}
            >
                {(item) => (
                    <Tab key={item.key} title={item.label} className='w-full flex-1'>
                        <section className="scroll-up w-full flex-1">
                            <iframe src={item.url} className="w-full h-full min-h-[35rem]"></iframe>
                        </section>
                    </Tab>
                )}
            </Tabs>

        </section>

    )
}
