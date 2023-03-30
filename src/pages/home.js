import LandingPage from '../images/home.jpg';
import Cleaning from '../images/cleaning.mp4';

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
                <div className='mx-auto'>
                    <video autoPlay loop src={Cleaning} alt='Animated gif of woman vacuuming' className=''></video>
                </div>
                <div id='blurb' className='bg-sky-400/50 w-1/2 flex flex-col items-center p-10 gap-12 font-Afterglow'>
                    <h1 className='text-3xl '>Local, Professional and Pristine Cleaning Services for the Greater Omaha Area!</h1>
                    <h2 className='text-4xl'>Commercial or Residential, We Do it All!</h2>
                    <h3 className='text-lg'>Looking for an amazing cleaning service with friendly staff and affordable pricing? You've come to the right place! 
                        Maribel's Cleaning Service is a local cleaning service that provides nothing but the best for their clients. Whether you need
                        help cleaning after a move or your business needs help keeping things look neat, Maribel's Cleaning Service is there to provide you 
                        with the best service possible!
                    </h3>
                    <h3 className='text-3xl'>Click Below to Check out Our Services!</h3>
                    <button>Our Services</button>
                </div>
            </div>
            <div id='testimonials-container'>
                <h1>Here's what People are Saying!</h1>
            </div>
        </>
     );
}
 
export default Home;