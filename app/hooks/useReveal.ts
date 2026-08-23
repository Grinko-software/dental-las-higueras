import { useEffect } from 'react'

/**
 * Activa el sistema de scroll-reveal fallback-seguro definido en globals.css
 * (clases .reveal, .reveal-left, .reveal-right, .reveal-scale).
 *
 * Reemplaza al antiguo useScrollReveal, que agregaba 'opacity-0' directo al
 * elemento vía classList — si el IntersectionObserver no llegaba a disparar
 * a tiempo (timing de hidratación, scroll rápido), el contenido quedaba
 * invisible para siempre. Ese fue el bug crítico #1 encontrado en la
 * auditoría del sitio original.
 *
 * Patrón correcto: los elementos con clase .reveal* ya son visibles por
 * default en CSS (opacity: 1). Este hook solo agrega 'js-armed' (que activa
 * el estado oculto inicial vía CSS) y observa cuándo agregar 'is-visible'.
 * Si el hook nunca corre (JS deshabilitado, error, SSR sin hidratar), el
 * contenido sigue siendo visible — nunca al revés.
 */
export default function useReveal (rootSelector?: string): void {
    useEffect(() => {
        const root = rootSelector ? document.querySelector(rootSelector) : document
        if (!root) return undefined

        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (prefersReduced || !('IntersectionObserver' in window)) return undefined

        const items = root.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
        items.forEach((el) => el.classList.add('js-armed'))

        // Stagger: dentro de un grid, cada tarjeta aparece con un pequeño delay
        // incremental respecto a la anterior en vez de todas a la vez.
        const staggerGroups = root.querySelectorAll('[data-stagger-group]')
        staggerGroups.forEach((group) => {
            const children = Array.from(group.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale'))
            children.forEach((el, i) => {
                (el as HTMLElement).style.transitionDelay = `${Math.min(i, 7) * 60}ms`
            })
        })

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible')
                    observer.unobserve(entry.target)
                }
            })
        }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' })

        items.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [rootSelector])
}
