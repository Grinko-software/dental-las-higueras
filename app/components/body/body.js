'use client'
import Footer from '../footer/footer'
import About from './sections/about'
import Contact from './sections/contact'
import Home from './sections/home'
import Shedule from './sections/shedule'
/* import Profesionals from './sections/professionals' */
import Waves from './sections/waves'
export default function Body () {
    return (
        <main className='flex h-full flex-col !scroll-smooth'>
            <Home/>
            <Waves color='#faf8f4' bg='to-primary-150'/>
            <About/>
            {/*    <Profesionals/> */}
            <Contact/>
            <Shedule/>
            <Footer/>
        </main>
    )
}
