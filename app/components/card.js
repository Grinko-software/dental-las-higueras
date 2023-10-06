import React from 'react'
import { Card, CardBody, Divider } from '@nextui-org/react'
import Image from 'next/image'
import image1 from '@/assets/images/juanito.png'

export default function ProfesionalsCard (props) {
    return (
        <Card
            isBlurred
            className="border-sm hover:shadow-2xl bg-primary-600/5 shadow-xl max-w-[610px]  ring-primary-600/10 border-[0.1rem] "
            shadow="sm"
        >

            <CardBody>
                <div className='flex flex-col gap-4 mx-10 my-5  '>
                    <div className='flex flex-row gap-8'>
                        <div className=''>
                            <Image
                                imgRef={image1}
                                src={image1}
                                alt="Logo Dental Las Higueras"
                                className='rounded-xl w-[80%] h-[80%]  ring-primary-600/60 ring-[0.1rem] ring-offset-4 '
                            />
                        </div>
                        <div className='h-auto flex flex-col items-center lg:items-stretch justify-center '>
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-bold text-foreground/90 text-2xl">Dr. Juan Carlos Benavides Solarte</h3>
                                    <Divider className='bg-primary-600 h-1 rounded-sm'></Divider>
                                    <p className="text-xl font-bold text-foreground/80">Cirujano Dentista</p>
                                    <p className="text-sm font-light ">Universidad Antonio Narino, Colombia Reconocido por Minist. Relaciones Exteriores el 22 de Octubre de 2009</p>
                                    <p className="text-sm font-bold text-foreground/80">Especialidad: Ortodoncia y Ortopedia Bucomaxilofacial</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-2 gap-1">
                        <p className="text-xl font-bold text-foreground/80">Experiencia Laboral</p>
                        <div className="flex flex-col justify-between list-disc">
                            <li className="text-small font-light">Cirujano Dentista en el área privada con más de 12 años de experiencia</li>
                            <li className="text-small font-light">Especialidad de Ortodoncia y O.M.B, Universidad Católica de Uruguay</li>
                            <li className="text-small font-light">Maestría en Anclaje Esqueletal Instituto Mondelli de Ortodoncia, Brasil</li>
                            <li className="text-small font-light">Residencia en Microtornillos Extraalveolares</li>
                            <li className="text-small font-light">Certificación en Invisaling</li>
                            <li className="text-small font-light">actualización en ortodoncia y vías aéreas Universidad de New York</li>
                        </div>
                    </div>
                </div>
            </CardBody>

        </Card>
    )
}
