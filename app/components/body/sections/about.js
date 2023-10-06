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
                <div className="fade-in-up h-auto m-4 lg:mx-28 flex flex-col lg:flex-row lg:items-center lg:pr-10">
                    <div className="grid gap-10 lg:w-10/12 text-center lg:text-left lg:justify-center">
                        <div className='w-full lg:w-10/12 fade-in flex flex-row items-center'>
                            <h1 className="text-bold fade-in text-3xl  lg:text-6xl font-[600]" >
                                Atendiendo a nuestros pacientes con
                                <span className='font-extrabold fade-in text-3xl lg:text-5xl text-primary-600'>
                                    {' ' + currentName.toUpperCase()}
                                </span>
                            </h1>
                        </div>
                        <div className='flex gap-4 lg:w-10/12 flex-col'>
                            <h1 className="font-bold fade-in text-xl  lg:text-2xl text-primary-600">
                            QUIENES SOMOS
                            </h1>
                            <text className='text-sm lg:text-xl'>
                                Un equipo que cuenta con los mejores profesionales, preocupados por brindar la mejor atención, para atender las necesidades de nuestros pacientes,
                                <span className='font-bold'> cuidando de ti y te tu sonrisa. </span>
                                Nace de la necesidad de reunir en un sólo lugar las complejas especialidades que comprende la odontología.
                                Caracterizándonos por la calidad en nuestros tratamientos y en brindar una buena atención.
                            </text>
                            <h1 className="font-bold fade-in text-xl  lg:text-2xl text-primary-600">
                                NUESTRA MISION
                            </h1>
                            <text className='text-sm lg:text-xl'>
                                Buscamos conocer perfectamente cada caso y las complicaciones de cada uno, y así poder ofrecer una atención personalizada e individualizada, alcanzando la excelencia en nuestra labor.
                            </text>

                            <h1 className="font-bold fade-in text-xl  lg:text-2xl text-primary-600">
                                VISION
                            </h1>
                            <text className='text-sm lg:text-xl'>
                                Queremos que nos conozcan por nuestro profesionalismo, por el buen trato, destacándonos por ser los mejores profesionales a vuestros servicios en la Región.
                            </text>
                        </div>
                        <Divider className='w-full lg:w-8/12'/>
                        <div className='flex'>
                            <Card className=" w-full lg:w-8/12 inset-0 bg-gradient-to-r from-primary-500 to-primary-600">
                                <CardHeader className="flex gap-3 lg:items-start items-center justify-center lg:justify-normal">
                                    <div className="flex flex-col">
                                        <p className="text-xl lg:text-5xl text-white font-extrabold ">Especialidades</p>
                                    </div>
                                </CardHeader>
                                <Divider/>
                                <CardBody>
                                    <div className="w-full list-disc text-bold text-m lg:text-2xl lg:text-left justify-center text-center space-y-2 font-[350] pressed">
                                        <li className=' text-white '>Odontolgía General</li>
                                        <li className=' text-white '>Ortodoncia</li>
                                        <li className=' text-white '>Periodoncia</li>
                                        <li className=' text-white '>Endodoncia</li>
                                        <li className=' text-white '>Cirugías Implantes</li>
                                        <li className=' text-white '>Estetica Integral</li>
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
            </div>
        </section>

    )
}
