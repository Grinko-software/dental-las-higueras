'use client'
import { useEffect } from 'react'
import { callbackFadeLeft } from '../services'
import EmblaCarousel from '../../../../ui/carousel/EmblaCarousel'
import { Tab, Tabs } from '@nextui-org/react'

import BranchHiguera1 from '@/assets/images/branch/branch_higueras_1.JPG'
import BranchHigueras2 from '@/assets/images/branch/branch_higueras_2.JPG'
import BranchHigueras3 from '@/assets/images/branch/branch_higueras_3.JPG'
import BranchDowntown from '@/assets/images/branch/branch_downtown_1.JPG'
import BranchDowntown2 from '@/assets/images/branch/branch_downtown_2.JPG'
import BranchDowntown3 from '@/assets/images/branch/branch_downtown_3.JPG'
import BranchDowntown4 from '@/assets/images/branch/branch_downtown_4.JPG'

const OPTIONS = {}
const IMAGES_1 = [
    { image: BranchHiguera1 },
    { image: BranchHigueras2 },
    { image: BranchHigueras3 }
]

const IMAGES_2 = [
    { image: BranchDowntown },
    { image: BranchDowntown2 },
    { image: BranchDowntown3 },
    { image: BranchDowntown4 }
]
const ITEMS = [
    {
        key: '1',
        label: 'Las Higueras',
        images: IMAGES_1,
        adress: 'Balmaceda 2195, Local 106 - Portal Las Higueras. La Serena, Chile.',
        phone: '(+56)926357188'
    },
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
        <section id='Ubicacion' className="flex flex-1 flex-col bg-cover gap-6 items items-center justify-center mt-20">
            <div className="scroll-up h-full mx-5 flex flex-col items items-center">
                <div className='fade-in flex flex-row'>
                    <h5 className="text-bold fade-in hover:shadow text-3xl items-start lg:text-6xl font-[600] text-primary-700" >
                        Nuestras sucursales
                    </h5>
                </div>
            </div>

            <Tabs aria-label="Dynamic tabs" items={ITEMS} className='fade-in'>
                {(item) => (
                    <Tab key={item.key} title={item.label} className='w-full flex-1 flex flex-col items-center space-y-3'>
                        <section className='mx-5 fade-in flex flex-col  lg:items-center space-y-3'>
                            <h4 className="font-normal fade-in text-xl  lg:text-2xl text-primary-600">
                                <span className='font-bold'> Dirrección: </span> {item.adress}
                            </h4>
                            <h4 className="font-normal fade-in text-xl  lg:text-2xl text-primary-600">
                                <span className='font-bold'> Contacto: </span> {item.phone}
                            </h4>
                        </section>
                        <section className="scroll-up px-[1rem] lg:px-[13rem] xlg:px-[23rem] h-[20rem] flex-1 fade-in">
                            <EmblaCarousel slides={item.images} options={OPTIONS} />
                        </section>
                    </Tab>
                )}
            </Tabs>
        </section>

    )
}
