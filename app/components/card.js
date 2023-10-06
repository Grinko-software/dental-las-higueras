import React from 'react'
import Image from 'next/image'
import image1 from '@/assets/images/juanito2.png'
import { Divider, Button } from '@nextui-org/react'

export default function ProfesionalsCard (props) {
    return (
        <div className="backdrop-blur-md bg-primary-600/2 border border-gray-200 rounded-2xl shadow-xl flex flex-col items items-center ">
            <div className="w-[30rem] h-[30rem] relative rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-100 card">
                <div className="absolute inset-0 bg-white flex justify-center items-center z-20 hover:opacity-0">
                    <div className="flex flex-col items-center gap-2 ">
                        <div className='flex flex-col items-center gap-1'>
                            <div className='w-6/12 mb-2'>
                                <Image
                                    imgRef={image1}
                                    src={image1}
                                    alt="Logo Dental Las Higueras"
                                    width={'100%'}
                                    height={'100%'}
                                    className='rounded-full shadow-lg'
                                />
                            </div>
                            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Dr. Juan Carlos Benavides Solarte</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400 ">Cirujano Dentista</span>
                            <Divider className='w-8/12'></Divider>
                        </div>
                        <div className='flex flex-col items-center mt-2 gap-10'>
                            <span className="text-sm italic text-gray-500 dark:text-gray-400 mx-2">Especialidad: Ortodoncia y Ortopedia Bucomaxilofacial</span>
                            <Button className="bg-primary-600 font-bold text-white" variant="shadow">Experiencia Laboral</Button>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-neutral-800 transition-all z-10 card-back">
                    <div className='flex flex-col gap-3  mx-10 '>
                        <div className='flex flex-row '>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-bold text-white text-foreground/90 text-2xl">Dr. Juan Carlos Benavides Solarte</h3>
                                <Divider className='bg-primary-600/10 h-0.5 rounded-sm'></Divider>
                                <p className="text-xs font-light ">Universidad Antonio Narino, Colombia Reconocido por Minist. Relaciones Exteriores el 22 de Octubre de 2009</p>
                            </div>
                        </div>
                        <div className="flex flex-col mt-2 gap-1">
                            <p className="text-xl font-bold text-white text-foreground/80">Experiencia Laboral</p>
                            <div className="flex flex-col justify-between list-disc">
                                <li className="text-sm font-light">Cirujano Dentista en el área privada con más de 12 años de experiencia</li>
                                <li className="text-sm font-light">Especialidad de Ortodoncia y O.M.B, Universidad Católica de Uruguay</li>
                                <li className="text-sm font-light">Maestría en Anclaje Esqueletal Instituto Mondelli de Ortodoncia, Brasil</li>
                                <li className="text-sm font-light">Residencia en Microtornillos Extraalveolares</li>
                                <li className="text-sm font-light">Certificación en Invisaling</li>
                                <li className="text-sm font-light">actualización en ortodoncia y vías aéreas Universidad de New York</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
