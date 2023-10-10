'use client'
import React, { useEffect, useState } from 'react'
import localFont from 'next/font/local'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Divider } from '@nextui-org/react'
import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import Button from '@/ui/button'
import { useViewport } from 'react-viewport-hooks'
import useGlobalStore from '@/store/globalStore'
const myFont = localFont({ src: '../../../fonts/nunitoSans.ttf' })
export default function Header () {
    const { section, setSection } = useGlobalStore(({ section, setSection }) => ({ section, setSection }))
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    // eslint-disable-next-line no-unused-vars
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
    useEffect(() => {
        if (section) {
            const focusKey = document.getElementById(section)
            focusKey?.scrollIntoView({ behavior: 'smooth', block: section === 'Nosotros' || section === 'Profesionales' ? 'center' : 'center', inline: 'nearest' })
        }
    }, [section])
    return (
        <header
            style={myFont.style}
            className="sticky z-20 top-0 h-auto bg-primary-100 text-black p-2 fade-in shadow-2xl">
            <Navbar
                className='bg-primary-100 py-[1rem]'
                maxWidth={'xl'}
                onMenuOpenChange={setIsMenuOpen}
                isMenuOpen={isMenuOpen}
            >
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        className="lg:hidden"
                        // onClick={() => { setSection(null) }}
                    />
                    <NavbarBrand
                        // className={`${parseInt(useView) < 640 ? 'flex flex-col items-center' : 'flex'}`}
                        className='flex flex-col items-center lg:items-start'
                    >
                        <Image
                            src={logo}
                            width={200}
                            height={200}
                            alt="Logo Dental Las Higueras"
                            className='py-2 m-autoo w-auto min-w-[10rem] h-[7rem]'
                        />
                    </NavbarBrand>
                </NavbarContent>
                <NavbarContent className="hidden lg:flex " justify="end">
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
                <NavbarMenu className='to-primary-150 mt-[2rem]'>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem

                            key={`${item}-${index}`}
                            // to-primary-150 data-open="false"
                            className='to-primary-150  text-primary-700'>
                            <Link
                                color={
                                    index === 2 ? 'primary' : index === menuItems.length - 1 ? '' : ''
                                }
                                className="w-full cursor-pointer"
                                size="lg"
                                onClick={() => {
                                    setSection(item)
                                    setIsMenuOpen(false)
                                }}

                            >
                                <div className='text-2xl text-primary-600 hover:text-primary-500 w-full p-2 pb-3'>
                                    {item}
                                </div>
                            </Link>
                            {index !== menuItems.length - 1
                                ? <Divider className=''/>
                                : null
                            }
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </header>
    )
}
