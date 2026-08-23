import { useEffect, useState } from 'react'

/**
 * Decide si el header debe mostrarse en modo "claro" (texto morado, para
 * cuando el fondo detrás del header es claro) u "oscuro" (texto blanco,
 * para cuando un bloque de color sólido —cards moradas, fotos oscuras—
 * queda justo debajo del header al scrollear).
 *
 * Por qué NO se mide el pixel real (canvas/getImageData): sería más lento,
 * tiene problemas de CORS con imágenes de otro origen, y no hace falta —
 * en este sitio los bloques "oscuros" son un conjunto finito y conocido de
 * antemano (la card de Agendar, las specialty-cards). Cada uno se marca en
 * el JSX con data-header-contrast="dark"; este hook solo vigila con
 * IntersectionObserver cuál de esos bloques está cruzando la franja de
 * altura del header en cada momento.
 *
 * Fail-safe: si no hay bloques marcados o el observer no corre, el header
 * queda en modo claro (el default de casi toda la superficie del sitio),
 * nunca en un estado indefinido.
 */
export default function useHeaderContrast (headerHeightPx: number): 'light' | 'dark' {
    const [contrast, setContrast] = useState<'light' | 'dark'>('light')

    useEffect(() => {
        const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-header-contrast="dark"]'))
        if (!targets.length || !('IntersectionObserver' in window)) return undefined

        // Cada elemento observado dispara su propio entry cuando su estado
        // de intersección cambia. Se mantiene el set de los que están
        // intersectando AHORA MISMO — "oscuro" mientras ese set no esté
        // vacío, sin importar cuál de los targets sea.
        const intersecting = new Set<Element>()

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        intersecting.add(entry.target)
                    } else {
                        intersecting.delete(entry.target)
                    }
                })
                setContrast(intersecting.size > 0 ? 'dark' : 'light')
            },
            // El "root" de referencia es el viewport; rootMargin negativo
            // abajo recorta el área de intersección relevante a solo la
            // franja pegada arriba con la altura del header.
            { threshold: 0, rootMargin: `0px 0px -${Math.max(window.innerHeight - headerHeightPx, 0)}px 0px` }
        )

        targets.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [headerHeightPx])

    return contrast
}
