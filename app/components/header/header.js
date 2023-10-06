'use client'
import React, { useEffect, useState } from 'react'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react'
import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import Button from '@/ui/button'
import { useViewport } from 'react-viewport-hooks'
import useGlobalStore from '@/store/globalStore'
export default function Header () {
    const { section, setSection } = useGlobalStore(({ section, setSection }) => ({ section, setSection }))
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [useView, setUseView] = useState(null)
    const { vw/* , vh */ } = useViewport()
    const menuItems = [
        'Inicio',
        'Nosotros',
        'Profesionales',
        'Contacto',
        'Agendar'
    ]
    useEffect(() => {
        setUseView(vw)
    }, [vw])
    return (
        <header className="sticky top-0 h-auto bg-primary-100 text-black p-4 z-10 fade-in">
            <Navbar className='bg-primary-100 py-[2rem]' maxWidth={'xl'} onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        className="sm:hidden"
                    />
                    <NavbarBrand className={`${parseInt(useView) < 640 ? 'flex flex-col items-center' : 'flex'}`}>
                        <Image
                            src={logo}
                            width={200}
                            height={200}
                            alt="Logo Dental Las Higueras"
                            className='pb-5'
                        />
                    </NavbarBrand>
                </NavbarContent>
                <NavbarContent className="hidden sm:flex gap-8" justify="end">
                    {menuItems.map((item, index) => (
                        <NavbarItem key={index}>
                            <Button title={item} className ={`${section === item
                                ? 'bg-primary-600 rounded-[100px] hover:bg-primary-500 text-primary-100  w-full px-5 py-5 text-center  text-lg font-[600]  transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-primary-50    focus:ring-primary-300 dark:bg-primary-800 dark:text-primary-50  dark:placeholder-primary-50  dark:hover:border-primary-50  dark:hover:bg-primary-700  dark:hover:text-primary-50 dark:hover:ring-primary-300 dark:hover:focus:fill-white'
                                : 'bg-primary-transparent rounded-[100px] hover:bg-primary-500 text-primary-600  w-full px-5 py-5 text-center  text-lg font-[600]  transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-primary-50    focus:ring-primary-300 dark:bg-primary-800 dark:text-primary-50  dark:placeholder-primary-50  dark:hover:border-primary-50  dark:hover:bg-primary-700  dark:hover:text-primary-50 dark:hover:ring-primary-300 dark:hover:focus:fill-white'}
                                h-12
                                `}
                            onClick={() => { setSection(item) }}
                            >
                            </Button>
                        </NavbarItem>
                    ))}

                </NavbarContent>
                <NavbarMenu className='bg-primary-100'>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`} className='bg-primary-100 text-primary-700'>
                            <Link
                                color={
                                    index === 2 ? 'primary' : index === menuItems.length - 1 ? '' : ''
                                }
                                className="w-full"
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </header>
    )
}

/*

<NavbarItem>
                        <Button title={'INICIO'}
                        className ="bg-primary-600 rounded-[100px] hover:bg-primary-500 text-primary-100  w-full px-5 py-5 text-center  text-lg font-[600]  transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-primary-50    focus:ring-primary-300 dark:bg-primary-800 dark:text-primary-50  dark:placeholder-primary-50  dark:hover:border-primary-50  dark:hover:bg-primary-700  dark:hover:text-primary-50 dark:hover:ring-primary-300 dark:hover:focus:fill-white"
                        >
                        </Button>
                    </NavbarItem>
                    <NavbarItem >
                        <Link color="foreground" href="#">
            NOSOTROS
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
            PROFESIONALES
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
            CONTACTO
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
            AGENDAR
                        </Link>
                    </NavbarItem>
*/

/*
 <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link href="#">Login</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent>
*/
/*
 <section className="flex px-[200px]">
                <section className="flex flex-1"> <Image
                    src={logo}
                    width={200}
                    height={200}
                    alt="Picture of the author"
                /></section>
                <section className="flex flex-wrap space-x-3 ">
                    <div>HOME</div>
                    <div>NOSOTROS</div>
                    <div>PROFESIONALES</div>
                    <div>CONTACTO</div>
                    <div>AGENDAR</div>
                </section>
            </section>
*/
