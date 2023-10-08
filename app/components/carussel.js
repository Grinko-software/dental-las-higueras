import Carousel from 'react-spring-3d-carousel'
import { useState, useEffect } from 'react'
import { config } from 'react-spring'

export default function Carroussel (props) {
    const table = props.cards.map((element, index) => {
        return { ...element, onClick: () => setGoToSlide(index) }
    })

    const [offsetRadius, setOffsetRadius] = useState(2)
    const [showArrows, setShowArrows] = useState(false)
    const [reverse, setReverse] = useState(false)
    const [goToSlide, setGoToSlide] = useState(1)
    const [cards] = useState(table)

    useEffect(() => {
        setOffsetRadius(props.offset)
        setShowArrows(props.showArrows)
    }, [props.offset, props.showArrows])

    useEffect(() => {
        setInterval(() => {
            let newGoToSlide
            if (goToSlide != null) {
                if ((goToSlide >= props.cards) || (reverse)) {
                    newGoToSlide = goToSlide - 1
                    setReverse(true)
                } else {
                    setReverse(false)
                    newGoToSlide = goToSlide + 1
                }
                setGoToSlide(newGoToSlide)
            }
            console.log(goToSlide)
        }, 5000)
    }, [goToSlide])

    return (
        <div
            style={{ width: props.width, height: props.height, margin: props.margin }}
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
