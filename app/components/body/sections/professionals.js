'use client'
import { useState, useEffect } from 'react'
import ProfesionalsCard from '../../card'
import { Divider } from '@nextui-org/react'
import Carroussel from '../../../../ui/carousel/carussel'
import { v4 as uuidv4 } from 'uuid'
import { useViewport } from 'react-viewport-hooks'
import juanImage from '@/assets/images/professionals/juan.jpg'
import millerlandy from '@/assets/images/professionals/Millerlandy.jpg'
/* import defaultImage from '@/assets/images/image2.jpeg' */
import rodolfoZamora from '@/assets/images/professionals/rodolfo-zamora.jpeg'
import iturra from '@/assets/images/professionals/iturra2.jpg'
import Nataly from '@/assets/images/professionals/Nataly.JPG'
import Sandra from '@/assets/images/professionals/Sandra.jpg'
import Manary from '@/assets/images/professionals/Manary.JPG'
import Matías from '@/assets/images/professionals/Matías.jpg'
import Beatriz from '@/assets/images/professionals/Beatriz.jpg'

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
        srcRute: rodolfoZamora,
        name: 'Dr. Rodolfo Zamora',
        specialty: 'Cirujando Dentista',
        specialist: 'Implantología y Cirugía Bucal',
        university: 'certificado por la Universidad del Desarrollo y la Clínica Alemana de Santiago.  Titulado con alto honor de la Universidad Mayor de Santiago.',
        experience: [
            'Docente Titular de pregrado del Departamento de Cirugia Oral.',
            'Miembro de la Sociedad De implantologìa Oral de Chile',
            'Ex jefe de programa de Vichuquen de odontología y de programas'
        ]

    },
    {
        srcRute: iturra,
        name: 'Dr. José Ignacio Iturra Marín',
        specialty: 'Cirujando Dentista',
        specialist: 'Odontología General',
        university: 'Universidad de Antofagasta (2021)',
        experience: [
            'Cirujano Dentista con experiencia en atención primaria y urgencias (Hospital Carlos Cisternas, Calama)',
            'Desarrollo y Jefe de unidad Móvil en “Programa de salud Bucal” de JUNAEB y Odontopediatría (2022 a 2023)'
        ]

    },
    {
        srcRute: millerlandy,
        name: 'Dra. Millerlandy Chavarro Lozano',
        specialty: 'Cirujano Dentista',
        specialist: 'Endodoncia',
        university: 'Titulado de la Universidad antonio Nariño, Colombia, reconocido por mins de relaciones exteriores con el N• 1113/2017',
        experience: [
            'Cirujano dentista en el área pública y privada desde el 2013 ',
            'Endodoncista en el área privada desde 2021, manejo de urgencias endodonticas, endodoncia mecanizada y cirugía apical',
            'Posee Título en la Especialidad de  Endodoncia  en la Universidad Autónoma de Chile 2021, Registro Superintendencia de Salud: 559008'
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
        srcRute: Matías,
        name: 'Dr. Matías Veas',
        specialty: 'Cirujando Dentista',
        specialist: 'Odontología General',
        university: 'Universidad de Antofagasta 2024',
        experience: [
            ''
        ]
    },
    {
        srcRute: Beatriz,
        name: 'Dra. Beatriz Giraldo',
        specialty: 'Cirujando Dentista',
        specialist: 'Odontología General',
        university: 'Universidad Antonio Nariño Colombia con reconocimiento por el ministerio de relaciones exteriores el 28 Abril 2017',
        experience: [
            'Cirujano Dentista en el área pública por 1 año',
            'Cirujano Dentista área privada por 9 años',
            'Tecnóloga en Mecánica Dental (Colombia)',
            'Diplomado de Implantología multidisciplinaria (Universidad Andrés Bello - Chile)'
        ]
    }
]

export default function Profesionals () {
    const [timer, setTimer] = useState(null)
    const [goToSlide, setGoToSlide] = useState(null)
    const { vw/* , vh */ } = useViewport()
    const [useView, setUseView] = useState(null)
    const slides = [
        // eslint-disable-next-line react/jsx-key
        {
            key: uuidv4(),
            content: <ProfesionalsCard alt="0" Profesional={ProfesionalsArray[0]}
                timer={timer}
                setTimer={setTimer}

            />
        },
        {
            key: uuidv4(),
            content: <ProfesionalsCard alt="1" Profesional={ProfesionalsArray[1]} timer={timer}
                setTimer={setTimer}
            />
        },
        {
            key: uuidv4(),
            content: <ProfesionalsCard alt="2" Profesional={ProfesionalsArray[2]} timer={timer}
                setTimer={setTimer}
            />
        },
        {
            key: uuidv4(),
            content: <ProfesionalsCard alt="3" Profesional={ProfesionalsArray[3]} timer={timer}
                setTimer={setTimer}
            />
        },
        {
            key: uuidv4(),
            content: <ProfesionalsCard alt="4" Profesional={ProfesionalsArray[4]} timer={timer}
                setTimer={setTimer}
            />
        }, {
            key: uuidv4(),
            content: <ProfesionalsCard alt="4" Profesional={ProfesionalsArray[4]} timer={timer}
                setTimer={setTimer}
            />
        }
    ]

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
