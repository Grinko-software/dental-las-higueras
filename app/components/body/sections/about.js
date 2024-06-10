/* eslint-disable no-unused-vars */
import { Card, CardHeader, CardBody, Button, CardFooter, Divider } from '@nextui-org/react'
import Image from 'next/image'
import Img2 from '@/assets/images/image2.jpeg'
/* Images specialyts */
import Speciality1 from '@/assets/images/speciality/1.jpg'
import Speciality2 from '@/assets/images/speciality/2.jpg'
import Speciality3 from '@/assets/images/speciality/3.jpg'
import Speciality4 from '@/assets/images/speciality/4.jpg'
import Speciality5 from '@/assets/images/speciality/5.jpg'
import Speciality6 from '@/assets/images/speciality/6.jpg'

import useGlobalStore from '@/store/globalStore'
import { useState, useEffect, use, lazy } from 'react'
import { callbackFadeLeft, callbackFadeRight, callbackFadeUp } from '../services'
const CardItem = ({ title, imageSrc }) => {
    const texts = title.split('/')
    return (
        <section>
            <Card isFooterBlurred = {true} className="sm:col-span-4 h-[500px] sm:w-[530px] w-[350px]">
                <Image
                    alt={'Speciality'}
                    src={imageSrc}
                    className="z-0 w-full h-full object-cover"
                />
                <CardFooter className=" h-[3rem] justify-center before:bg-white/20 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large  w-[calc(100%_-_8px)] shadow-small ml-1 z-10 bottom-1">
                    {texts?.map((t) => (
                        <>
                            <span className='inline-block text-2xl font-extrabold text-white'>{t.toUpperCase()}</span>
                        </>
                    ))}
                </CardFooter>
            </Card>
        </section>
    )
}

const names = [
    'Empatia', 'Innovación', 'Calidad'
]
const especialidades = [
    { name: 'Odontología General', image: Speciality1 },
    { name: 'Ortodoncia', image: Speciality2 },
    { name: 'Periodoncia', image: Speciality3 },
    { name: 'Endodoncia', image: Speciality4 },
    { name: 'Cirugías Implantes', image: Speciality5 },
    { name: 'Estetica Integral', image: Speciality6 }
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
    useEffect(() => {
        const observerLeft = new IntersectionObserver(callbackFadeLeft)
        const observerRight = new IntersectionObserver(callbackFadeRight)
        const observerUp = new IntersectionObserver(callbackFadeUp)
        const targetsLeft = document.querySelectorAll('.scroll-left')
        const targetsRight = document.querySelectorAll('.scroll-right')
        const targetsUp = document.querySelectorAll('.scroll-up')
        targetsLeft.forEach(function (target) {
            target.classList.add('opacity-0')
            observerLeft.observe(target)
        })
        targetsRight.forEach(function (target) {
            target.classList.add('opacity-0')
            observerRight.observe(target)
        })
        targetsUp.forEach(function (target) {
            target.classList.add('opacity-0')
            observerUp.observe(target)
        })
    }, [])
    return (
        <section className='bg-primary-150 h-full  flex flex-col items items-center'>

            <div id='Nosotros' className="w-full h-auto  gap-10 flex flex-col items items-center ">
                <div className="reveal h-auto m-4 lg:mx-28 flex flex-col lg:flex-row lg:items-center lg:pr-10">
                    <div className="grid gap-10 lg:w-10/12 text-center lg:text-left lg:justify-center scroll-left">
                        <div className='w-full lg:w-10/12 flex flex-row items-center'>
                            <h4 className="text-bold text-3xl  lg:text-6xl font-[600] text-primary-700 " >
                                Atendiendo a nuestros pacientes con
                                <span className='font-extrabold fade-in text-3xl lg:text-5xl text-primary-600'>
                                    {' ' + currentName.toUpperCase()}
                                </span>
                            </h4>
                        </div>
                        <div className='flex gap-4 lg:w-10/12 flex-col'>
                            <h4 className="font-bold fade-in text-xl  lg:text-2xl text-primary-600">
                            QUIENES SOMOS
                            </h4>
                            <text className='text-sm lg:text-xl text-primary-700 '>
                                Un equipo que cuenta con los mejores profesionales, preocupados por brindar la mejor atención, para atender las necesidades de nuestros pacientes,
                                <span className='font-bold'> cuidando de ti y de tu sonrisa. </span><br/>
                                Nace de la necesidad de reunir en un sólo lugar las complejas especialidades que comprende la odontología.
                                Caracterizándonos por la calidad en nuestros tratamientos y en brindar una buena atención.
                            </text>
                            <h4 className="font-bold fade-in text-xl  lg:text-2xl text-primary-600">
                                NUESTRA MISION
                            </h4>
                            <text className='text-sm lg:text-xl text-primary-700 '>
                                Buscamos conocer perfectamente cada caso y las complicaciones de cada uno, y así poder ofrecer una atención personalizada e individualizada, alcanzando la excelencia en nuestra labor.
                            </text>

                            <h4 className="font-bold fade-in text-xl  lg:text-2xl text-primary-600">
                                VISION
                            </h4>
                            <text className='text-sm lg:text-xl text-primary-700 '>
                                Queremos que nos conozcan por nuestro profesionalismo, por el buen trato, destacándonos por ser los mejores profesionales a vuestro servicio en la Región.
                            </text>
                        </div>
                        <Divider className='w-full lg:w-8/12'/>
                    </div>
                    <div className='h-full flex flex-col items-center lg:items-stretch lg:grid lg:grid-col-2 scroll-right'>
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
            <div className='scroll-up grid grid-cols-1 p-2 xs:md:grid-cols-2 md:grid-cols-2 md:py-10 md:w-fit xl:grid-cols-3 gap-5 items-center justify-center'>
                {
                    especialidades?.map((item) => {
                        return <CardItem key={item.name} title={item.name} imageSrc={item.image} />
                    })
                }
            </div>
        </section>
    )
}
