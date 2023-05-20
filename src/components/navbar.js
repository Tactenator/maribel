import { Link } from "react-router-dom";
import { useContext, useRef } from 'react';
import { Context } from "../Context";

const Navbar = () => {
    const mobileRef = useRef()
    const { language, setLanguage } = useContext(Context)

    function handleMobile(e) {
        e.preventDefault()
        
        if(mobileRef.current.style.display === 'none'){
            mobileRef.current.style.display = 'block'
        }
        else {
            mobileRef.current.style.display = 'none'
        }
    }

    function closeModal() {
        mobileRef.current.style.display = "none"; 
    }

    function handleLanguage() {
        language === "English" ? setLanguage("Español") : setLanguage("English")
    }

    return ( 
        <>
            <nav className="flex justify-around items-center pt-6 pb-6 bg-sky-500 text-white md:pl-24 md:pr-24 md:gap-10">
                <Link to="/" className="sm:block text-2xl md:text-3xl font-Monarda">Maribel's Cleaning Service</Link>
                <h3 className="hidden lg:block text-2xl font-Afterglow">Omaha, NE</h3>
                <a href="tel:4022037491" className="hidden lg:block text-2xl font-Afterglow hover:underline">402-203-7491</a>
                <ul className="hidden md:flex gap-7">
                    <Link className="text-2xl font-Afterglow transition-all duration-200 hover:underline" to="/">
                        {language === "English" ? "Home" : "Inicio" }
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
                    <button className="border solid rounded-lg py-1 px-2 hover:bg-white hover:text-sky-500 transition-all duration-200" onClick={handleLanguage}>
                        {language === "English" ? "Español" : "English"}
                    </button>
                </ul>
                <div  id="hamburger-menu" className="md:hidden" onClick={handleMobile}>
                    <div className='mx-auto bg-white mb-1 h-[3px] w-[25px] pointer-events-none'></div>
                    <div className='mx-auto bg-white mb-1 h-[3px] w-[25px] pointer-events-none'></div>
                    <div className='mx-auto bg-white mb-1 h-[3px] w-[25px] pointer-events-none'></div>
                </div>
                <div ref={mobileRef} id="mobileMenu" className="absolute top-0 left-0 h-[100vh] w-[100vw] z-20 bg-sky-500" style={{display: 'none'}}>
                <span onClick={closeModal} className='absolute top-4 right-10 text-2xl text-white font-bold hover:cursor-pointer hover:text-black'>x</span>
                    <h1 className="sm:block text-3xl font-Monarda text-center mb-20 mt-10">Maribel's Cleaning Service</h1>
                    <ul className="flex flex-col items-center gap-7">
                        <Link className="text-4xl font-Afterglow transition-all duration-200 hover:underline" onClick={closeModal} to="/">
                            {language === "English" ? "Home" : "Inicio" }
                        </Link>
                        <Link className="text-4xl font-Afterglow transition-all duration-200 hover:underline" onClick={closeModal} to="/about">
                            {language === "English" ? "About" : "Sobre nosotros"}
                        </Link>
                        <Link className="text-4xl font-Afterglow transition-all duration-200 hover:underline" onClick={closeModal} to="/services">
                            {language === "English" ? "Services" : "Servicios"}
                        </Link>
                        <Link className="text-4xl font-Afterglow transition-all duration-200 hover:underline" onClick={closeModal} to="/contact">
                            {language === "English" ? "Contact" : "Contacto"}
                        </Link>
                    </ul>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;