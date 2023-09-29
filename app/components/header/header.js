export default function Header () {
    return (
        <header className="sticky top-0 h-auto bg-white shadow text-black p-4">
            <section className="flex">
                <section className="flex flex-1">LOGO</section>
                <section className="flex flex-wrap space-x-3 ">
                    <div>HOME</div>
                    <div>NOSOTROS</div>
                    <div>PROFESIONALES</div>
                    <div>CONTACTO</div>
                    <div>AGENDAR</div>
                </section>
            </section>
        </header>
    )
}
