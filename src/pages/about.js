import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Blurb from '../components/blurb';
import ContactDiv from '../components/contact';
import Main from '../images/about1.jpg';
import Left from '../images/about2.jpg';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const About = () => {
    return ( 
        <>
            <div id="aboutusBanner" className="py-16  bg-sky-400/50 text-white text-center font-Monarda text-4xl">
                <h1>About Us</h1>
            </div>
            <div id="aboutUsContainer" className="flex flex-col md:flex-row justify-center p-20 ml-0 md:ml-20 gap-20">
                <div id="photoContainer" className='grid grid-cols-2 gap-4'>
                    <img src={Main} alt="Woman throwing a bed sheet" className='col-span-2'></img>
                    <img src={Left} alt="Woman cleaning window while wearing a mask"></img>
                    <img src={Left} alt="A person vacuuming up a large amount of confetti"></img>
                </div>
                <div id="aboutInfo-container" className='md:w-4/5'>
                    <h1 className='text-4xl font-Monarda font-bold mb-16'>Who We Are</h1>
                    <h2 className='text-2xl font-Afterglow w-4/5'>Maribel's Cleaning Services is a locally owned and operated cleaning service for the greater Omaha area. We pride ourselves on 
                        providing quality work, excellent customer service and attentiveness to details. Our focus is to really listen to our clients, 
                        understand their needs and provide exceptional service that will leave you feeling confident that a job will be well done. 
                    </h2>
                    <h2 className='text-2xl font-Afterglow w-3/4 my-5'>
                        Our team of cleaners is always ready and willing to get the job done. Your complete satisfaction is our guarantee. We hope to hear from you 
                        soon! 
                    </h2>
                    <h2 className='text-3xl font-Afterglow w-3/4 font-bold mb-5'>Our Mission:</h2>
                    <ul className=''>
                        <li className='text-2xl'><FontAwesomeIcon className="text-sky-500" icon={faCheck} /> Focus on your needs</li>
                        <li className='text-2xl'><FontAwesomeIcon className="text-sky-500" icon={faCheck} /> Provide high quality and consistent services</li>
                        <li className='text-2xl'><FontAwesomeIcon className="text-sky-500" icon={faCheck} /> Maintain standards for safety for our cleaners</li>
                        <li className='text-2xl'><FontAwesomeIcon className="text-sky-500" icon={faCheck} /> Make you feel confident and happy of a job well done</li>
                        <li className='text-2xl'><FontAwesomeIcon className="text-sky-500" icon={faCheck} /> Make you an extremely satisfied customer</li>
                    </ul>
                </div>
            </div>
            <Blurb />
            <ContactDiv />
        </>
     );
}
 
export default About;