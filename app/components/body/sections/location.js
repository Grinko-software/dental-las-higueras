'use client'
import { useEffect } from 'react'
import { callbackFadeLeft } from '../services'
import EmblaCarousel from '../../../../ui/carousel/EmblaCarousel'
import { Tab, Tabs } from '@nextui-org/react'

import BranchDowntown from '@/assets/images/branch/centro-la-serena-1.jpg'
import BranchDowntown2 from '@/assets/images/branch/centro-la-serena-2.jpg'
import BranchDowntown3 from '@/assets/images/branch/centro-la-serena-3.jpg'
const OPTIONS = {}

const IMAGES_2 = [
    { image: BranchDowntown },
    { image: BranchDowntown2 },
    { image: BranchDowntown3 }
]
const ITEMS = [
    {
        key: '2',
        label: 'Centro La Serena',
        images: IMAGES_2,
        adress: 'Gregorio Cordovez 588, Local 106, Edificio Don Oscar, Centro de La Serena.',
        phone: '(+56)975527994'
    }
]
export default function Location () {
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFadeLeft)
        const targets = document.querySelectorAll('.scroll-left')
        targets.forEach(function (target) {
            target.classList.add('opacity-0')
            observer.observe(target)
        })
    }, [])
    return (
        <section id='Ubicacion' className="flex flex-1 flex-col bg-cover gap-6 items items-center justify-center mt-20 fade-in ">
            <div className="scroll-up h-full mx-5 flex flex-col items items-center">
                <div className='fade-in flex flex-row'>
                    <h5 className="text-bold fade-in hover:shadow text-3xl items-start lg:text-6xl font-[600] text-primary-700" >
                        Nuestras sucursales
                    </h5>
                </div>
            </div>

            <Tabs
                aria-label="Dynamic tabs"
                items={ITEMS}
                classNames={{
                    cursor: 'w-full bg-[#672881]',
                    tabContent: 'group-data-[selected=true]:text-primary-50 font-normal'
                }}
            >
                {(item) => (
                    <Tab key={item.key} title={item.label} className='w-full flex-1'>
                        <section className='mx-5  flex flex-col  lg:items-center space-y-3'>
                            <h4 className="font-normal text-xl  lg:text-2xl text-primary-600">
                                <span className='font-bold'> Dirección: </span> {item.adress}
                            </h4>
                            <h4 className="font-normal text-xl  lg:text-2xl text-primary-600">
                                <span className='font-bold'> Contacto: </span> {item.phone}
                            </h4>
                        </section>
                        <section className="scroll-up px-[1rem] lg:px-[5rem]   xlg:px-[10%] flex-1 py-10 ">
                            <EmblaCarousel slides={item.images} options={OPTIONS} />
                        </section>
                    </Tab>
                )}
            </Tabs>
        </section>

    )
}
