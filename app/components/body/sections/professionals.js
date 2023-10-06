/* eslint-disable no-unused-vars */
import useGlobalStore from '@/store/globalStore'
import { useState, useEffect } from 'react'
import ProfesionalsCard from '../../card'
import { Divider } from '@nextui-org/react'

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
        <section id='Profesionales' className='mt-[2rem] w-full h-full lg:mt-[6rem] flex flex-col items items-center'>
            <Divider className='w-11/12 h-0.5 rounded-xl'></Divider>
            <div className='fade-in-up flex flex-col items items-center py-8'>
                <h1 className="text-bold fade-in text-8xl   font-[600]" >
                Profesionales
                </h1>
            </div>
            <div className="w-full h-auto  gap-10 flex flex-col items items-center">
                <div className="fade-in-up h-auto m-4 gap-12 lg:mx-28  grid grid-cols-3 lg:flex-row lg:items-center lg:pr-10">
                    <ProfesionalsCard></ProfesionalsCard>
                    <ProfesionalsCard></ProfesionalsCard>
                    <ProfesionalsCard></ProfesionalsCard>
                    <ProfesionalsCard></ProfesionalsCard>
                    <ProfesionalsCard></ProfesionalsCard>
                    <ProfesionalsCard></ProfesionalsCard>
                </div>
            </div>

        </section>

    )
}
