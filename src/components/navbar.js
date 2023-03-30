import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <>
        <nav className="flex justify-between items-center pt-6 pb-6 pr-24 pl-24 bg-sky-500 text-white">
            <h1 className="text-3xl font-Monarda">Maribel's Cleaning Service</h1>
            <h3>Omaha, NE</h3>
            <h3>402-203-7491</h3>
            <h3>Click here for a free estimate</h3>
            <ul className="flex gap-7">
                <Link className="text-2xl font-Afterglow" to="/">Home</Link>
                <Link className="text-2xl font-Afterglow" to="/about">About</Link>
                <Link className="text-2xl font-Afterglow" to="/services">Services</Link>
                <Link className="text-2xl font-Afterglow" to="/contact">Contact</Link>
            </ul>

        </nav>
        </>
     );
}
 
export default Navbar;