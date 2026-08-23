import type { Specialty } from '@/app/types/domain'

import Speciality1 from '@/assets/images/speciality/odontologia-general.jpg'
import Speciality2 from '@/assets/images/speciality/ortodoncia.jpg'
import Speciality3 from '@/assets/images/speciality/periodoncia.jpg'
import Speciality4 from '@/assets/images/speciality/endodoncia.jpg'
import Speciality5 from '@/assets/images/speciality/cirugia-implantes.jpg'
import Speciality6 from '@/assets/images/speciality/estetica-dental.jpg'

/**
 * Especialidades odontológicas mostradas en la sección "Quiénes somos".
 */
const specialties: Specialty[] = [
    { name: 'Odontología General', image: Speciality1 },
    { name: 'Ortodoncia', image: Speciality2 },
    { name: 'Periodoncia', image: Speciality3 },
    { name: 'Endodoncia', image: Speciality4 },
    { name: 'Cirugías Implantes', image: Speciality5 },
    { name: 'Estética dental', image: Speciality6 }
]

export default specialties
