import { React, useState, useEffect } from 'react'
import Image from 'next/image'
import { Divider, Button, Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react'
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
                // flipCard()
            }
        }, 15000)
    }, [isFlipped])
    return (
        <div>
            {Profesional != null
                ? <ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront={0.5} flipSpeedFrontToBack={0.5} flipDirection="horizontal">
                    <div style={{ display: isFlipped ? 'none' : null }}>
                        <Card className="w-[16rem] h-[26rem] sm:w-[26rem] sm:h-[40rem] gap-8 backdrop-blur-xl shadow-xl  border rounded-2xl border-gray-200 grid grid-row-3 items items-center justify-center ">
                            <CardHeader className='items items-center mt-6 justify-center' >
                                <Image
                                    src={Profesional ? Profesional.srcRute : null}
                                    className='rounded-full  shadow-lg h-[18rem] w-[18rem]'
                                />
                            </CardHeader>
                            <CardBody>
                                <div className='flex flex-col flex-1 items-center gap-2'>
                                    <h5 className="text-lg sm:text-3xl text-center font-medium text-gray-900">{Profesional.name}</h5>
                                    <span className="text-lg sm:text-2xl font-medium text-gray-500 dark:text-gray-400 ">{Profesional.specialty}</span>
                                    <Divider className='w-8/12 bg-slate-500 rounded-xl'></Divider>
                                </div>
                                <div className='flex flex-col items-center gap-1'>
                                    <span className="text-sm sm:text-xl  text-gray-950 ">Especialidad</span>
                                    <span className="text-center text-xs sm:text-xl  text-gray-500 mb-4">{Profesional.specialist}</span>
                                </div>
                            </CardBody>
                            <CardFooter className='items items-center justify-center'>
                                <Button className="bg-primary-600 m-10 font-bold text-white font-2xl" variant="shadow" onClick={flipCard}>Experiencia Laboral</Button>
                            </CardFooter>
                        </Card>
                    </div>
                    <div style={{ display: !isFlipped ? 'none' : null }}>
                        <Card className="w-[16rem] h-[26rem] sm:w-[26rem] sm:h-[40rem] backdrop-blur-xl shadow-xl bg-slate-800 border rounded-2xl border-gray-200 flex flex-col items items-center justify-center">
                            <div className="flex flex-col flex-1 m-4 sm:m-10 gap-2 text-white ">
                                <div className='flex flex-col flex-1'>
                                    <div className='flex flex-col items-center gap-4 sm:mb-4 sm:gap-10'>
                                        <div className="flex flex-col sm:gap-4">
                                            <h3 className="font-bold text-white text-foreground/90 text-base sm:text-2xl sm:mt-5">{Profesional.name}</h3>
                                            <Divider className='bg-white/40 h-0.5 rounded-sm'></Divider>
                                            <p className="text-xs font-light ">{Profesional.university}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center sm:gap-4">
                                        <p className="text-base font-bold text-white text-foreground/80">Experiencia Laboral</p>
                                        <Divider className='w-10/12'></Divider>
                                        <div className="flex flex-col justify-between list-disc gap-0.5 sm:gap-2 mb-4">
                                            {Profesional.experience
                                                ? Profesional.experience.map(
                                                    (item) => (
                                                        <li key={item} className=" text-xs sm:text-sm font-light">{item}</li>
                                                    )
                                                )
                                                : null}
                                        </div>
                                    </div>
                                </div>
                                <Button className="bg-primary-600 mb-10 font-bold text-white font-2xl" variant="shadow" onClick={flipCard}>Información General</Button>
                            </div>
                        </Card>
                    </div>
                </ReactCardFlip>
                : <div></div>}
        </div>
    )
}
