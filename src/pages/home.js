import { useState } from 'react';
import { Link } from 'react-router-dom'

import newLanding from '../images/newLandingPage.jpg'
import Cleaning from '../images/cleaning.jpg';
import Bravo from '../images/bravologo.png'
import Mots from '../images/motslogo.png';
import Mlcdc from '../images/mlcdclogog.png';
import ContactDiv from '../components/contact';


const Home = () => {
    const reviews = [
        {
        name: "Bravo Italian Kitchen", 
        review: "Maribels Cleaning Service is absolutely top notch. They're very trustworthy and always do a great job. They're always on time and exceed expectations. I highly recommend them to anyone with cleaning needs. ", 
        manager: 'Ben Reed', 
        title: "General Manager"
    }, {
        name: 'Mouth of the South', 
        review: 'Is really good', 
        manager: 'Sam',
        title: 'Manager'
    }, 
    {
        name: 'Something latino center', 
        review: 'da best', 
        manager: 'Some guy',
        title: 'Manager'
    }]

    const [review, setReview] = useState(reviews[0]);
    
    function handleReview(e) {
        setReview(reviews[e.target.dataset.value])
    }
    
    return ( 
        <>
            <div id="home-container" className='flex flex-col items-center md:pt-24 h-[100vh] relative'>
                <img src={newLanding} alt="Comfy, clean house with blue sofa" className='absolute top-0 left-0 h-[100vh] w-[100vw] object-cover brightness-50'></img>
                {/* <img className="w-full" src={LandingPage} alt="Comfy, clean house with blue sofa"></img> */}
                <div id='landingPage-text' className='flex flex-col items-center text-white mx-auto p-10 gap-16 font-Afterglow w-full z-10'>
                    <h1 className='text-6xl text-sky-500 font-Monarda text-center'>Maribel's Cleaning Service</h1>
                    <h2 className='text-4xl font-Afterglow text-center'>Your satisfaction is our priority!</h2>
                    <div className='flex flex-col md:flex-row gap-20 pt-5 md:pt-20'>
                        <Link to="/services" className='border-solid border-2 border-sky-400 bg-sky-500 py-6 px-10 text-2xl rounded-lg transition-all duration-200
                                        hover:bg-white hover:text-sky-500'>Our Services
                        </Link>
                        <Link to="/contact" className='border-solid border-2 border-sky-400 bg-sky-500 py-6 px-10 text-2xl rounded-lg transition-all duration-200
                                        hover:bg-white hover:text-sky-500'>Request a Free Estimate</Link>
                    </div>
                    
                </div>
            </div>
            <div id='blurb-container'>
                <div id='blurb' className='bg-sky-500 w-full flex flex-col md:flex-row items-center p-12 gap-12 font-Afterglow text-white'>
                    <div className="w-4/5 flex flex-col items-center">
                        <h1 className='text-3xl text-center'>Local, Professional and Pristine Cleaning Services for the Greater Omaha Area!</h1>
                        <h2 className='text-4xl text-center my-5'>Commercial or Residential, We Do it All!</h2>
                        <h3 className='hidden md:block text-xl'>Looking for an amazing cleaning service with friendly staff and affordable pricing? You've come to the right place! 
                            Maribel's Cleaning Service is a local cleaning service that provides nothing but the best for their clients. Whether you need
                            help cleaning after a move or your business needs help keeping things look neat, Maribel's Cleaning Service is there to provide you 
                            with the best service possible!
                        </h3>
                        <h3 className='text-3xl my-5 text-center'>Click Below to Check out Our Services!</h3>
                        <Link to="/services" className='border-solid border-2 border-white py-6 px-10 text-2xl rounded-lg transition-all duration-200
                            hover:bg-white hover:text-sky-500'>Our Services
                        </Link>
                    </div>
                        <div className='md:w-3/4 mx-auto'>
                            <img src={Cleaning} className="rounded-xl" alt='Gloved handle holding a bottle of cleanser'></img>
                        </div>
                    </div>
                </div>
            <div id='testimonials-container' className='text-black py-14 md:py-28 px-5 md:px-20 font-Afterglow flex flex-col md:flex-row justify-center bg-stone-100 gap-10'>
                <div className="text-3xl">
                    <h1 className="mb-10 font-Monarda">Brands That Trust Us</h1>
                    <div id='brands-container' className='grid grid-cols-2 gap-5'>
                        <img src={Bravo} data-value="0" onClick={((e) => handleReview(e))} className="w-4/5 hover:cursor-pointer transition-all duration-200
                        hover:transform hover:translate-y-[-5px]" alt='Bravo Italian Kitchen'></img>
                        <img src={Mots} data-value="1" onClick={((e) => handleReview(e))} className="w-4/5 hover:cursor-pointer transition-all duration-200
                        hover:transform hover:translate-y-[-5px]" alt="Mouth of the South Logo"></img>   
                        <img src={Mlcdc} data-value="2" onClick={((e) => handleReview(e))} className="w-4/5 hover:cursor-pointer transition-all duration-200
                        hover:transform hover:translate-y-[-5px]" alt="Latino Center"></img>
                    </div>
                </div>
                <div className='md:w-1/2'>
                    <h1 className='pt-10 md:pt-0 text-3xl mb-10 font-Monarda'>What They're Saying</h1>
                    <div id="review" className='bg-white px-8 py-12 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
                        {review.review}
                    </div>
                    <div className='ml-5 mt-5'>
                        <h3>{review.manager} - {review.title}</h3>
                        <h3>{review.name}</h3>
                    </div>
                </div>
            </div>
            <ContactDiv />
        </>
     );
}
 
export default Home;