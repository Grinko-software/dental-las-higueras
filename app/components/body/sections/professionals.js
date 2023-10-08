/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
'use client'
import useGlobalStore from '@/store/globalStore'
import { useState, useEffect } from 'react'
import ProfesionalsCard from '../../card'
import { Divider } from '@nextui-org/react'
import Carroussel from '../../carussel'
import { v4 as uuidv4 } from 'uuid'
import Waves from './waves'

const slides = [
    // eslint-disable-next-line react/jsx-key
    {
        key: uuidv4(),
        content: <ProfesionalsCard alt="0"/>
    },
    {
        key: uuidv4(),
        content: <ProfesionalsCard alt="1"/>
    },
    {
        key: uuidv4(),
        content: <ProfesionalsCard alt="2"/>
    },
    {
        key: uuidv4(),
        content: <ProfesionalsCard alt="3"/>
    },
    {
        key: uuidv4(),
        content: <ProfesionalsCard alt="4"/>
    }

]

export default function Profesionals () {
    return (
        <section id='Profesionales' className='bg-white h-[900px] flex flex-col items items-center justify-center'>
            <Carroussel
                cards={slides}
                height="500px"
                width="70%"
                offset={2}
                showArrows={false}
                autoPlay={true}
                animationConfig={ 'tension: 120, friction: 14' }
                showNavigation ={false}
            />
        </section>

    )
}
