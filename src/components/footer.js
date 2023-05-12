import { Link } from 'react-router-dom'

const Footer = () => {
    return ( 
        <footer className="flex flex-col md:flex-row justify-evenly bg-sky-500 pt-10 pb-32 px-20 text-white font-Afterglow text-2xl">
            <div>
                <h1 className='mb-5 font-bold font-Monarda text-3xl'>Maribel's Cleaning Service</h1>
                <ul className="flex flex-col gap-2 ml-5">
                    <Link className="text-2xl font-Afterglow transition-all duration-200 hover:underline" to="/">Home</Link>
                    <Link className="text-2xl font-Afterglow transition-all duration-200 hover:underline" to="/about">About</Link>
                    <Link className="text-2xl font-Afterglow transition-all duration-200 hover:underline" to="/services">Services</Link>
                    <Link className="text-2xl font-Afterglow transition-all duration-200 hover:underline" to="/contact">Contact</Link>
                </ul>
            </div>
            <div className="flex flex-col md:flex-row pt-10 md:pt-0 justify-evenly gap-16">
                <div>
                    <h2 className='font-bold text-2xl mb-10 underline'>Working Hours</h2>
                    <ul>
                        <li className="mb-5">Weekdays: 8AM - 5PM</li>
                        <li className="">Weekdays: 8AM - 5PM</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold text-2xl mb-10 underline'>Contact Information</h2>
                    <ul>
                        <li className='mb-5'>Phone: <a href="tel:4022037491" className="font-Afterglow hover:underline">402-203-7491</a></li>
                        <li>Email: <a href='mailto: cleaning1now@gmail.com' className='font-Afterglow hover:underline'>cleaning1now@gmail.com</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold text-2xl mb-10 underline'>Payment Accepted*</h2>
                    <ul>
                        <li className="mb-5">Cash</li>
                        <li className="mb-5">Checks</li>
                        <li className='text-sm'>*No Apple Pay or Venmo at this time</li>
                    </ul>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;