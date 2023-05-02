import { Link } from 'react-router-dom'

const Footer = () => {
    return ( 
        <footer className="flex justify-evenly bg-sky-500 pt-10 pb-32 px-20 text-white font-Afterglow text-2xl">
            <div>
                <h1 className='mb-5 font-bold font-Monarda text-3xl'>Maribel's Cleaning Service</h1>
                <ul className="flex flex-col gap-2">
                <Link className="text-2xl font-Afterglow transition-all duration-200 hover:underline" to="/">Home</Link>
                <Link className="text-2xl font-Afterglow transition-all duration-200 hover:underline" to="/about">About</Link>
                <Link className="text-2xl font-Afterglow transition-all duration-200 hover:underline" to="/services">Services</Link>
                <Link className="text-2xl font-Afterglow transition-all duration-200 hover:underline" to="/contact">Contact</Link>
            </ul>
            </div>
            <div className="flex flex-row justify-evenly gap-20">
                <div>
                    <h2 className='font-bold text-2xl mb-10'>Working Hours</h2>
                </div>
                <div>
                    <h2 className='font-bold text-2xl mb-10'>Contact Information</h2>
                    <ul>
                        <li className='mb-5'>Phone: <a href="tel:4022037491" className="font-Afterglow hover:underline">402-203-7491</a></li>
                        <li>Email: <a href='mailto: cleaning1now@gmail.com' className='font-Afterglow hover:underline'>cleaning1now@gmail.com</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold text-2xl mb-10'>Payment Accepted</h2>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;