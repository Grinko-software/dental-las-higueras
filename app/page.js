/* eslint-disable no-unused-vars */
import Header from './components/header/header'
import Body from './components/body/body'
import Footer from './components/footer/footer'
import Head from 'next/head'
export default function Home () {
    return (
        <div className='min-h-screen flex flex-col'>
            <Head>
                <meta name="google-site-verification" content="KgShFYNgKOm6QKQ5eNLxJwNjXxsoonzqn8CWWCtRvuo" />
                <noscript>
                    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5FJWB7K9"
                        height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}>
                    </iframe>
                </noscript>
            </Head>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}
