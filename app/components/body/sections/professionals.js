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

const ProfesionalsArray = [

    {
        srcRute: '../../../../assets/images/juanito.png',
        name: 'Dr. Juan Carlos Benavides Solarte',
        specialty: 'Cirujano Dentista',
        specialist: 'Ortodoncia y Ortopedia Bucomaxilofacial',
        university: 'Universidad Antonio Narino, Colombia Reconocido por Minist. Relaciones Exteriores el 22 de Octubre de 2009',
        experience: [
            'Cirujano Dentista en el área privada con más de 12 años de experiencia',
            'Especialidad de Ortodoncia y O.M.B, Universidad Católica de Uruguay',
            'Maestría en Anclaje Esqueletal Instituto Mondelli de Ortodoncia, Brasil',
            'Residencia en Microtornillos Extraalveolares',
            'Certificación en Invisaling',
            'Actualización en ortodoncia y vías aéreas Universidad de New York'
        ]

    },
    {
        srcRute: '../../../../assets/images/juanito.png',
        name: 'Dr. Rodolfo Zamora',
        specialty: 'Especialista titulado',
        specialist: ' -',
        university: 'certificado por la Universidad del Desarrollo y la Clínica Alemana de Santiago.  Titulado con alto honor de la Universidad Mayor de Santiago.',
        experience: [
            'Docente Titular de pregrado del Departamento de Cirugia Oral.',
            'Miembro de la Sociedad De implantologìa Oral de Chile',
            'Ex jefe de programa de Vichuquen de odontología y de programas'
        ]

    },
    {
        srcRute: '../../../../assets/images/juanito.png',
        name: 'Dr. José Ignacio Iturra Marín',
        specialty: 'Cirujano Dentista',
        specialist: '-',
        university: 'Universidad de Antofagasta (2021)',
        experience: [
            'Cirujano Dentista con experiencia en atención primaria y urgencias (Hospital Carlos Cisternas, Calama)',
            'Desarrollo y Jefe de unidad Móvil en “Programa de salud Bucal” de JUNAEB y Odontopediatría (2022 a 2023)',
            'Desarrollo y Jefe de unidad Móvil en “Programa de salud Bucal” de JUNAEB y Odontopediatría (2022 a 2023)'

        ]

    },
    {
        srcRute: '../../../../assets/images/juanito.png',
        name: 'Dr. Juan Carlos Benavides Solarte',
        specialty: 'Cirujano Dentista',
        specialist: 'Ortodoncia y Ortopedia Bucomaxilofacial',
        university: 'Universidad Antonio Narino, Colombia Reconocido por Minist. Relaciones Exteriores el 22 de Octubre de 2009',
        experience: [
            'Cirujano Dentista en el área privada con más de 12 años de experiencia',
            'Especialidad de Ortodoncia y O.M.B, Universidad Católica de Uruguay',
            'Maestría en Anclaje Esqueletal Instituto Mondelli de Ortodoncia, Brasil',
            'Residencia en Microtornillos Extraalveolares',
            'Certificación en Invisaling',
            'Actualización en ortodoncia y vías aéreas Universidad de New York'
        ]

    },

    {
        srcRute: '../../../../assets/images/juanito.png',
        name: 'Dra. Nataly Veas Cortés',
        specialty: 'Cirujano Dentista',
        specialist: 'Periodoncia',
        university: 'Licenciado en Ciencias Odontológicas Universidad de Antofagasta',
        experience: [
            'Cirujano Dentista en el área privada con más de 5 años de experiencia',
            'Especialidad de Periodoncia, Universidad del Desarrollo',
            'Diplomado Ortodoncia-Periodoncia, Universidad del Desarrollo'
        ]

    }

]

const slides = [
    // eslint-disable-next-line react/jsx-key
    {
        key: uuidv4(),
        content: <ProfesionalsCard alt="0" Profesional={ProfesionalsArray[0]}/>
    },
    {
        key: uuidv4(),
        content: <ProfesionalsCard alt="1" Profesional={ProfesionalsArray[1]}/>
    },
    {
        key: uuidv4(),
        content: <ProfesionalsCard alt="2" Profesional={ProfesionalsArray[2]}/>
    },
    {
        key: uuidv4(),
        content: <ProfesionalsCard alt="3" Profesional={ProfesionalsArray[3]}/>
    },
    {
        key: uuidv4(),
        content: <ProfesionalsCard alt="4" Profesional={ProfesionalsArray[4]}/>
    }
]

export default function Profesionals () {
    return (
        <section id='Profesionales' className='bg-white h-[800px] sm:h-[1000px] flex flex-col items items-center justify-center'>
            <Carroussel
                cards={slides}
                offset={2}
                showArrows={false}
                autoPlay={true}
                animationConfig={ 'tension: 120, friction: 14' }
                showNavigation ={false}
            />
        </section>

    )
}
