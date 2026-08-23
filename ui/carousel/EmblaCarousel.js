'use client'
import React, { useCallback, useEffect, useRef } from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import './css/embla.css'
import Image from 'next/image'

// NOTA: no hay plugin oficial de autoplay (embla-carousel-autoplay) instalado
// en el proyecto. En vez de agregar una dependencia nueva, el autoplay se
// resuelve con un setInterval liviano que llama scrollNext(). Se pausa al
// pasar el mouse para no interrumpir la navegación manual del usuario.
const useEmblaAutoplay = (emblaApi, intervalMs) => {
    const timerRef = useRef(null)

    const stop = useCallback(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current)
            timerRef.current = null
        }
    }, [])

    const start = useCallback(() => {
        if (!emblaApi || !intervalMs) return
        stop()
        timerRef.current = setInterval(() => {
            if (emblaApi.canScrollNext()) {
                emblaApi.scrollNext()
            } else {
                emblaApi.scrollTo(0)
            }
        }, intervalMs)
    }, [emblaApi, intervalMs, stop])

    useEffect(() => {
        if (!emblaApi || !intervalMs) return undefined
        start()
        return stop
    }, [emblaApi, intervalMs, start, stop])

    return { pause: stop, resume: start }
}

const defaultRenderSlide = (item) => (
    <div className="embla__slide__number">
        <Image
            src={item.image}
            alt={item.alt || 'Foto de la sucursal'}
            className='rounded-3xl shadow-lg h-full w-full object-cover object-center'
        />
    </div>
)

const EmblaCarousel = (props) => {
    const { slides, options, renderSlide, className, autoplayInterval } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const { pause, resume } = useEmblaAutoplay(emblaApi, autoplayInterval)

    const renderItem = renderSlide || defaultRenderSlide

    return (
        <section
            className={'embla'.concat(className ? ` ${className}` : '')}
            onMouseEnter={pause}
            onMouseLeave={resume}
        >
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((item, index) => (
                        <div className="embla__slide" key={index}>
                            {renderItem(item, index)}
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>

                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel
