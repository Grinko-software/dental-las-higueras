'use client'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'
export function Providers ({ children }) {
    return (
        <ThemeProvider attribute='c'>
            <NextUIProvider>
                {children}
            </NextUIProvider>
        </ThemeProvider>
    )
}
