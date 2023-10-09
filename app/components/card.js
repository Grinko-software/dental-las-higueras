import { React, useState, useEffect } from 'react'
import Image from 'next/image'
import { Divider, Button, Card } from '@nextui-org/react'
import ReactCardFlip from 'react-card-flip'

export default function ProfesionalsCard (props) {
    const { Profesional, timer } = props
    const [isFlipped, setIsFlipped] = useState(false)
    const flipCard = () => {
        console.log(isFlipped)
        if (!isFlipped && timer) {
            clearInterval(timer)
        }
        setIsFlipped(!isFlipped)
    }

    useEffect(() => {
        setInterval(() => {
            if (isFlipped) {
                flipCard()
            }
        }, 10000)
    }, [isFlipped])
    return (
        <div>
            {Profesional != null
                ? <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                    <Card className="backdrop-blur-xl shadow-xl bg-primary-600/2 border rounded-2xl border-gray-200 flex flex-col items items-center ">
                        <div className="w-[17rem] h-[26rem] sm:w-[27rem] sm:h-[40rem] flex-col sm:mx-10 text-white ">
                            <div className="absolute inset-0 bg-white rounded-2xl flex justify-center items-center flex-row z-20">
                                <div className="flex flex-col items-center gap-4 sm:gap-10 ">
                                    <div className='flex flex-col items-center gap-5'>
                                        <div className='w-4/12 sm:w-6/12 '>
                                            <Image
                                                src={Profesional ? Profesional.srcRute : null}
                                                width={'50%'}
                                                height={'50%'}
                                                className='rounded-full shadow-lg'
                                            />
                                        </div>
                                        <h5 className="text-xl sm:text-3xl text-center font-medium text-gray-900">{Profesional.name}</h5>
                                        <span className="text-xl sm:text-2xl font-medium text-gray-500 dark:text-gray-400 ">{Profesional.specialty}</span>
                                        <Divider className='w-8/12 bg-slate-500 rounded-xl'></Divider>
                                    </div>
                                    <div className='flex flex-col items-center  gap-1'>
                                        <span className="text-sm sm:text-xl  text-gray-950 ">Especialidad</span>
                                        <span className="text-sm sm:text-xl  text-gray-500 mb-10">{Profesional.specialist}</span>
                                        <Button className="bg-primary-600 font-bold text-white font-2xl" variant="shadow" onClick={flipCard}>Experiencia Laboral</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card >
                        <div className="w-[17rem] h-[26rem] sm:w-[27rem] sm:h-[40rem]  bg-slate-800  text-white ">
                            <div className='absolute inset-0 rounded-2xl flex flex-col justify-center items-center z-20 gap-2 sm:gap-10 mx-2 sm:mx-12 '>
                                <div className='flex flex-col items-center gap-4 sm:gap-10'>
                                    <div className="flex flex-col gap-1">
                                        <h3 className="font-bold text-white text-foreground/90 text-lg sm:text-2xl">{Profesional.name}</h3>
                                        <Divider className='bg-primary-600/10 h-0.5 rounded-sm'></Divider>
                                        <p className="text-xs font-light ">{Profesional.university}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center  gap-2">
                                    <p className="text-xl font-bold text-white text-foreground/80">Experiencia Laboral</p>
                                    <Divider className='w-10/12'></Divider>
                                    <div className="flex flex-col justify-between list-disc gap-1 sm:gap-4">
                                        {Profesional.experience
                                            ? Profesional.experience.map(
                                                (item) => (
                                                    <li key={item} className=" text-xs sm:text-sm font-light">{item}</li>
                                                )
                                            )
                                            : null}
                                    </div>
                                </div>
                                <Button className="bg-primary-600 font-bold text-white font-2xl" variant="shadow" onClick={flipCard}>Información General</Button>
                            </div>
                        </div>
                    </Card>
                </ReactCardFlip>
                : <div></div>}
        </div>
    )
}
