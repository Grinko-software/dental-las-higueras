import { Card, CardBody } from '@nextui-org/react'

const ClockIcon = ({ className }) => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
        className={'bi bi-watch ' + className} viewBox="0 0 16 16">
        <path d="M8.5 5a.5.5 0 0 0-1 0v2.5H6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V5z"/>
        <path d="M5.667 16C4.747 16 4 15.254 4 14.333v-1.86A5.985 5.985 0 0 1 2 8c0-1.777.772-3.374 2-4.472V1.667C4 .747 4.746 0 5.667 0h4.666C11.253 0 12 .746 12 1.667v1.86a5.99 5.99 0 0 1 1.918 3.48.502.502 0 0 1 .582.493v1a.5.5 0 0 1-.582.493A5.99 5.99 0 0 1 12 12.473v1.86c0 .92-.746 1.667-1.667 1.667H5.667zM13 8A5 5 0 1 0 3 8a5 5 0 0 0 10 0z"/>
    </svg>
}

const LocationIcon = ({ className }) => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
        className={'bi bi-geo-alt-fill ' + className} viewBox="0 0 16 16">
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
    </svg>
}

const TelephoneIcon = ({ className, size }) => {
    return <svg xmlns="http://www.w3.org/2000/svg" width={size || '16'} height={size || '16'} fill="currentColor"
        className={'bi bi-telephone-fill' + className} viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
    </svg>
}

const CardItem = ({ icon, title, children }) => {
    return <section className='h-full'>
        <Card className='h-full max-w-[30rem]'>
            <CardBody className='bg-primary-200 shadow-2xl py-10'>
                <section className='flex flex-col w-full h-full items-center p-5 space-y-5'>
                    <div className='w-full flex flex-col items-center'>
                        <div>
                            <h4 className='text-4xl font-sans font-bold text-primary-600'>{title}</h4>
                        </div>
                        <div className='m-10 font-bold text-primary-600'>
                            {icon}
                        </div>
                    </div>
                    <section className='text-xl font-sans font-bold text-primary-800'>
                        {children}
                    </section>
                </section>
            </CardBody>
        </Card>
    </section>
}

export default function Contact () {
    return (
        <section id='Contacto' className="flex flex-1 flex-col min-h-[50rem] bg-cover  items items-center justify-center bg-[url('https://www.clinicatrei.com/wp-content/uploads/2022/10/dientes-desgastados.jpg')]">
            <div className="gap-5 flex flex-wrap flex-row h-full items p-5 mx-20 opacity-75">
                <div className='flex-1 max-h-full'>
                    <CardItem
                        title={'CONTACTO'}
                        icon={<TelephoneIcon size={64} className={'w-20 h-20'}/>}>
                        <p>{'(+56)926357188'}</p>
                        <p>{'(+56)975527994'}</p>
                    </CardItem>
                </div>
                <div className='flex-1 max-h-full'>
                    <CardItem
                        title={'HORARIO'}
                        icon={<ClockIcon className={'w-20 h-20'}/>}>
                        <p>Lunes a Viernes.</p>
                        <p>09:00 a 19:00 hrs.</p>
                    </CardItem>
                </div>
                <div className='flex-1 max-h-full'>
                    <CardItem
                        title={'UBICACIÓN'}
                        icon={<LocationIcon className={'w-20 h-20'}/>}>
                        Balmaceda 2195, Local 106 - Portal Las Higueras. La Serena, Chile.
                    </CardItem>
                </div>
            </div>
        </section>

    )
}
