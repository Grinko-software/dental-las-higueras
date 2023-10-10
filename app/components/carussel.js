import React, { useState, useEffect } from 'react'
import { Carousel } from 'primereact/carousel'
import ProfesionalsCard from './card'

export default function Carroussel ({ items }) {
    const [itemsCarousel, setItemsCarousel] = useState([])
    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ]

    useEffect(() => {
        if (items) {
            setItemsCarousel(items)
        }
    }, [])

    const TemplateItem = (item) => {
        return (
            <div key={1} className="py-5 px-3  flex justify-center">
                <ProfesionalsCard alt="0" Profesional={item}></ProfesionalsCard>
            </div>
        )
    }

    return (
        <div className="w-full px-40">
            <Carousel value={itemsCarousel}
                numScroll={1}
                numVisible={3}
                circular
                showNavigators={true}
                showIndicators={true}
                responsiveOptions={responsiveOptions}
                autoplayInterval={3000}
                itemTemplate={TemplateItem}
            />
        </div>
    )
}
