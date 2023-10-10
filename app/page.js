/* eslint-disable no-unused-vars */
import Header from './components/header/header'
import Body from './components/body/body'
import Footer from './components/footer/footer'
export default function Home () {
    return (
        <div className='min-h-screen flex flex-col'>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}
