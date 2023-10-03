'use client'
import About from './sections/about'
import Home from './sections/home'
import Profesionals from './sections/professionals'
export default function Body () {
    return (
        <main className='flex h-full flex-col mx-10 !scroll-smooth'>
            <Home/>
            <About/>
            <Profesionals/>
            {/* Agregar secciones acá */}
        </main>
    )
}
