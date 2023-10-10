import { useState, useEffect } from 'react'

const names = [
    'Empatia', 'Innovación', 'Calidad'
]

export default function ShuffleText () {
    const [currentName, setCurrentName] = useState(names[0])

    function setRandomName () {
        const index = Math.floor(Math.random() * names.length)
        const newName = names[index]
        if (newName === currentName) { setRandomName() } else { setCurrentName(newName) }
    }

    useEffect(() => {
        setTimeout(() => {
            setRandomName()
        }, 2000)
    }, [currentName])

    return (
        <div className='flex flex-row gap-2 text-justify'>
            <h1 className="text-bold  text-2xl lg:text-7xl font-[600]" >Atendiendo a nuestros pacientes con</h1>
            <h1 className='text-bold  text-2xl lg:text-7xl font-[600] text-primary-600'>
                {currentName.toUpperCase()}
            </h1>
        </div>
    )
}
