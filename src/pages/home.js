import { useState } from 'react';

import LandingPage from '../images/home.jpg';
import Cleaning from '../images/cleaning.jpg';
import Bravo from '../images/bravologo.png'
import Mots from '../images/motslogo.png';
import Mlcdc from '../images/mlcdclogog.png';
import Contact from '../components/contact';


const Home = () => {
    const reviews = [
        {
        name: "Bravo Italian Kitchen", 
        review: "Lorem Ipsum ;aksdfak;sdf;aksdf;askdflf", 
        manager: 'Ben Reed', 
        title: "Manager"
    }, {
        name: 'Mouth of the South', 
        review: 'Is really good', 
        manager: 'Sam',
        title: 'Manager and Fag'
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
            <div id="home-container" className='flex'>
                <img className="w-full" src={LandingPage} alt="Comfy, clean house with blue sofa"></img>
                <div id='landingPage-text' className='flex flex-col items-center mx-auto p-10 gap-16 font-Afterglow w-full'>
                    <h1 className='text-5xl text-sky-500 font-Monarda'>Maribel's Cleaning Service</h1>
                    <h2 className='text-3xl font-Afterglow'>Your satisfaction is our priority!</h2>
                    <div className='text-center'>
                        <h3 className='text-3xl mb-4 '>Call Us Today!</h3>
                        <a href='tel:4022037491' className='text-4xl underline transition-all 
                        duration-200 hover:text-sky-500'>(402)203-7491</a>
                    </div>
                    <h3 className='text-3xl'>Click Below to Receive your Free Estimate</h3>
                    <button className='border-solid border-2 border-sky-400 py-6 px-10 text-2xl rounded-lg transition-all duration-200
                                       hover:bg-sky-500 hover:text-white
                    '>Request a Free Estimate</button>
                </div>
            </div>
            <div id='blurb-container'>
                <div id='blurb' className='bg-sky-500 w-full flex items-center p-12 gap-12 font-Afterglow text-white'>
                    <div className="w-4/5 flex flex-col items-center">
                        <h1 className='text-3xl text-center'>Local, Professional and Pristine Cleaning Services for the Greater Omaha Area!</h1>
                        <h2 className='text-4xl text-center my-5'>Commercial or Residential, We Do it All!</h2>
                        <h3 className='text-xl'>Looking for an amazing cleaning service with friendly staff and affordable pricing? You've come to the right place! 
                            Maribel's Cleaning Service is a local cleaning service that provides nothing but the best for their clients. Whether you need
                            help cleaning after a move or your business needs help keeping things look neat, Maribel's Cleaning Service is there to provide you 
                            with the best service possible!
                        </h3>
                        <h3 className='text-3xl my-5 text-center'>Click Below to Check out Our Services!</h3>
                        <button className='border-solid border-2 border-white py-6 px-10 text-2xl rounded-lg transition-all duration-200
                                           hover:bg-white hover:text-sky-500
                        '>Our Services</button>
                    </div>
                        <div className='w-3/4 mx-auto'>
                            <img src={Cleaning} className="rounded-xl" alt='Gloved handle holding a bottle of cleanser'></img>
                        </div>
                    </div>
                </div>
            <div id='testimonials-container' className='text-black py-28 px-20 font-Afterglow flex justify-center bg-stone-100 gap-10'>
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
                <div className='w-1/2'>
                    <h1 className='text-3xl mb-10 font-Monarda'>What They're Saying</h1>
                    <div id="review" className='bg-white px-8 py-12'>
                    {review.review}
                    </div>
                    <div className='ml-5 mt-5'>
                        <h3>{review.manager} - {review.title}</h3>
                        <h3>{review.name}</h3>
                    </div>
                </div>
            </div>
            <Contact />
        </>
     );
}
 
export default Home;