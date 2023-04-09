import LandingPage from '../images/home.jpg';
import Cleaning from '../images/cleaning.jpg';
import Bravo from '../images/bravologo.png'
import Mots from '../images/motslogo.png';
import Mlcdc from '../images/mlcdclogog.png';


const Home = () => {
    return ( 
        <>
            <div id="home-container" className='flex'>
                <img class="w-1/2" src={LandingPage} alt="Comfy, clean house with blue sofa"></img>
                <div id='landingPage-text' className='flex flex-col items-center mx-auto p-10 gap-16 font-Afterglow'>
                    <h1 className='text-5xl text-sky-500 font-Monarda'>Maribel's Cleaning Service</h1>
                    <h2 className='text-3xl font-Afterglow'>Your satisfaction is our priority!</h2>
                    <div className='text-center'>
                        <h3 className='text-2xl'>Call Us Today!</h3>
                        <h2 className='text-4xl'>(402)203-7491</h2>
                    </div>
                    <h3 className='text-2xl'>Click Below to Receive your Free Estimate</h3>
                    <button className='border-solid border-2 border-sky-400 py-6 px-10 text-2xl rounded-lg'>Request a Free Estimate</button>
                </div>
            </div>
            <div id='blurb-container' className='flex'>
            <div id='blurb' className='bg-sky-500 w-1/2 flex flex-col items-center p-10 gap-12 font-Afterglow text-white'>
                    <h1 className='text-3xl '>Local, Professional and Pristine Cleaning Services for the Greater Omaha Area!</h1>
                    <h2 className='text-4xl'>Commercial or Residential, We Do it All!</h2>
                    <h3 className='text-lg'>Looking for an amazing cleaning service with friendly staff and affordable pricing? You've come to the right place! 
                        Maribel's Cleaning Service is a local cleaning service that provides nothing but the best for their clients. Whether you need
                        help cleaning after a move or your business needs help keeping things look neat, Maribel's Cleaning Service is there to provide you 
                        with the best service possible!
                    </h3>
                    <h3 className='text-3xl'>Click Below to Check out Our Services!</h3>
                    <button className='border-solid border-2 border-white py-6 px-10 text-2xl rounded-lg'>Our Services</button>
                </div>
                <div className='mx-auto'>
                    <img src={Cleaning} alt='Gloved handle holding a bottle of cleanser'></img>
                </div>
            </div>
            <div id='testimonials-container' className=' text-black p-10 font-Afterglow'>
                <h1 className='text-4xl text-center py-10'>What Our Customers are Saying</h1>
                <div id='review-container' className='flex px-48 gap-24'>
                    <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-10'>
                        <img src={Bravo} alt="Bravo Italian Restaurant Logo" className='mx-auto'></img>
                        <div id='review' className='p-3'>
                            <p className='indent-8'>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <h4 className='py-4'>John Doe</h4>
                            <h4>Person at Such and Such Company</h4>
                        </div>
                    </div>
                    <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-10'>
                        <img src={Mots} alt="Mouth of the South Logo" className='mx-auto'></img>
                        <div id='review' className='p-3'>
                        <p className='indent-8'>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <h4 className='py-4'>John Doe</h4>
                            <h4>Person at Such and Such Company</h4>
                        </div>
                    </div>
                    <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-10'>
                        <img src={Mlcdc} alt="Something logo" className='mx-auto'></img>
                        <div id='review' className='p-3'>
                             <p className='indent-8'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <h4 className='py-4'>John Doe</h4>
                            <h4>Person at Such and Such Company</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div id='requestInfo-container' className='bg-sky-400 p-9 text-center text-white font-Afterglow'>
                <h1 className='text-4xl'>Ready to get Started? Call Now or Click Below to send us a message!</h1>
                <h1 className='text-3xl py-5'>402-203-7491</h1>
                <button className='border-solid border-2 border-white py-6 px-10 text-2xl rounded-lg'>Contact Us</button>
            </div>
        </>
     );
}
 
export default Home;