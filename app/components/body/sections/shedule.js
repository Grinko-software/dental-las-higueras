'use client'
import { useEffect } from 'react'
import { callbackFadeUp } from '../services'
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
            <section className="scroll-up w-full flex-1">
                <iframe src='https://agendamiento.reservo.cl/makereserva/agenda/w0s1lns0L0VWaB0T4j46uux5w0b293' className="w-full h-full min-h-[35rem]"></iframe>
            </section>
        </section>

    )
}
