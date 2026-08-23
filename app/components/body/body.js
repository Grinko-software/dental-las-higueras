'use client'
import About from './sections/about'
import Contact from './sections/contact'
import Home from './sections/home'
import Shedule from './sections/shedule'
import Profesionals from './sections/professionals'
import { useEffect } from 'react'

export const initializeGoogleTagManager = () => {
    (function (w, d, s, l, i) {
        w[l] = w[l] || []; w[l].push({
            'gtm.start':
new Date().getTime(),
            event: 'gtm.js'
        }); const f = d.getElementsByTagName(s)[0]
        const j = d.createElement(s); const dl = l !== 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f)
    })(window, document, 'script', 'dataLayer', 'GTM-5FJWB7K9')
}

export default function Body () {
    useEffect(() => {
        initializeGoogleTagManager()
    }, [])
    return (
        <main className='flex h-full flex-col !scroll-smooth bg-primary-100'>
            <Home/>
            <About/>
            <Profesionals/>
            <Contact/>
            <Shedule/>
        </main>
    )
}
