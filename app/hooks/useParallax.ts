import { useEffect } from 'react'

/**
 * Aplica un desplazamiento vertical leve (parallax) a los elementos con
 * atributo data-parallax="<velocidad>" a medida que el usuario scrollea.
 *
 * El desplazamiento está clampeado a ±60px: sin este límite, un elemento
 * lejos del centro del viewport (por ejemplo tras varios miles de píxeles
 * de scroll) puede recibir un offset descontrolado y salirse de su marco
 * visualmente — bug real encontrado y corregido durante el diseño de esta
 * misma función. También se ignoran elementos fuera del rango
 * [-vh, vh*2] para no gastar cálculo en contenido lejos de la vista.
 *
 * Cada elemento con data-parallax debe tener un padre con overflow:hidden
 * y estar escalado (ej. scale(1.15) vía CSS) para que el desplazamiento
 * nunca revele bordes vacíos.
 */
export default function useParallax (rootSelector?: string): void {
    useEffect(() => {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (prefersReduced) return undefined

        const root = rootSelector ? document.querySelector(rootSelector) : document
        if (!root) return undefined

        const els = Array.from(root.querySelectorAll<HTMLElement>('[data-parallax]'))
        if (!els.length) return undefined

        let ticking = false

        const update = () => {
            const vh = window.innerHeight
            els.forEach((el) => {
                const rect = el.getBoundingClientRect()
                if (rect.bottom < -vh || rect.top > vh * 2) return
                const speed = parseFloat(el.dataset.parallax ?? '0.15')
                const centerOffset = (rect.top + rect.height / 2) - vh / 2
                const offset = Math.max(-60, Math.min(60, centerOffset * -speed))
                // Solo se escribe la custom property --parallax-y, nunca
                // `transform` directo: un transform inline reemplazaría por
                // completo el `scale(...)` que ya viene de la clase
                // Tailwind del elemento (globals.css combina ambos).
                el.style.setProperty('--parallax-y', `${offset}px`)
            })
            ticking = false
        }

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(update)
                ticking = true
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll)
        update()

        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
        }
    }, [rootSelector])
}
