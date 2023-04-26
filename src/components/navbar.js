import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <>
        <nav className="flex justify-between items-center pt-6 pb-6 pr-24 pl-24 bg-sky-500 text-white">
            <h1 className="text-3xl font-Monarda">Maribel's Cleaning Service</h1>
            <h3 className="text-2xl font-Afterglow">Omaha, NE</h3>
            <a href="tel:4022037491" className="text-2xl font-Afterglow hover:underline">402-203-7491</a>
            <ul className="flex gap-7">
                <Link className="text-2xl font-Afterglow transition-all duration-200 hover:underline" to="/">Home</Link>
                <Link className="text-2xl font-Afterglow transition-all duration-200 hover:underline" to="/about">About</Link>
                <Link className="text-2xl font-Afterglow transition-all duration-200 hover:underline" to="/services">Services</Link>
                <Link className="text-2xl font-Afterglow transition-all duration-200 hover:underline" to="/contact">Contact</Link>
            </ul>

        </nav>
        </>
     );
}
 
export default Navbar;