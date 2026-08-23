'use client'
import React, { useEffect, useState } from 'react'
import localFont from 'next/font/local'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Divider } from '@nextui-org/react'
import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import useGlobalStore from '@/store/globalStore'
import useRipple from '@/app/hooks/useRipple'
const myFont = localFont({ src: '../../../fonts/nunitoSans.ttf' })

export default function Header () {
    const { setSection } = useGlobalStore(({ setSection }) => ({ setSection }))
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const ripple = useRipple()
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
            className={`sticky z-20 top-0 h-auto p-2 backdrop-blur-xl backdrop-saturate-150 transition-[background-color,box-shadow] duration-300 ${
                isScrolled ? 'bg-primary-100/95 shadow-xl' : 'bg-primary-100/75 shadow-none'
            }`}>
            <Navbar
                className='bg-transparent py-[0.6rem]'
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
                                className='rounded-full px-4 py-2 text-base font-[600] text-primary-600 transition-colors duration-200 hover:bg-primary-200/60'
                            >
                                {item}
                            </button>
                        </NavbarItem>
                    ))}
                    <NavbarItem>
                        <button
                            type='button'
                            onClick={(e) => { ripple(e); goTo('Agendar') }}
                            className='btn-ripple-host inline-flex h-11 items-center justify-center rounded-full bg-primary-600 px-6 text-base font-[600] text-white shadow-md shadow-primary-600/30 transition-transform duration-300 ease-out hover:-translate-y-0.5'
                        >
                            Agendar hora
                        </button>
                    </NavbarItem>
                </NavbarContent>
                <NavbarMenu className='mt-[2rem] bg-primary-100'>
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
