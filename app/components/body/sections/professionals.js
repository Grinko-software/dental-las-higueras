/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import useGlobalStore from '@/store/globalStore'
import { useState, useEffect } from 'react'
import ProfesionalsCard from '../../card'
import { Divider } from '@nextui-org/react'
import { Carousel } from '3d-react-carousal'

const names = [
    'Empatia', 'Inovacion', 'Calidad'
]

const slides = [
    // eslint-disable-next-line react/jsx-key
    <ProfesionalsCard ></ProfesionalsCard>,
    <ProfesionalsCard></ProfesionalsCard>,
    <ProfesionalsCard></ProfesionalsCard>,
    <ProfesionalsCard></ProfesionalsCard>,
    <ProfesionalsCard></ProfesionalsCard>,
    <ProfesionalsCard></ProfesionalsCard>,
    <ProfesionalsCard></ProfesionalsCard>,
    <ProfesionalsCard></ProfesionalsCard>
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
        <section id='About' className='mt-[2rem] w-full h-full lg:mt-[6rem] flex flex-col items items-center my-10'>
            <Divider className='w-11/12 h-0.5 rounded-xl'></Divider>
            <div className='fade-in-up flex flex-col items items-center py-8'>
                <h1 className="text-bold fade-in text-8xl font-[600]" >
                Profesionales
                </h1>
            </div>
            <div className='w-full h-full '>
                <Carousel slides={slides} autoplay={true} interval={9000} arrows={true} className="shadow-none"/>
            </div>
        </section>

    )
}
