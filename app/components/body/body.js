'use client'
import About from './sections/about'
import Contact from './sections/contact'
import Home from './sections/home'
import Shedule from './sections/shedule'
export default function Body () {
    return (
        <main className='flex flex-1 flex-col !scroll-smooth'>
            <Home/>
            <About/>
            <Shedule/>
            <Contact/>
            {/* Agregar secciones acá */}
        </main>

    )
}
