/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.clinicadelvalle.es',
                port: '',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'doctoraminerva.es',
                port: '',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'clinicajuliansaiz.com',
                port: '',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'glidewelldental.com',
                port: '',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'www.clinicatrei.com',
                port: '',
                pathname: '**'
            }

        ]
    }
}

module.exports = nextConfig
