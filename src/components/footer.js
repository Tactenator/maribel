import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { Context } from '../Context'; 

const Footer = () => {
    const { language, setLanguage } = useContext(Context)
    return ( 
        <footer className="relative flex flex-col md:flex-row justify-evenly bg-sky-500 pt-10 pb-32 px-20 text-white font-Afterglow text-2xl">
            <div>
                <h1 className='mb-5 font-bold font-Monarda text-3xl'>Maribel's Cleaning Service</h1>
                <ul className="flex flex-col gap-2 ml-5">
                    <Link className="text-2xl font-Afterglow transition-all duration-200 hover:underline" to="/">
                        {language === "English" ? "Home" : "Inicio"}
                    </Link>
                    <Link className="text-2xl font-Afterglow transition-all duration-200 hover:underline" to="/about">
                        {language === "English" ? "About" : "Sobre nosotros"}
                    </Link>
                    <Link className="text-2xl font-Afterglow transition-all duration-200 hover:underline" to="/services">
                        {language === "English" ? "Services" : "Servicios"}
                    </Link>
                    <Link className="text-2xl font-Afterglow transition-all duration-200 hover:underline" to="/contact">
                        {language === "English" ? "Contact" : "Contacto"}
                    </Link>
                </ul>
            </div>
            <div className="flex flex-col md:flex-row pt-10 md:pt-0 justify-evenly gap-16">
                <div>
                    <h2 className='font-bold text-2xl mb-10 underline'>{language === "English" ? "Hours" : "Horas"}</h2>
                    <ul>
                        <li className="mb-5">{language === "English" ? "Weekdays" : "Días Laborables"}: 8AM - 5PM</li>
                        <li className="">{language === "English" ? "Weekends" : "Fines de Semana"}: 8AM - 5PM</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold text-2xl mb-10 underline'>
                        {language === "English" ? "Contact Information" : "Información del Contacto"}
                    </h2>
                    <ul>
                        <li className='mb-5'>{language === "English" ? "Phone" : "Teléfono"}: <a href="tel:4029052642" className="font-Afterglow hover:underline">402-905-2642</a></li>
                        <li>{language === "English" ? "Email" : "Correo Electronico"}: <a href='mailto: cleaning1now@gmail.com' className='font-Afterglow hover:underline'>cleaning1now@gmail.com</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold text-2xl mb-10 underline'>{language === "English" ? "Payment Accepted" : "Pago aceptado"}*</h2>
                    <ul>
                        <li className="mb-5">{language === "English" ? "Cash" : "Dinero en efectivo"}</li>
                        <li className="mb-5">{language === "English" ? "Checks" : "Cheques"}</li>
                        <li className="mb-5">Venmo</li>
                        <li className='text-sm'>{language === "English" ? "*No Apple Pay at this time" : "*No Apple Pay en este momento"}</li>
                    </ul>
                </div>
            </div>
            <div className='absolute bottom-0 mb-5 text-white text-lg text-center left-0 right-0'>Powered by <a className="underline" href="https://www.paleblackdotllc.com">Pale Black Dot LLC</a>. All Rights Reserved &copy;2023
            </div>
        </footer>
     );
}
 
export default Footer;