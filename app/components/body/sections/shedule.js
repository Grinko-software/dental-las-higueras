export default function Shedule () {
    return (
        <section id='Agendar' className='flex flex-1 flex-col items items-center'>
            <div className="h-full mx-20 flex flex-col items items-center border ">
                <div className='fade-in flex flex-row'>
                    <h5 className="text-bold fade-in text-3xl items-start lg:text-7xl font-[600]" >
                        Agenda con nosotros
                    </h5>
                </div>
            </div>
            <section className="fade-in w-full flex-1">
                <iframe src='https://agendamiento.reservo.cl/makereserva/agenda/Z0oY80v0S0BIDB8J4q66S6X5D542IS' className="w-full h-full min-h-[35rem]"></iframe>
            </section>
        </section>

    )
}
