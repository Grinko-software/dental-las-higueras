import './globals.css'
import localFont from 'next/font/local'
import { Providers } from './providers'
const myFont = localFont({ src: '../fonts/nunitoSans.ttf' })
/* const inter = Inter({ subsets: ['latin'], weight: '300' }) */
export const metadata = {
    title: 'Dental Las Higueras',
    description: 'Dental Las Higueras'
}

export default function RootLayout ({ children }) {
    return (
        <html lang='en' suppressHydrationWarning>
            <head>
                <title>dental las higueras</title>
                <meta name="google-site-verification" content="KgShFYNgKOm6QKQ5eNLxJwNjXxsoonzqn8CWWCtRvuo" />

            </head>
            {/* className={inter.className + ''} */}
            <body style={myFont.style}>
                <Providers>
                    {children}
                </Providers>

            </body>
        </html>
    )
}
