/* eslint-disable new-cap */
/* eslint-disable func-call-spacing */
/* eslint-disable camelcase */
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
/*
 <a className="zl-facility-url" href="https://www.doctoralia.cl/clinicas/dental-las-higueras" rel="nofollow" data-zlw-facility="dental-las-higueras" data-zlw-type="facility-big" data-zlw-saas-only="true">
             Dental Las Higueras
            </a>
 <script>
                {
                    (!function ($_x, _s, id) {
                        let js
                        const fjs = $_x.getElementsByTagName(_s)[0]
                        if (!$_x.getElementById(id)) {
                            js = $_x.createElement(_s)
                            js.id = id
                            js.src = '//platform.docplanner.com/js/widget.js'
                            fjs.parentNode.insertBefore(js, fjs)
                        }
                    })
                }
                {  {
                    (document, 'script', 'zl-widget-s')
                }
                </script>
*/
