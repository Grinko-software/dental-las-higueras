// Fila de información con ícono en círculo, etiqueta y valor (ej: teléfono, horario, dirección).
export default function InfoCard ({ icon, label, children }) {
    return (
        <div className='flex items-start gap-4 border-b border-primary-300/50 py-4 last:border-b-0'>
            <div className='flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary-200 text-primary-600'>
                {icon}
            </div>
            <div>
                <div className='text-xs font-bold uppercase tracking-wider text-primary-400'>{label}</div>
                <div className='mt-1 text-base font-[500] text-primary-700'>{children}</div>
            </div>
        </div>
    )
}
