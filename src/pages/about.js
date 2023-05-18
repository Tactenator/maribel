import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Blurb from '../components/blurb';
import ContactDiv from '../components/contact';
import Main from '../images/about1.jpg';
import Left from '../images/about2.jpg';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Context } from '../Context';
import { useContext } from 'react';


const About = () => {
    const { language, setLanguage } = useContext(Context);
    return ( 
        <>
            <div id="aboutusBanner" className="py-16  bg-sky-400/50 text-white text-center font-Monarda text-4xl">
                <h1>{language === "English" ? "About Us" : "Sobre Nosotros"}</h1>
            </div>
            <div id="aboutUsContainer" className="flex flex-col md:flex-row justify-center p-20 ml-0 md:ml-20 gap-20">
                <div id="photoContainer" className='grid grid-cols-2 gap-4'>
                    <img src={Main} alt="Woman throwing a bed sheet" className='col-span-2'></img>
                    <img src={Left} alt="Woman cleaning window while wearing a mask"></img>
                    <img src={Left} alt="A person vacuuming up a large amount of confetti"></img>
                </div>
                <div id="aboutInfo-container" className='md:w-4/5'>
                    <h1 className='text-4xl font-Monarda font-bold mb-16'>{language === "English" ? "Who We Are" : "Quien somos"}</h1>
                    <h2 className='text-2xl font-Afterglow w-4/5'>
                        {language === "English" ? "Maribel's Cleaning Services is a locally owned and operated cleaning service for the greater Omaha area. We pride ourselves on providing quality work, excellent customer service and attentiveness to details. Our focus is to really listen to our clients, understand their needs and provide exceptional service that will leave you feeling confident that a job will be well done." 
                        : "Los servicios de limpieza de Maribel son un servicio de limpieza operado y de propiedad local para el área metropolitana de Omaha. Nos enorgullecemos de brindar un trabajo de calidad, excelente servicio al cliente y atención a los detalles. Nuestro enfoque es escuchar realmente a nuestros clientes, comprender sus necesidades y brindar un servicio excepcional que lo hará sentir seguro de que un trabajo estará bien hecho."}
                    </h2>
                    <h2 className='text-2xl font-Afterglow w-3/4 my-5'>
                        {language === "English" ? "Our team of cleaners is always ready and willing to get the job done. Your complete satisfaction is our guarantee. We hope to hear from you soon! " : 
                        "Nuestro equipo de limpiadores siempre está listo y dispuesto a hacer el trabajo. Su completa satisfacción es nuestra garantía. Esperamos saber de usted pronto!"}
                    </h2>
                    <h2 className='text-3xl font-Afterglow w-3/4 font-bold mb-5'>{language === "English" ? "Our Mission" : "Nuestro Misión"}:</h2>
                    <ul className=''>
                        <li className='text-2xl'><FontAwesomeIcon className="text-sky-500" icon={faCheck} /> {language === "English" ? "Focus on your needs" : "Enfócamos en sus necesidades"}</li>
                        <li className='text-2xl'><FontAwesomeIcon className="text-sky-500" icon={faCheck} /> {language === "English" ? "Provide high quality and consistent services" : "Proporcionar servicios consistentes y de alta calidad."}</li>
                        <li className='text-2xl'><FontAwesomeIcon className="text-sky-500" icon={faCheck} /> {language === "English" ? "Maintain standards for safety for our cleaners" : "Mantener estándares de seguridad para nuestros limpiadores"}</li>
                        <li className='text-2xl'><FontAwesomeIcon className="text-sky-500" icon={faCheck} /> {language === "English" ? "Make you feel confident and happy of a job well done" : "Hacerse sentir seguro y feliz de un trabajo bien hecho"}</li>
                        <li className='text-2xl'><FontAwesomeIcon className="text-sky-500" icon={faCheck} /> {language === "English" ? "Make you an extremely satisfied customer" : "Hacerse un cliente extremadamente satisfecho"}</li>
                    </ul>
                </div>
            </div>
            <Blurb />
            <ContactDiv />
        </>
     );
}
 
export default About;