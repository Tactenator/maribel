import { useRef, useContext } from 'react'
import Hours from '../images/hours.svg'
import Telephone from '../images/telephone.svg';
import Mail from '../images/mail.svg';
import ContactDiv from '../components/contact';
import { Context } from '../Context';


const Contact = () => {

    const formRef = useRef()
    const thanksRef = useRef()
    const { language, setLanguage } = useContext(Context)

    function handleSubmit (e) {
        e.preventDefault()

        let formData = new FormData(formRef.current);
        let newBody = new URLSearchParams(formData).toString()
        console.log(newBody)

        fetch("../../public/contact-form.html", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
        .then(() => console.log('success'))
        .then(() => {
            formRef.current.style.display = 'none';
            thanksRef.current.style.display = 'flex';
        })
        .catch((error) => alert(error));
    }
    return ( 
        <>
            <div id="servicesBanner" className="p-16 bg-sky-400/50 text-white font-Monarda text-4xl text-center">
                <h1>{language === "English" ? "Contact Us" : "Contacta con Nosotros"}</h1>
            </div>
            <div id="contactContainer">
                <div id="info-container" className="flex flex-col md:flex-row md:justify-evenly py-10 bg-stone-100 font-Afterglow">
                    <div id="info" className="text-center md:text-left mb-10 md:mb-0">
                        <img src={Telephone} alt="A telephone"  className="mx-auto"></img>
                        <div className='ml-1'>
                            <h1 className='text-2xl my-5 font-bold'>{language === "English" ? "Phone" : "Teléfono"}</h1>
                            <a href="tel:4029052642" className="text-2xl font-Afterglow hover:underline">402-905-2642</a>
                        </div>
                    </div>
                    <div id="info" className="text-center md:text-left mb-10 md:mb-0">
                        <img src={Mail} alt="An envelope for sending mail" className="mx-auto"></img>
                        <div className='ml-1'>
                            <h1 className='text-2xl my-5 font-bold'>{language === "English" ? "Email" : "Correo electrónico"}</h1>
                            <span className='text-2xl'>cleaning1now@gmail.com</span>
                        </div>
                    </div>
                    <div id="info" className="text-center md:text-left mb-10 md:mb-0">
                        <img src={Hours} alt="A clock"  className="mx-auto"></img>
                        <div className='ml-1'>
                            <h1 className='text-2xl my-5 font-bold'>{language === "English" ? "Horas" : ""}Hours</h1>
                            <div className="text-2xl">{language === "English" ? "Weekdays" : "Días Laborables"}: 8AM - 5PM</div>
                            <div className="text-2xl">{language === "English" ? "Weekends" : "Fines de Semana"}: 8AM - 5PM</div>
                        </div>
                    </div>
                </div>
                <h1 className="text-center text-4xl font-Monarda my-20">{language === "English" ? "Contact Us Today!" : "¡Póngase en contacto con nosotros hoy!"}</h1>
                <ContactDiv />
                <div ref={thanksRef} className='text-black font-Afterglow text-center h-full flex flex-col justify-center gap-6 pb-20' style={{display: 'none'}}>
                    <h1 className='text-white font-Monarda text-4xl'>{language === "English" ? "Thank you!" : "¡Gracias!"}</h1>
                    <p className='text-3xl'>{language === "English" ? "We have recieved your message! Thank you for your interest in Maribel's Cleaning Service!" : "¡Hemos recibido tu mensaje! ¡Gracias por su interés en el Servicio de Limpieza de Maribel!"}</p>
                    <p className='text-3xl'>{language === "English" ? "We will reply to your message as soon as we can." : "Responderemos a su mensaje tan pronto como podamos."} </p>
                    <p className='text-3xl'>{language === "English" ? "Thank you!" : "¡Gracias!"}</p>
                </div>
            </div>
        </> 
    );
}
 
export default Contact;