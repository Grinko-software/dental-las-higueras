'use client'
import About from './sections/about'
import Home from './sections/home'
export default function Body () {
    return (
        <main className='flex h-full flex-col mx-10 !scroll-smooth'>
            <Home/>
            <About/>
            {/* Agregar secciones acá */}
        </main>
    )
}
