import type { StaticImageData } from 'next/image'

/**
 * Tipos de dominio compartidos entre componentes.
 * Centralizados aquí para que todo el refactor a TypeScript importe
 * estas interfaces en lugar de redefinirlas en cada archivo.
 */

/**
 * Profesional del equipo clínico mostrado en la sección de profesionales.
 */
export interface Professional {
  srcRute: StaticImageData | string
  name: string
  specialty: string
  specialist: string
  university: string
  experience: string[]
}

/**
 * Imagen individual dentro de la galería de una sucursal.
 */
export interface BranchImage {
  image: StaticImageData | string
}

/**
 * Sucursal mostrada en la sección de ubicación.
 */
export interface Branch {
  key: string
  label: string
  images: BranchImage[]
  adress: string
  phone: string
  /**
   * Líneas telefónicas adicionales que siguen atendiendo esta sucursal
   * aunque no correspondan a su número principal (ej: la línea de la
   * antigua sucursal Balmaceda, que se redirige acá tras su cierre).
   */
  additionalPhones?: string[]
  scheduleUrl?: string
}

/**
 * Especialidad odontológica mostrada en la sección de servicios.
 */
export interface Specialty {
  name: string
  image: StaticImageData | string
}
