import Clean from '../images/clean.svg';
import Clock from '../images/clock.svg';
import HandShake from '../images/handshake.svg';

const Blurb = () => {
    return ( 
        <>
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
 
export default Blurb;