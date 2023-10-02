/* eslint-disable no-unused-vars */
import { Card, CardHeader, CardBody, Divider } from '@nextui-org/react'
import Image from 'next/image'
import Img2 from '@/assets/images/image2.jpeg'
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
            <div className="w-full h-auto  gap-10 flex flex-col items items-center">
                <div className="fade-in-up h-auto m-4 flex flex-col lg:flex-row lg:items-center lg:pr-10">
                    <div className="grid gap-10 lg:w-8/12 text-center lg:text-left lg:justify-center">
                        <div className='w-full lg:w-8/12 fade-in flex flex-row items-center'>
                            <h1 className="text-bold fade-in text-3xl  lg:text-6xl font-[600]" >
                                Atendiendo a nuestros pacientes con
                                <span className='font-extrabold fade-in text-3xl lg:text-5xl text-primary-600'>
                                    {' ' + currentName.toUpperCase()}
                                </span>
                            </h1>
                        </div>
                        <div className='flex flex-col lg:gap-4 lg:flex-row'>
                            <text className="lg:w-8/12 text-foreground/80 text-bold lg:text-xl lg:text-left lg:justify-lef font-[350]">
                                Somos una clínica dental comprometida con la salud bucal y la satisfacción de nuestros pacientes. Nuestro equipo altamente calificado de dentistas y especialistas está dedicado a brindar atención dental de alta calidad en un ambiente cálido y acogedor. En nuestra clínica, combinamos la última tecnología con un enfoque personalizado para garantizar que cada paciente reciba el mejor cuidado posible.
                            </text>
                        </div>
                        <Divider className='w-8/12'/>
                        <div className='flex'>
                            <Card className=" w-full lg:w-8/12 inset-0 bg-gradient-to-r from-primary-500 to-primary-600">
                                <CardHeader className="flex gap-3 lg:items-start items-center justify-center lg:justify-normal">
                                    <div className="flex flex-col">
                                        <p className="text-xl lg:text-5xl font-extrabold ">Especialidades</p>
                                    </div>
                                </CardHeader>
                                <Divider/>
                                <CardBody>
                                    <div className="w-full list-disc text-bold text-m lg:text-2xl lg:text-left justify-center text-center space-y-2 font-[350] pressed">
                                        <li className='text-foreground/80 '>Odontolgía General</li>
                                        <li className='text-foreground/80 '>Ortodoncia</li>
                                        <li className='text-foreground/80 '>Periodoncia</li>
                                        <li className='text-foreground/80 '>Endodoncia</li>
                                        <li className='text-foreground/80 '>Cirugías Implantes</li>
                                        <li className='text-foreground/80 '>Estetica Integral</li>
                                    </div>
                                </CardBody>
                                <Divider/>
                            </Card>
                        </div>
                    </div>
                    <div className='h-full flex flex-col items-center lg:items-stretch lg:grid lg:grid-col-2 '>
                        <div className="py-6 px-12 sm:py-12 sm:px-0 fade-in-rigth">
                            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                                <div className="flex flex-col items-center justify-center py-2">
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-primary-600 shadow-lg hover:shadow-2xl transform rotate-6 rounded-3xl"></div>
                                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-5">
                                        <Image
                                            src={Img2}
                                            width={'120%'}
                                            height={'120%'}
                                            alt="Logo Dental Las Higueras"
                                            className='rounded-3xl'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <YouTube videoId="dQw4w9WgXcQ"/>
            </div>
        </section>

    )
}
