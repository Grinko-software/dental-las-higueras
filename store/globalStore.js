import { create } from 'zustand'

const useGlobalStore = create(
    (set) => ({
        section: 'Inicio',
        setSection: (value) => set({ section: value })
    })

)

export default useGlobalStore
