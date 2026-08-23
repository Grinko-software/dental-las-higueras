import { useEffect } from 'react'

/**
 * Aplica inclinación 3D sutil que sigue el cursor a todos los elementos
 * con clase .tilt dentro del documento (o de un contenedor opcional).
 *
 * Solo se activa en dispositivos con mouse real (hover: hover) y respeta
 * prefers-reduced-motion. El nivel de inclinación se lee de data-tilt-max
 * en cada elemento (grados, default 6).
 */
export default function useTilt (rootSelector?: string): void {
    useEffect(() => {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        const hasHover = window.matchMedia('(hover: hover)').matches
        if (prefersReduced || !hasHover) return undefined

        const root = rootSelector ? document.querySelector(rootSelector) : document
        if (!root) return undefined

        const els = Array.from(root.querySelectorAll<HTMLElement>('.tilt'))
        const cleanups: Array<() => void> = []

        els.forEach((el) => {
            const maxTilt = parseFloat(el.dataset.tiltMax ?? '6')

            const onMouseMove = (e: MouseEvent) => {
                const rect = el.getBoundingClientRect()
                const px = (e.clientX - rect.left) / rect.width - 0.5
                const py = (e.clientY - rect.top) / rect.height - 0.5
                el.style.transform = `perspective(900px) rotateX(${-py * maxTilt}deg) rotateY(${px * maxTilt}deg) translateY(-4px)`
            }
            const onMouseLeave = () => {
                el.style.transform = ''
            }

            el.addEventListener('mousemove', onMouseMove)
            el.addEventListener('mouseleave', onMouseLeave)
            cleanups.push(() => {
                el.removeEventListener('mousemove', onMouseMove)
                el.removeEventListener('mouseleave', onMouseLeave)
            })
        })

        return () => cleanups.forEach((fn) => fn())
    }, [rootSelector])
}
