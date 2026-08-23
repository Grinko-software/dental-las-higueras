'use client'
import React, { useEffect, useState } from 'react'
import localFont from 'next/font/local'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Divider } from '@nextui-org/react'
import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import useGlobalStore from '@/store/globalStore'
import useRipple from '@/app/hooks/useRipple'
import useHeaderContrast from '@/app/hooks/useHeaderContrast'
const myFont = localFont({ src: '../../../fonts/nunitoSans.ttf' })
const HEADER_HEIGHT_PX = 72 // debe coincidir con h-[4.5rem] (4.5 * 16)

export default function Header () {
    const { section, setSection } = useGlobalStore(({ section, setSection }) => ({ section, setSection }))
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const ripple = useRipple()
    // 'dark' cuando un bloque marcado con data-header-contrast="dark" (cards
    // moradas, fotos oscuras) queda justo debajo del header — ahí el texto
    // pasa a blanco para no perder contraste, sin importar cuán transparente
    // sea el fondo del header en ese momento.
    const contrast = useHeaderContrast(HEADER_HEIGHT_PX)
    const isDark = contrast === 'dark'
    const menuItems = [
        'Inicio',
        'Nosotros',
        'Profesionales',
        'Contacto',
        'Agendar'
    ]

    const goTo = (item) => {
        setSection(null)
        setTimeout(() => setSection(item), 100)
    }

    // Ejecuta el scroll real hacia la sección cada vez que cambia `section`
    // en el store global. Sin este efecto, goTo() solo actualiza el estado
    // pero nunca mueve la página — bug real encontrado al probar los clicks
    // del nav con Playwright, no solo revisar el estilo visual.
    useEffect(() => {
        if (section) {
            document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }, [section])

    useEffect(() => {
        // Header siempre fijo (sticky) — este efecto solo intensifica el
        // glass (más opacidad/sombra) una vez que el usuario empieza a
        // scrollear, para que la transición se sienta con intención.
        const onScroll = () => setIsScrolled(window.scrollY > 12)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header
            style={myFont.style}
            className={`sticky z-20 top-0 h-[4.5rem] shrink-0 backdrop-blur-lg backdrop-saturate-150 transition-[background-color,box-shadow,border-color] duration-300 ${
                isDark
                    ? 'bg-primary-700/55 border-b border-white/15 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.35)]'
                    : isScrolled
                        ? 'bg-primary-100/70 border-b border-primary-300/50 shadow-[0_4px_20px_-8px_rgba(103,40,129,0.2)]'
                        : 'bg-primary-100/55 border-b border-primary-200/30 shadow-none'
            }`}>
            <Navbar
                className='h-full bg-transparent'
                maxWidth={'xl'}
                onMenuOpenChange={setIsMenuOpen}
                isMenuOpen={isMenuOpen}
            >
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                        className='lg:hidden'
                    />
                    <NavbarBrand>
                        <button type='button' onClick={() => goTo('Inicio')} className='flex items-center'>
                            <Image
                                src={logo}
                                width={200}
                                height={200}
                                alt='Logo Dental Las Higueras'
                                className='h-[3.6rem] w-auto py-1'
                            />
                        </button>
                    </NavbarBrand>
                </NavbarContent>
                <NavbarContent className='hidden gap-1 lg:flex' justify='end'>
                    {menuItems.slice(0, -1).map((item) => (
                        <NavbarItem key={item}>
                            <button
                                type='button'
                                onClick={() => goTo(item)}
                                className={`group relative px-4 py-2 text-base font-[600] transition-colors duration-200 ${
                                    isDark ? 'text-white hover:text-white/80' : 'text-primary-600 hover:text-primary-700'
                                }`}
                            >
                                {item}
                                <span className={`pointer-events-none absolute inset-x-4 bottom-1 h-[2px] origin-center scale-x-0 rounded-full transition-transform duration-300 ease-out group-hover:scale-x-100 ${isDark ? 'bg-white' : 'bg-primary-600'}`} />
                            </button>
                        </NavbarItem>
                    ))}
                    <NavbarItem>
                        <button
                            type='button'
                            onClick={(e) => { ripple(e); goTo('Agendar') }}
                            className='btn-ripple-host inline-flex h-11 items-center justify-center rounded-full bg-primary-600 px-6 text-base font-[600] text-white shadow-md shadow-primary-600/30 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-lg hover:shadow-primary-600/40'
                        >
                            Agendar hora
                        </button>
                    </NavbarItem>
                </NavbarContent>
                <NavbarMenu className='gap-0 bg-primary-100 pt-8'>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={item} className='text-primary-700'>
                            <Link
                                className='w-full cursor-pointer'
                                size='lg'
                                onClick={() => { goTo(item); setIsMenuOpen(false) }}
                            >
                                <div className='w-full p-2 pb-3 text-2xl text-primary-600 hover:text-primary-500'>
                                    {item}
                                </div>
                            </Link>
                            {index !== menuItems.length - 1 ? <Divider /> : null}
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </header>
    )
}
