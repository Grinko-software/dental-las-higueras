/* eslint-disable no-unused-vars */
import { Card, CardHeader, CardBody, Divider } from '@nextui-org/react'
import Image from 'next/image'
import Img2 from '@/assets/images/image2.jpeg'
import useGlobalStore from '@/store/globalStore'
import YouTube from 'react-youtube'
import { useState, useEffect } from 'react'
import ProfesionalsCard from '../../card'

const names = [
    'Empatia', 'Inovacion', 'Calidad'
]
export default function Profesionals () {
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
                <div className="fade-in-up h-auto m-4 gap-12 lg:mx-28 flex flex-col lg:flex-row lg:items-center lg:pr-10">
                    <ProfesionalsCard></ProfesionalsCard>
                    <ProfesionalsCard></ProfesionalsCard>

                </div>
            </div>
        </section>

    )
}
