import type { Branch } from '@/app/types/domain'

import BranchDowntown from '@/assets/images/branch/centro-la-serena-1.jpg'
import BranchDowntown2 from '@/assets/images/branch/centro-la-serena-2.jpg'
import BranchDowntown3 from '@/assets/images/branch/centro-la-serena-3.jpg'

/**
 * Sucursales de la clínica.
 *
 * Fuente única de verdad: antes esta data estaba triplicada entre
 * location.js (key, label, images, adress, phone), contact.js (adress, phone
 * hardcodeados en el JSX) y shedule.js (key, label, url de Reservo). Se
 * unifica acá agregando `scheduleUrl` con la URL de agendamiento de Reservo.
 */
const branches: Branch[] = [
    {
        key: '2',
        label: 'Centro La Serena',
        images: [
            { image: BranchDowntown },
            { image: BranchDowntown2 },
            { image: BranchDowntown3 }
        ],
        adress: 'Gregorio Cordovez 588, Local 106, Edificio Don Oscar, Centro de La Serena.',
        phone: '+56 9 7552 7994',
        // Línea de la ex sucursal Balmaceda (cerrada), sigue atendiendo y
        // redirige a Centro La Serena — se muestra junto al teléfono principal.
        additionalPhones: ['+56 9 2635 7188'],
        scheduleUrl: 'https://agendamiento.reservo.cl/makereserva/agenda/h0Mp9FV0s0gi199k5a77Efi6i5i3QS'
    }
]

export default branches
