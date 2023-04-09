import Main from '../images/about1.jpg';
import Left from '../images/about2.jpg';
import Right from '../images/about3.jpg';
import Clean from '../images/clean.svg';
import Clock from '../images/clock.svg';
import HandShake from '../images/handshake.svg';

const About = () => {
    return ( 
        <>
            <div id="aboutusBanner" className="p-16 bg-sky-400/50 text-white font-Monarda text-4xl">
                <h1>About Us</h1>
            </div>
            <div id="aboutUsContainer" className="flex justify-center p-32 ml-32 gap-20">
                <div id="photoContainer" className='grid grid-cols-2 gap-4'>
                    <img src={Main} alt="Woman throwing a bed sheet" className='col-span-2'></img>
                    <img src={Left} alt="Woman cleaning window while wearing a mask"></img>
                    <img src={Left} alt="A person vacuuming up a large amount of confetti"></img>
                </div>
                <div id="aboutInfo-container" className='w-4/5'>
                    <h1 className='text-4xl font-Monarda font-bold mb-16'>Who We Are</h1>
                    <h2 className='text-2xl font-Afterglow w-3/4'>Maribel's Cleaning Services is a locally owned and operated cleaning service for the greater Omaha area. We pride ourselves on 
                        providing quality work, excellent customer service and attentiveness to details. Our focus is to really listen to our clients, 
                        understand their needs and provide exceptional service that will leave you feeling confident that a job will be well done. 
                    </h2>
                    <h2 className='text-2xl font-Afterglow w-3/4 my-5'>
                        Our team of cleaners is always ready and willing to get the job done. Your complete satisfaction is our guarantee. We hope to hear from you 
                        soon! 
                    </h2>
                    <h2 className='text-3xl font-Afterglow w-3/4 font-bold mb-5'>Our Mission:</h2>
                    <ul className=''>
                        <li>Focus on your needs</li>
                        <li>Provide high quality and consistent services</li>
                        <li>Maintain standards for safety for our cleaners</li>
                        <li>Make you feel confident and happy of a job well done</li>
                        <li>Make you an extremely satisfied customer</li>
                    </ul>
                </div>
            </div>
            <div id="blurbContainer" className='flex justify-evenly items-center p-20
            bg-[url("https://quanticalabs.com/wp_themes/cleanmate/files/2017/11/image_03-3.jpg?id=1145")]'>
                <div id="blurbCard" className='bg-white w-[400px] h-[300px] text-center p-8'>
                    <img src={Clean} alt="A brush and handle used for cleaning" className='w-1/5 mx-auto'></img>
                    <h2 className='font-bold font-2xl'>Safety</h2>
                    <h3 className='w-3/5 mx-auto my-4'>We use the safest chemicals for cleaning. Your safety and our workers is our number one priority.</h3>
                </div>
                <div id="blurbCard" className='bg-white w-[400px] h-[300px] text-center p-8'>
                    <img src={Clock} alt="A brush and handle used for cleaning" className='w-1/5 mx-auto'></img>
                    <h2 className='font-bold font-2xl'>Always on Time</h2>
                    <h3 className='w-3/5 mx-auto my-4'>Your time is important and we know it. We provide always on time cleaning services.</h3>
                </div>
                <div id="blurbCard" className='bg-white w-[400px] h-[300px] text-center p-8'>
                    <img src={HandShake} alt="A brush and handle used for cleaning" className='w-1/5 mx-auto'></img>
                    <h2 className='font-bold font-2xl'>Customer Service</h2>
                    <h3 className='w-3/5 mx-auto my-4'>Not only will our cleaning services dazzle you, but so will our amazing customer service. </h3>
                </div>
            </div>
        </>
     );
}
 
export default About;