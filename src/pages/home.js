import LandingPage from '../images/home.jpg';
import Cleaning from '../images/cleaning.jpg';
import Bravo from '../images/bravologo.png'
import Mots from '../images/motslogo.png';
import Mlcdc from '../images/mlcdclogog.png';


const Home = () => {
    return ( 
        <>
            <div id="home-container" className='flex'>
                <img class="w-full" src={LandingPage} alt="Comfy, clean house with blue sofa"></img>
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
                <div id='blurb' className='bg-sky-500 w-full flex items-center p-10 gap-12 font-Afterglow text-white'>
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
            <div id='testimonials-container' className='text-black p-20 font-Afterglow flex justify-center bg-stone-100 gap-10'>
                <div className="text-3xl">
                    <h1 className="mb-10 font-Monarda">Brands That Trust Us</h1>
                    <div id='brands-container' className='grid grid-cols-2 gap-5'>
                        <img src={Bravo} className="w-4/5" alt='Bravo Italian Kitchen'></img>
                        <img src={Mots} className="w-4/5" alt="Mouth of the South Logo"></img>   
                        <img src={Mlcdc} className="w-4/5" alt="Latino Center"></img>
                    </div>
                </div>
                <div className='w-1/2'>
                    <h1 className='text-3xl mb-10 font-Monarda'>What They're Saying</h1>
                    <div id="review" className='bg-white px-8 py-12'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum est ipsum, feugiat a aliquam ac, commodo quis dui. 
                    Nunc magna augue, posuere quis lobortis a, tincidunt ac tellus. 
                    Quisque sollicitudin eu nibh iaculis elementum. Duis dictum urna mi, quis lobortis odio pharetra dictum. 
                    Integer fringilla placerat posuere.
                    </div>
                    <div className='ml-5 mt-5'>
                        <h3>Person Person</h3>
                        <h3>Company Company</h3>
                    </div>
                </div>
            </div>
            <div id='requestInfo-container' className='bg-sky-400 p-9 text-center text-white font-Afterglow'>
                <h1 className='text-4xl'>Ready to get Started? Call Now or Click Below to send us a message!</h1>
                <h1 className='text-3xl py-5'>402-203-7491</h1>
                <button className='border-solid border-2 border-white py-6 px-10 text-2xl rounded-lg transition-all duration-200
                                   hover:bg-white hover:text-sky-500 hover:border-solid hover:border-2 hover:border-sky-400/50
                '>Contact Us</button>
            </div>
        </>
     );
}
 
export default Home;