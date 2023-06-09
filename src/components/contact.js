import { useRef, useEffect } from 'react';
import Maid from '../images/maid.jpg'
import { useContext } from 'react';
import { Context } from '../Context'; 

const ContactDiv = () => {

    const formRef = useRef()
    const thanksRef = useRef()

    const { language, setLanguage } = useContext(Context)

    function handleSubmit (e) {
        e.preventDefault()

        let formData = new FormData(formRef.current);

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
        <div id="contact-container" className="relative flex flex-col md:flex-row justify-center py-20 px-20 bg-sky-400">
            <div id="form-container" className="w-full">
                <form ref={formRef} name="Contact" method="POST" className="flex flex-col gap-6 items-center" data-netlify="true" onSubmit={((e) => { handleSubmit(e)})}>
                    <input type="hidden" name="form-name" value="Contact" />
                    <div id='requestInfo-container' className='bg-sky-400 text-center text-white font-Afterglow w-full'>
                        <h1 className='text-4xl '>{language === "English" ? "Ready to get Started? Send us a message!" : "¿Listo para comenzar? ¡Mandanos un mensaje!"}</h1>   
                    </div>
                    <img className="block md:hidden rounded-full w-[200px] h-[200px]" src={Maid} alt="Happy maid smiling"></img>
                    <div className="relative h-12 w-1/2 min-w-[250px]">
                        <input type="text" name="name"
                        className="peer h-full w-full rounded-[7px] border border-white bg-white border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" " required
                        />
                        <label className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5   before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block  after:flex-grow after:rounded-tr-md  peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-disabled:text-transparent  peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        { language === "English" ? "Name" : "Nombre" }
                        </label>
                    </div>
                    <div className="relative h-12 w-1/2 min-w-[250px]">
                        <input type='email' name='email'
                        className="peer h-full w-full rounded-[7px] border border-white bg-white border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-t-blue-gray-200 "
                        placeholder=" " required
                        />
                        <label className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5   before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block  after:flex-grow after:rounded-tr-md  peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-disabled:text-transparent  peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        { language === "English" ? "Email" : "Correo Electronico" }
                        </label>
                    </div>
                    <div className="relative h-12 w-1/2 min-w-[250px]">
                        <input type='text' name='phone'
                        className="peer h-full w-full rounded-[7px] border border-white bg-white border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" " required
                        />
                        <label className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5   before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block  after:flex-grow after:rounded-tr-md  peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-disabled:text-transparent  peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        { language === "English" ? "Phone" : "Teléfono" }
                        </label>
                    </div>
                        <textarea name='message' rows="8" cols="30" placeholder='How can we help?' required
                        className='bg-gray-50 rounded-lg p-2.5 border border-gray-300 resize-none text-sm min-w-[250px] md:w-1/2  text-gray-900'></textarea>
                         <button type="submit" className='border-solid border-2 border-white text-white py-6 px-10 text-2xl rounded-lg transition-all duration-200
                        hover:bg-white hover:text-sky-500'>{language === "English" ? "Send Message" : "Enviar mensaje"}</button>
                </form>
                <div ref={thanksRef} className='text-white font-Afterglow text-center h-full flex flex-col justify-center gap-6 pb-20' style={{display: 'none'}}>
                    <h1 className='text-white font-Monarda text-4xl'>{language === "English" ? "Thank you!" : "¡Gracias!"}</h1>
                    <p className='text-3xl'>{language === "English" ? "We have recieved your message! Thank you for your interest in Maribel's Cleaning Service!" : "¡Hemos recibido tu mensaje! ¡Gracias por su interés en el Servicio de Limpieza de Maribel!"}</p>
                    <p className='text-3xl'>{language === "English" ? "We will reply to your message as soon as we can." : "Responderemos a su mensaje tan pronto como podamos."} </p>
                    <p className='text-3xl'>{language === "English" ? "Thank you!" : "¡Gracias!"}</p>
                </div>
            </div>
            <img className="hidden md:flex rounded-full w-[500px] h-[500px]" src={Maid} alt="Happy maid smiling"></img>
        </div>
        
     );
}
 
export default ContactDiv;