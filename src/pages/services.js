import { useState, useEffect, useRef, useContext } from 'react'

import Blurb from '../components/blurb';
import Commercial from '../images/commercial.jpg'
import Movein from '../images/movein.jpg'
import Pressure from '../images/pressure.jpg';
import After from '../images/afterhours.jpg'
import Office from '../images/office.jpg'
import Restaurant from '../images/restaurant.jpg'
import ContactDiv from '../components/contact';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';
import { Context } from '../Context';



const Services = () => {

    const [data, setData] = useState();
    const [count, setCount] = useState('0');
    const modalRef = useRef();
    const { language, setLanguage } = useContext(Context);

    useEffect(() => {
        fetchData()
    }, [])
    
    async function fetchData() { 
        const response = await fetch("https://api.npoint.io/1060df625b0ca340c3f9")
        const data = await response.json()
        setData(data.services)
    }
    
    function handleModal(e) {
        const modal = modalRef.current;
        if(data){
            if(e.target.dataset.value) {
                modal.style.right = '1000px'; 
            }
            setCount(e.target.dataset.value)
            if(modal.style.right === '0px'){
                modal.style.right = '-1000px'
            }
            else {
                modal.style.right = '0px'
            }
        }
    }

    function closeModal() {
        const modal = modalRef.current; 
        modal.style.right = '-1000px'
    }
    return ( 
        <>
        <div id="servicesBanner" className="p-16 bg-sky-400/50 text-white font-Monarda text-4xl text-center">
                <h1>{ language === "English" ? "Our Services" : "Nuestros Servicios" }</h1>
            </div>
            <div className='text-center font-Afterglow text-2xl pt-10'>{ language === "English" ? "Click on a service below to learn more!" : "¡Haga clic en un servicio a continuación para obtener más información!" }</div>
            <div id="servicesContainer" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 content-center justify-center place-items-center p-10">
                <div id="service" data-value="0" onClick={((e) => handleModal(e))} className="w-4/5 h-auto mb-20 bg-stone-100 hover:cursor-pointer">
                    <img className="pointer-events-none" src={Commercial} alt="Test  for design purposes"></img>
                    <div className='px-5 pb-5 pointer-events-none'>
                        <h1 className='text-center text-2xl font-bold my-5 pointer-events-none'>{ language === "English" ? "Commercial Cleaning" : "Limpieza Comercial" }</h1>
                        <div className='mx-auto bg-sky-500 mb-5 h-[3px] w-[50px] pointer-events-none'></div>
                        <p className='pointer-events-none'>{ language === "English" ? "Scrubbing, vacuuming, you name it. We're here for all your basic cleaning needs." 
                            : "Fregar, aspirar, lo que sea. Estamos aquí para todas sus necesidades básicas de limpieza." }  
                        </p>
                    </div>
                </div>
                <div id="service" data-value="1" onClick={((e) => handleModal(e))} className="w-4/5 h-auto mb-20 bg-stone-100 hover:cursor-pointer">
                    <img className="pointer-events-none" src={Movein} alt="Test  for design purposes"></img>
                    <div className='px-5 pb-5 pointer-events-none'>
                        <h1 className='text-center text-2xl font-bold my-5 pointer-events-none'>{ language === "English" ? "Move In/Out Service" : "Servicios de Mudanza" }</h1>
                        <div className='mx-auto bg-sky-500 mb-5 h-[3px] w-[50px] pointer-events-none'></div>
                        <p>{ language === "English" ? "We'll make sure we leave the place you're leaving better than when you moved in." : "Nos aseguraremos de dejar el lugar que te vas mejor que cuando te mudaste." } </p>
                    </div>
                </div>
                <div id="service" data-value="2" onClick={((e) => handleModal(e))} className="w-4/5 h-auto mb-20 bg-stone-100 hover:cursor-pointer">
                    <img className="pointer-events-none" src={Pressure} alt="Test  for design purposes"></img>
                    <div className='px-5 pb-5 pointer-events-none'>
                        <h1 className='text-center text-2xl font-bold my-5 pointer-events-none'>{ language === "English" ? "Pressure Cleaning" : "Limpieza a presión" }</h1>
                        <div className='mx-auto bg-sky-500 mb-5 h-[3px] w-[50px] pointer-events-none'></div>
                        <p>{ language === "English" ? "Need something a little more heavy duty? We got you covered." : "¿Necesita algo un poco más resistente? Te tenemos cubierto." }  </p>
                    </div>
                </div>
                <div id="service" data-value="3" onClick={((e) => handleModal(e))} className="w-4/5 h-auto mb-20 bg-stone-100 hover:cursor-pointer">
                    <img className="pointer-events-none" src={After} alt="Test for design purposes"></img>
                    <div className='px-5 pb-5 pointer-events-none'>
                        <h1 className='text-center text-2xl font-bold my-5 pointer-events-none'>{ language === "English" ? "After Hours Cleaning" : "Limpieza fuera de horas" }</h1>
                        <div className='mx-auto bg-sky-500 mb-5 h-[3px] w-[50px] pointer-events-none'></div>
                        <p>{ language === "English" ? "Closing up shop? We'll take care of all your end of the day cleaning needs." : "¿Cerrar tienda? Nos ocuparemos de todas sus necesidades de limpieza al final del día." }</p>
                    </div>
                </div>
                <div id="service" data-value="4" onClick={((e) => handleModal(e))} className="w-4/5 h-auto mb-20 bg-stone-100 hover:cursor-pointer">
                    <img className="pointer-events-none" src={Office} alt="Test for design purposes"></img>
                    <div className='px-5 pb-5 pointer-events-none'>
                        <h1 className='text-center text-2xl font-bold my-5 pointer-events-none'>{ language === "English" ? "Office Cleaning" : "Limpieza de oficinas" }</h1>
                        <div className='mx-auto bg-sky-500 mb-5 h-[3px] w-[50px ] pointer-events-none'></div>
                        <p>{ language === "English" ? "We keep offices nice and tidy so you can focus more on getting the job done." : "Mantenemos las oficinas limpias y ordenadas para que pueda concentrarse más en hacer el trabajo." }</p>
                    </div>
                </div>
                <div id="service" data-value="5" onClick={((e) => handleModal(e))} className="w-4/5 h-auto mb-20 bg-stone-100 hover:cursor-pointer">
                    <img className="pointer-events-none" src={Restaurant} alt="Test for design purposes"></img>
                    <div className='px-5 pb-5 pointer-events-none'>
                        <h1 className='text-center text-2xl font-bold my-5 pointer-events-none'>{ language === "English" ? "Restaurant Services" : "Servicios de restaurante" }</h1>
                        <div className='mx-auto bg-sky-500 mb-5 h-[3px] w-[50px] pointer-events-none'></div>
                        <p>{ language === "English" ? "A clean restaurant is a happy one. We'll take care of all your cleaning needs." : "Un restaurante limpio es feliz. Nos encargaremos de todas sus necesidades de limpieza." }</p>
                    </div>
                </div>
            </div>
            <div id="modal" ref={modalRef} style={{right: '-1000px'}} className='fixed z-20 top-0 overflow-y-auto h-[100vh] w-[100vw] md:w-1/3 bg-stone-100 transition-all duration-300'>
                <span onClick={closeModal} 
                className='absolute top-4 right-10 text-2xl text-white font-bold hover:cursor-pointer hover:text-black'>x</span>
                {data && 
                <div>
                    <div className='text-3xl tracking-wide text-center py-10 font-bold bg-sky-500 text-white font-Afterglow'>{data[count].name}</div>
                    <Player
                    autoplay
                    loop
                    src={data[count].gif}
                    style={{ height: '300px', width: '300px' }}
                    />
                    <div id="modal-information" className="px-4 py-2 bg-sky-400 text-[18px] text-white">
                        <h1 className='text-center text-3xl my-10'>What We Offer</h1>
                        <h4>{ language === "English" ? data[count].english : data[count].spanish }</h4>
                        <h1 className='my-4 text-center text-2xl'>{ language === "English" ? "Want to learn more? We'd love to hear from you!" : "¿Querer aprender más? ¡Nos encantaría saber de usted!" }</h1>
                        <div className='flex justify-center my-10'>
                            <Link to="/contact" className='border-solid border-2 border-white border-sky-400 bg-sky-500 py-6 px-10 text-2xl rounded-lg transition-all duration-200
                            hover:bg-white hover:text-sky-500
                            '>{ language === "English" ? "Contact Us" : "Contacta con nosotros" }</Link>
                        </div>
                    </div>
                </div>
                }
            </div>
            <Blurb />
            <ContactDiv />
        </>
            
     );
}
 
export default Services;