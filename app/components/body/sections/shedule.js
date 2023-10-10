export default function Shedule () {
    return (
        <section id='Agendar' className='flex flex-1 flex-col items items-center'>
            <div className="h-full mx-5 flex flex-col items items-center">
                <div className='fade-in flex flex-row py-5'>
                    <h5 className="text-bold fade-in text-3xl items-start lg:text-6xl font-[600] text-primary-700" >
                        Agenda con nosotros
                    </h5>
                </div>
            </div>
            <section className="fade-in w-full flex-1">
                <iframe src='https://agendamiento.reservo.cl/makereserva/agenda/U0RAIjE0L0K4EK1y4B66qWj5R462EL' className="w-full h-full min-h-[35rem]"></iframe>
            </section>
        </section>

    )
}
