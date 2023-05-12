import { Link } from "react-router-dom";
import { useRef } from 'react';

const Navbar = () => {
    const mobileRef = useRef()

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
    return ( 
        <>
            <nav className="flex justify-around items-center pt-6 pb-6 bg-sky-500 text-white md:pl-24 md:pr-24 md:gap-10">
                <h1 className="sm:block text-2xl md:text-3xl font-Monarda">Maribel's Cleaning Service</h1>
                <h3 className="hidden lg:block text-2xl font-Afterglow">Omaha, NE</h3>
                <a href="tel:4022037491" className="hidden lg:block text-2xl font-Afterglow hover:underline">402-203-7491</a>
                <ul className="hidden md:flex gap-7">
                    <Link className="text-2xl font-Afterglow transition-all duration-200 hover:underline" to="/">Home</Link>
                    <Link className="text-2xl font-Afterglow transition-all duration-200 hover:underline" to="/about">About</Link>
                    <Link className="text-2xl font-Afterglow transition-all duration-200 hover:underline" to="/services">Services</Link>
                    <Link className="text-2xl font-Afterglow transition-all duration-200 hover:underline" to="/contact">Contact</Link>
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
                        <Link className="text-4xl font-Afterglow transition-all duration-200 hover:underline" onClick={closeModal} to="/">Home</Link>
                        <Link className="text-4xl font-Afterglow transition-all duration-200 hover:underline" onClick={closeModal} to="/about">About</Link>
                        <Link className="text-4xl font-Afterglow transition-all duration-200 hover:underline" onClick={closeModal} to="/services">Services</Link>
                        <Link className="text-4xl font-Afterglow transition-all duration-200 hover:underline" onClick={closeModal} to="/contact">Contact</Link>
                    </ul>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;