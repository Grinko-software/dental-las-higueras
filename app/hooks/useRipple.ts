import { useCallback } from 'react'
import type { MouseEvent } from 'react'

/**
 * Devuelve un handler de click que crea un círculo de "ripple" (Material
 * Design) expandiéndose desde el punto exacto donde se hizo click.
 *
 * Uso: <button className="btn-ripple-host" onClick={useRipple()}>
 * El elemento debe tener la clase `btn-ripple-host` (position: relative +
 * overflow: hidden, definida en globals.css) para que el círculo quede
 * contenido dentro de sus bordes.
 */
export default function useRipple (): (event: MouseEvent<HTMLElement>) => void {
    return useCallback((event: MouseEvent<HTMLElement>) => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        const target = event.currentTarget
        const rect = target.getBoundingClientRect()
        const size = Math.max(rect.width, rect.height) * 1.4
        const span = document.createElement('span')
        span.className = 'ripple'
        span.style.width = `${size}px`
        span.style.height = `${size}px`
        span.style.left = `${event.clientX - rect.left - size / 2}px`
        span.style.top = `${event.clientY - rect.top - size / 2}px`
        target.appendChild(span)
        span.addEventListener('animationend', () => span.remove())
    }, [])
}
