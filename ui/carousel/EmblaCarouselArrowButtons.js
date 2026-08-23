'use client'
import React, { useCallback, useEffect, useState } from 'react'

export const usePrevNextButtons = (emblaApi) => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollPrev()
    }, [emblaApi])

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollNext()
    }, [emblaApi])

    const onSelect = useCallback((emblaApi) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onSelect])

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    }
}

// Flecha fina tipo chevron flotando sobre el carousel (círculo blanco
// translúcido con blur), en vez del botón grueso morado genérico anterior.
export const PrevButton = (props) => {
    const { children, ...restProps } = props

    return (
        <button
            className="embla__button embla__button--prev"
            type="button"
            aria-label="Anterior"
            {...restProps}
        >
            <svg className="embla__button__svg" viewBox="0 0 24 24" fill="none">
                <path d="M15 6 9 12l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {children}
        </button>
    )
}

export const NextButton = (props) => {
    const { children, ...restProps } = props

    return (
        <button
            className="embla__button embla__button--next"
            type="button"
            aria-label="Siguiente"
            {...restProps}
        >
            <svg className="embla__button__svg" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {children}
        </button>
    )
}
