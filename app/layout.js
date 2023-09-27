import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dental Las Higueras',
  description: 'Dental Las Higueras'
}

export default function RootLayout ({ children }) {
  return (
  <html lang='en' suppressHydrationWarning>
            <head>
                <title>Dental Las Higueras</title>
            </head>
            <body className={inter.className + ' h-screen flex'}>
            <Providers>
                    {children}
                </Providers>
            </body>
        </html>
  )
}
