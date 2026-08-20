'use client'
import { useState, useEffect } from 'react'
import ProfesionalsCard from '../../card'
import { Divider } from '@nextui-org/react'
import Carroussel from '../../../../ui/carousel/carussel'
import { v4 as uuidv4 } from 'uuid'
import { useViewport } from 'react-viewport-hooks'
import juanImage from '@/assets/images/professionals/juan-benavides.jpg'
/* import defaultImage from '@/assets/images/clinica-mision-vision.jpg' */
import Nataly from '@/assets/images/professionals/nataly-veas.jpg'
import Sandra from '@/assets/images/professionals/sandra-benavides.jpg'
import Manary from '@/assets/images/professionals/manary-murcia.jpg'
import Matias from '@/assets/images/professionals/matias-paez.jpg'
import Beatriz from '@/assets/images/professionals/beatriz-giraldo.jpg'
import Ariel from '@/assets/images/professionals/ariel-peinado.jpg'
import Ingrid from '@/assets/images/professionals/ingrid-skinner.jpg'
import Edgardo from '@/assets/images/professionals/edgardo-guzman.jpg'
import Scarlett from '@/assets/images/professionals/scarlett-araya.jpg'

import { /* callbackFadeIn */ callbackFadeUp } from '../services'

const ProfesionalsArray = [

    {
        srcRute: juanImage,
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
            'Actualización en ortodoncia y vías aéreas Universidad de New York',
            'Certificación en Clear Corret',
            'Miembro INTERNATIONAL ASSOCIATION OF ORTHODONTICS AND FORENSIC ODONTOLOGY (IAOFO)'
        ]

    },
    {
        srcRute: Nataly,
        name: 'Dra. Nataly Veas Cortés',
        specialty: 'Cirujano Dentista',
        specialist: 'Periodoncia',
        university: 'Licenciado en Ciencias Odontológicas Universidad de Antofagasta',
        experience: [
            'Cirujano Dentista en el área privada con más de 5 años de experiencia',
            'Especialidad de Periodoncia, Universidad del Desarrollo',
            'Diplomado Ortodoncia-Periodoncia, Universidad del Desarrollo'
        ]

    },
    {
        srcRute: Sandra,
        name: 'Dra. Sandra Benavides',
        specialty: 'Cirujano Dentista',
        specialist: 'Ortodoncia',
        university: 'Universidad Central del Ecuador, Reconocido por Minist. Relaciones Exteriores el 20 de Noviembre de 2015',
        experience: [
            'Cirujano Dentista en el área privada con más de 6 años de experiencia',
            'Especialidad de Ortodoncia, Universidad de los Andes'
        ]
    },
    {
        srcRute: Manary,
        name: 'Dra. Manary Murcia',
        specialty: 'Odontología General',
        specialist: 'Armonización Facial',
        university: '',
        experience: [
            ''
        ]
    },
    {
        srcRute: Beatriz,
        name: 'Dra. Beatriz Giraldo',
        specialty: 'Odontología General',
        specialist: '-',
        university: '',
        experience: [
            ''
        ]
    },
    {
        srcRute: Matias,
        name: 'Dr. Matias Páez Dominguez',
        specialty: 'Odontología General',
        specialist: '-',
        university: 'Universidad de La serena',
        experience: [
            'Dentista General en Clinica Dental Uno Salud',
            'Dentista General Clínica Dental Las Higueras (2024)',
            'Dentista General en Clínica Densalud La Serena (2024)'
        ]
    },
    {
        srcRute: Ariel,
        name: 'Ariel Peinado Madera',
        specialty: 'Odontólogo',
        specialist: 'Rehabilitación Oral',
        university: 'Odontólogo egresado en 2011',
        experience: [
            'Diplomado en Implantología',
            'Diplomado en Estética Dental',
            'Especialista en Rehabilitación Oral'
        ]
    },
    {
        srcRute: Ingrid,
        name: 'Dra. Ingrid Skinner Rojas',
        specialty: 'Cirujano Dentista',
        specialist: 'Odontología General',
        university: 'Universidad de La Serena',
        experience: [
            'Dentista general Clínica Dental Somi (2024)',
            'Dentista general Clínicas Dental Jade (2024-actualidad)',
            'Dentista general Clínica Dental Las Higueras (2025-actualidad)'
        ]
    },
    {
        srcRute: Edgardo,
        name: 'Dr. Edgardo Guzmán Baldecchi',
        specialty: 'Cirujano Dentista',
        specialist: 'Odontología General',
        university: 'Egresado y titulado 2024, Universidad de La Serena',
        experience: [
            'Internado Clínica Dental Escolar',
            'Dentista independiente López Dental Clinic (2025)',
            'Dental Las Higueras (2025)',
            'Clínica Puertas del Mar (2026)',
            'Curso blanqueamiento Beyond',
            'Curso intensivo teórico-práctico de Carillas Directas Estratificadas (EquilibrArte Clinic, Santiago de Chile)',
            'Diversos congresos en restauraciones anteriores'
        ]
    },
    {
        srcRute: Scarlett,
        name: 'Dra. Scarlett Araya Arratia',
        specialty: 'Cirujano Dentista',
        specialist: 'Odontología Restauradora',
        university: 'Cirujana Dentista titulada en 2025, Universidad de La Serena',
        experience: [
            'Atención de adultos y niños',
            'Formación en prevención y promoción de salud bucal',
            'Formación en odontología restauradora'
        ]
    }
]

export default function Profesionals () {
    const [timer, setTimer] = useState(null)
    const [goToSlide, setGoToSlide] = useState(null)
    const { vw/* , vh */ } = useViewport()
    const [useView, setUseView] = useState(null)
    const slides = ProfesionalsArray.map(
        (item) => ({
            key: uuidv4(),
            content: <ProfesionalsCard alt={item.name} Profesional={item}
                timer={timer}
                setTimer={setTimer}
            />
        })
    )

    useEffect(() => {
        setTimer(setInterval(() => {
            setGoToSlide(goToSlide + 1)
        }, 10000))
    }, [])
    useEffect(() => {
        if (timer) {
            clearInterval(timer)
            setTimer(setInterval(() => {
                setGoToSlide(goToSlide + 1)
            }, 10000))
        }
    },
    [goToSlide])
    useEffect(() => {
        setUseView(vw)
    }, [vw])
    useEffect(() => {
        const observerIn = new IntersectionObserver(callbackFadeUp)
        const targetsIn = document.querySelectorAll('.scroll-in')
        targetsIn.forEach(function (target) {
            target.classList.add('opacity-0')
            observerIn.observe(target)
        })
    }, [])
    return (
        <section id='Profesionales' className='scroll-in h-full py-10 px-0 xlg:px-[10rem]  flex flex-col items items-center justify-center '>

            {parseInt(useView) > 640
                ? <Carroussel
                    cards={slides}
                    items={ProfesionalsArray}
                    timer={timer}
                    setTimer={setTimer}
                    goToSlide={goToSlide}
                    setGoToSlide={setGoToSlide}
                />
                : <div>
                    <div className='flex flex-col justify-items-center'>
                        <h4 className="w-full  text-4xl lg:text-7xl font-[600]">Profesionales</h4>
                        <Divider className='w-12/12 bg-slate-800 rounded-xl'></Divider>
                    </div>
                    <div className='h-full w-full grid grid-cols-1 justify-items-center gap-2'>
                        {ProfesionalsArray
                            ? ProfesionalsArray.map(
                                (item, index) => (
                                    <ProfesionalsCard key={index} Profesional={item}></ProfesionalsCard>
                                )
                            )
                            : null}
                    </div></div>}
        </section>

    )
}
