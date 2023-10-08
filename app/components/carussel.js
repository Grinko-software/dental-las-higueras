import Carousel from 'react-spring-3d-carousel'
import { useState, useEffect } from 'react'
import { config } from 'react-spring'

export default function Carroussel (props) {
    const table = props.cards.map((element, index) => {
        return { ...element, onClick: () => setGoToSlide(index) }
    })

    const [offsetRadius, setOffsetRadius] = useState(2)
    const [showArrows, setShowArrows] = useState(false)
    const [goToSlide, setGoToSlide] = useState(1)
    const [cards] = useState(table)
    /*     const [reverse, setReverse] = useState(false) */

    useEffect(() => {
        setOffsetRadius(props.offset)
        setShowArrows(props.showArrows)
    }, [props.offset, props.showArrows])

    useEffect(() => {
        setInterval(() => {
            setGoToSlide(goToSlide + 1)
            /* let newGoToSlide
            if (goToSlide != null) {
                if (goToSlide >= props.cards.length) {
                    setReverse(true)
                } else {
                    setReverse(false)
                }
                if (reverse) {
                    newGoToSlide = goToSlide - 1
                } else {
                    newGoToSlide = goToSlide + 1
                }
                setGoToSlide(newGoToSlide)
            }
            console.log(goToSlide) */
        }, 10000)
    }, [goToSlide])

    return (
        <div
            className ="shadow-xl h-[100%] w-[100%]"
        >
            <Carousel
                slides={cards}
                goToSlide={goToSlide}
                offsetRadius={offsetRadius}
                showNavigation={showArrows}
                animationConfig={config.gentle}
            />
        </div>
    )
}
