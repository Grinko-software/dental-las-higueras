/* eslint-disable no-unused-vars */
import { Card, CardFooter } from '@nextui-org/react'
import Button from '@/ui/button'
import Image from 'next/image'
import ShuffleText from '@/ui/text'
import image2 from '@/assets/images/image2.jpeg'
import useGlobalStore from '@/store/globalStore'
import YouTube from 'react-youtube'
import { useState, useEffect } from 'react'

const names = [
    'Empatia', 'Inovacion', 'Calidad'
]
export default function About () {
    const { section, setSection } = useGlobalStore(({ section, setSection }) => ({ section, setSection }))
    const [currentName, setCurrentName] = useState(names[0])

    function setRandomName () {
        const index = Math.floor(Math.random() * names.length)
        const newName = names[index]
        if (newName === currentName) { setRandomName() } else { setCurrentName(newName) }
    }

    useEffect(() => {
        setTimeout(() => {
            setRandomName()
        }, 4000)
    }, [currentName])
    return (
        <section id='About' className='mt-[2rem] h-full lg:mt-[6rem] flex flex-col items items-center'>
            <div className="h-auto mx-20 flex flex-row items items-center">
                <div className=" fade-in-up h-auto pr-0  gap-12 flex flex-row lg:items-stretch lg:pr-10">
                    <div className="w-full grid gap-[1rem]  text-center lg:text-left lg:justify-left">
                        <div className='fade-in flex flex-row'>
                            <h1 className="text-bold fade-in text-xl items-start lg:text-6xl font-[600]" >
                                Atendiendo a nuestros pacientes con
                                <text className='font-bold  text-xl lg:text-7xl fade-in text-primary-600'>
                                    {' ' + currentName.toUpperCase()}
                                </text>
                            </h1>
                        </div>
                        <text className="w-full text-bold text-2xl text-center lg:text-left lg:justify-lef  font-[350]">
                            Somos una clínica dental comprometida con la salud bucal y la satisfacción de nuestros pacientes. Nuestro equipo altamente calificado de dentistas y especialistas está dedicado a brindar atención dental de alta calidad en un ambiente cálido y acogedor. En nuestra clínica, combinamos la última tecnología con un enfoque personalizado para garantizar que cada paciente reciba el mejor cuidado posible.
                        </text>
                    </div>
                    <div className='h-auto flex flex-col items-center lg:items-stretch lg:grid lg:grid-col-2 '>
                        <div className="py-6 px-12 sm:py-12 sm:px-0 fade-in-rigth">
                            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                                <div className="flex flex-col items-center justify-center py-2">
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-primary-600 shadow-lg hover:shadow-2xl transform rotate-6 rounded-3xl"></div>
                                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-5">
                                        <Image
                                            src={image2}
                                            width={'100%'}
                                            height={'100%'}
                                            alt="Logo Dental Las Higueras"
                                            className='  rounded-3xl'

                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <YouTube videoId="dQw4w9WgXcQ"/>

        </section>

    )
}
