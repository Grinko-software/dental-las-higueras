/* eslint-disable no-unused-vars */
import { Card, CardFooter } from '@nextui-org/react'
import Button from '@/ui/button'
import Image from 'next/image'
import image1 from '@/assets/images/image1.png'
import useGlobalStore from '@/store/globalStore'
export default function Home () {
    const { section, setSection } = useGlobalStore(({ section, setSection }) => ({ section, setSection }))
    return (
        <section id='Inicio' className='mt-[2rem] h-full lg:mt-[6rem] mx-auto xl:mx-[5rem]'>
            <div className="w-full h-auto px-5 lg:px-0 max-w-screen-1xl  grid grid-cols-1 lg:grid-cols-2">
                <div className='h-auto flex flex-col items-center lg:items-stretch '>
                    <div className="py-6 px-12 sm:py-12 sm:px-0 fade-in-left">
                        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                            <div className="flex flex-col items-center justify-center py-2">
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-primary-600 shadow-2xl transform rotate-6 rounded-3xl"></div>
                                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-5">
                                    <Image
                                        src={image1}
                                        width={'100%'}
                                        height={'100%'}
                                        alt="Logo Dental Las Higueras"
                                        className='  rounded-3xl'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" fade-in-up h-auto pr-0  flex flex-col items-center lg:items-stretch  lg:grid lg:grid-rows-1 lg:pr-10">
                    <div className="row-span-1">
                        <div className="w-full grid gap-y-[1rem] text-center lg:text-left lg:justify-left">
                            <h1 className="w-full  text-primary-700 text-bold  text-3xl lg:text-7xl font-[600]">
                                    Descubre la excelencia en cuidado dental en
                            </h1>
                            <h1 className='w-full  text-bold  text-3xl lg:text-7xl font-[600] text-primary-600'>
                            Clínica Dental Las Higueras
                            </h1>
                            <h5 className="w-full  text-bold  text-xl font-[350] text-primary-700 ">
                                    Nuestro compromiso es garantizar tu salud bucal y devolverte la confianza en tu sonrisa.
                            </h5>
                        </div>
                    </div>
                    <div className='flex flex-row-reverse items-stretch'>
                        <Button title={'AGENDA TU EVALUACIÓN GRATUITA'}
                            onClick={() => { setSection('Agendar') }}
                            className='h-[4rem] w-auto

                             bg-primary-600 rounded-[100px] break-all hover:bg-primary-500 text-primary-100  px-5 py-5
                                           text-base font-[600]  transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-primary-50
                                       focus:ring-primary-300 dark:bg-primary-600 dark:text-primary-100  dark:placeholder-primary-50  dark:hover:border-primary-50
                                         dark:hover:bg-primary-700  dark:hover:text-primary-50 dark:hover:ring-primary-300 dark:hover:focus:fill-white'>

                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
