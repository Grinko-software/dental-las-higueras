'use client'
import React, { useState } from 'react'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react'
import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import Button from '@/ui/button'
export default function Header () {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuItems = [
        'Inicio',
        'Nosotros',
        'Profesionales',
        'Contacto',
        'Agendar'
    ]
    return (
        <header className="sticky top-0 h-auto bg-primary-100 text-black p-4">
            <Navbar className='bg-primary-100 pt-10' maxWidth={'xl'} onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        className="sm:hidden"
                    />
                    <NavbarBrand className=''>
                        <Image
                            src={logo}
                            width={200}
                            height={200}
                            alt="Picture of the author"
                        />
                    </NavbarBrand>
                </NavbarContent>
                <NavbarContent className="hidden sm:flex gap-8" justify="end">
                    <NavbarItem>
                        <Button title={'INICIO'} className ="bg-primary-600 rounded-[100px] "
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
