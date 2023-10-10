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
            <div className="w-full h-auto px-5 lg:px-0 max-w-screen-1xl  grid grid-cols-1 lg:grid-cols-2 space-x-10 md:space-x-0">
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
                            <h1 className="w-full   text-bold  text-3xl lg:text-7xl font-[600]">
                                    Descubre la excelencia en cuidado dental en
                            </h1>
                            <h1 className='w-full  text-bold  text-3xl lg:text-7xl font-[600] text-primary-600'>
                            Clínica Dental Las Higueras
                            </h1>
                            <h5 className="w-full  text-bold  text-xl font-[350]">
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
                                       focus:ring-primary-300 dark:bg-primary-800 dark:text-primary-50  dark:placeholder-primary-50  dark:hover:border-primary-50
                                         dark:hover:bg-primary-700  dark:hover:text-primary-50 dark:hover:ring-primary-300 dark:hover:focus:fill-white'>

                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
/*
 <div className='w-full h-auto relative'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#faf8f4" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                    </path>
                </svg>
            </div>
*/
/*
<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="flex flex-col items-center justify-center py-2">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-600 shadow-lg transform -rotate-45 rotate-6 rounded-3xl"></div>
                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <h1 className="text-6xl font-bold">
                Stylish Glassmorphic Header Animation Made with Tailwind CSS &
                Next.js
                            </h1>
                            <h2 className="text-3xl font-bold">
                Fork and modify this sandbox
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

*/
/*
<Card
                        isFooterBlurred
                        radius="lg"
                        className="border-none bg-primary-200 flex flex-col hover:shadow-2xl shadow-xl items-center h-[100%] w-[90%] lg:rounded-l-none lg:rounded-tr-[10%]"
                    >
                        <Card
                            isFooterBlurred
                            radius="lg"
                            className="border-none w-[100%] bg-cover  hover:shadow-2xl shadow-xl lg:relative  lg:right-10 lg:top-[50px] lg:rounded-l-none  lg:rounded-tr-[10%]"

                        >
                            <Image
                                src={image1}
                                width={'100%'}
                                height={'100%'}
                                alt="Logo Dental Las Higueras"

                            />

                        </Card>

                    </Card>

*/
/*

   <div className='h-auto pr-0 lg:pr-10 '>
                    <div className="col-span-full col-start-1 md:col-span-10 md:col-start-2">
                        <div className="w-full grid gap-y-10 justify-left">
                            <h1 className="w-full text-left  text-bold  text-3xl lg:text-7xl font-[600]">
                                    Descubre la excelencia en cuidado dental en <h1 className='text-primary-600'>Clínica Dental Las Higueras</h1>
                            </h1>
                            <h5 className="w-full text-left  text-bold  text-xl font-[300]">
                                    Nuestro compromiso es garantizar tu salud bucal y devolverte la confianza en tu sonrisa.
                            </h5>
                        </div>
                        <div className="w-full grid gap- gap-y-10 justify-left">
                            <Button title={'AGENDA TU EVALUACIÓN GRATUITA'}
                                className='bg-primary-600 rounded-[100px] hover:bg-primary-500 text-primary-100  w-full px-5 py-5 text-center
                                         text-lg font-[600]  transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-primary-50
                                       focus:ring-primary-300 dark:bg-primary-800 dark:text-primary-50  dark:placeholder-primary-50  dark:hover:border-primary-50
                                         dark:hover:bg-primary-700  dark:hover:text-primary-50 dark:hover:ring-primary-300 dark:hover:focus:fill-white'>

                            </Button>
                        </div>
                    </div>
                </div>
*/

/*
message fixed bottom
    <div className="fixed inset-x-6 bottom-6 z-40 mx-auto w-max">
                <a href="https://tailus.gumroad.com/l/astls-premium" target="_blank" className="flex gap-3 rounded-2xl border border-yellow-900/30 bg-gradient-to-br from-white/50 to-yellow-100 p-3 shadow-2xl shadow-yellow-900/50 backdrop-blur-xl dark:border-white/10 dark:from-gray-800 dark:to-black/70 dark:shadow-primary/50" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-yellow-600 dark:text-yellow-500">
                        <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-sm font-semibold tracking-wide text-yellow-900 dark:text-white"> Upgrade to Premium</span>
                </a>
            </div>

*/
/*
 <div className="p-4 w-full flex flex-wrap h-full">
            <section className="w-2/4">
                <Card
                    isFooterBlurred
                    radius="lg"
                    className="border-none"
                >
                    <Image
                        src={logo}
                        width={'100%'}
                        height={'100%'}
                        alt="Logo Dental Las Higueras"
                    />
                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <p className="text-tiny text-white/80">Available soon.</p>
                        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          Notify me
                        </Button>
                    </CardFooter>
                </Card>
            </section>
            <section className="w-2/4">Info</section>
        </div>

*//*
  <div className="col-span-full col-start-1 md:col-span-10 md:col-start-2">
                        <div className="flex flex-col gap-y-8 sm:gap-y-16">
                            <div className="flex flex-col gap-y-6 sm:gap-y-10 xl:gap-y-12">
                                <div className="w-full grid gap-y-2 justify-center">
                                    <h1 className="title-h1 w-full text-center font-medium">
                                        <div className="title-h1"><div className="sm:hidden">
                                            <p>
     Descubre la excelencia en cuidado dental en
                                            </p>
                                            <p>
       Clínica Dental Las Higueras
                                                <span className="text-primary-1">fácil</span>
                                            </p><p className="text-primary-1">cómodo y en casa</p></div>
                                        <div className="hidden sm:block">Cuidado
                                            <span className="text-primary-1">
        integral de tu salud
                                            </span>
                                            <span className="lg:block">desde la <p className="underline-img inline">comodidad</p> de tu hogar</span></div></div></h1></div><p className="mx-auto max-w-xs text-center sm:hidden">Telemedicina, exámenes, vacunas, cuidados preventivos y más. Atención personalizada cuando y donde quieras.
                                </p><div className="mx-auto hidden w-fit grid-cols-2 gap-y-3 sm:grid"><button type="button" className="group btn z-10 !no-underline hover:bg-primary-5">
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
*/
