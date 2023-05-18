import Clean from '../images/clean.svg';
import Clock from '../images/clock.svg';
import HandShake from '../images/handshake.svg';
import { useContext } from 'react';
import { Context } from '../Context'; 

const Blurb = () => {
    const { language, setLanguage } = useContext(Context)
    return ( 
        <>
        <div id="blurbContainer" className='flex flex-col md:flex-row gap-10 md:gap-0 justify-evenly items-center p-20 relative'>
                <div className='bg-[url("https://quanticalabs.com/wp_themes/cleanmate/files/2017/11/image_03-3.jpg?id=1145")] absolute w-full h-full brightness-50'></div>
                <div id="blurbCard" className='bg-white w-[350px] h-[300px] text-center p-8 z-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                    <img src={Clean} alt="A brush and handle used for cleaning" className='w-1/5 mx-auto'></img>
                    <h2 className='font-bold font-2xl'>{language === "English" ? "Safety" : "Seguridad"}</h2>
                    <h3 className='w-3/5 mx-auto my-4'>{language === "English" ? "We use the safest chemicals for cleaning. Your safety and our workers is our number one priority." : "Utilizamos los productos químicos más seguros para la limpieza. Su seguridad y la de nuestros trabajadores es nuestra prioridad número uno."}</h3>
                </div>
                <div id="blurbCard" className='bg-white w-[350px] h-[300px] text-center p-8 z-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                    <img src={Clock} alt="A brush and handle used for cleaning" className='w-1/5 mx-auto'></img>
                    <h2 className='font-bold font-2xl'>{language === "English" ? "Always on Time" : "Siempre a tiempo"}</h2>
                    <h3 className='w-3/5 mx-auto my-4'>{language === "English" ? "Your time is important and we know it. We provide always on time cleaning services." : "Tu tiempo es importante y lo sabemos. Brindamos servicios de limpieza siempre a tiempo."}</h3>
                </div>
                <div id="blurbCard" className='bg-white w-[350px] h-[300px] text-center p-8 z-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                    <img src={HandShake} alt="A brush and handle used for cleaning" className='w-1/5 mx-auto'></img>
                    <h2 className='font-bold font-2xl'>{language === "English" ? "Customer Service" : "Servicio al Cliente"}</h2>
                    <h3 className='w-3/5 mx-auto my-4'>{language === "English" ? "Not only will our cleaning services dazzle you, but so will our amazing customer service." : "No solo lo deslumbrarán nuestros servicios de limpieza, sino también nuestro increíble servicio al cliente."}</h3>
                </div>
            </div>
        </>
     );
}
 
export default Blurb;