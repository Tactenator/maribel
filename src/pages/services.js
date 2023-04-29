import { useState, useEffect, useRef } from 'react'

import Blurb from '../components/blurb';
import Commercial from '../images/commercial.jpg'
import Movein from '../images/movein.jpg'
import Pressure from '../images/pressure.jpg';
import After from '../images/afterhours.jpg'
import Office from '../images/office.jpg'
import Restaurant from '../images/restaurant.jpg'
import Contact from '../components/contact';



const Services = () => {

    const [data, setData] = useState();
    const [count, setCount] = useState('0');
    const modalRef = useRef();

    useEffect(() => {
        fetchData()
    }, [])
    
    async function fetchData() { 
        const response = await fetch("http://localhost:8000/services")
        const data = await response.json()
        console.log(data)
        setData(data)
    }
    
    function handleModal(e) {
        console.log(e.target)
        setCount(e.target.dataset.value)
        const modal = modalRef.current
        if(modal.style.right === '0px'){
            modal.style.right = '-1000px'
        }
        else {
            modal.style.right = '0px'
        }
    }
    return ( 
        <>
        <div id="servicesBanner" className="p-16 bg-sky-400/50 text-white font-Monarda text-4xl">
                <h1>Our Services</h1>
            </div>
            <div id="servicesContainer" className="grid grid-cols-3 content-center justify-center place-items-center p-10">
                <div id="service" data-value="0" onClick={((e) => handleModal(e))} className="w-4/5 h-auto mb-20 bg-stone-100 hover:cursor-pointer">
                    <img className="pointer-events-none" src={Commercial} alt="Test  for design purposes"></img>
                    <div className='px-5 pb-5 pointer-events-none'>
                        <h1 className='text-center text-2xl font-bold my-5 pointer-events-none'>Commercial Cleaning</h1>
                        <div className='mx-auto bg-sky-500 mb-5 h-[3px] w-[50px] pointer-events-none'></div>
                        <p className='pointer-events-none'>Scrubbing, vacuuming, you name it. We're here for all your basic cleaning needs.  </p>
                    </div>
                </div>
                <div id="service" data-value="1" onClick={((e) => handleModal(e))} className="w-4/5 h-auto mb-20 bg-stone-100 hover:cursor-pointer">
                    <img src={Movein} alt="Test  for design purposes"></img>
                    <div className='px-5 pb-5'>
                        <h1 className='text-center text-2xl font-bold my-5'>Move In/Out Service</h1>
                        <div className='mx-auto bg-sky-500 mb-5 h-[3px] w-[50px]'></div>
                        <p>We'll make sure we leave the place you're leaving better than when you moved in. </p>
                    </div>
                </div>
                <div id="service" data-value="2" onClick={((e) => handleModal(e))} className="w-4/5 h-auto mb-20 bg-stone-100 hover:cursor-pointer">
                    <img src={Pressure} alt="Test  for design purposes"></img>
                    <div className='px-5 pb-5'>
                        <h1 className='text-center text-2xl font-bold my-5 '>Pressure Cleaning</h1>
                        <div className='mx-auto bg-sky-500 mb-5 h-[3px] w-[50px]'></div>
                        <p>Need something a little more heavy duty? We got you covered.  </p>
                    </div>
                </div>
                <div id="service" data-value="3" onClick={((e) => handleModal(e))} className="w-4/5 h-auto mb-20 bg-stone-100 hover:cursor-pointer">
                    <img src={After} alt="Test for design purposes"></img>
                    <div className='px-5 pb-5'>
                        <h1 className='text-center text-2xl font-bold my-5'>After Hours Cleaning</h1>
                        <div className='mx-auto bg-sky-500 mb-5 h-[3px] w-[50px]'></div>
                        <p>Closing up shop? We'll take care of all your end of the day cleaning needs.  </p>
                    </div>
                </div>
                <div id="service" data-value="4" onClick={((e) => handleModal(e))} className="w-4/5 h-auto mb-20 bg-stone-100 hover:cursor-pointer">
                    <img src={Office} alt="Test for design purposes"></img>
                    <div className='px-5 pb-5'>
                        <h1 className='text-center text-2xl font-bold my-5'>Office Cleaning</h1>
                        <div className='mx-auto bg-sky-500 mb-5 h-[3px] w-[50px]'></div>
                        <p>We keep offices nice and tidy so you can focus more on getting the job done. </p>
                    </div>
                </div>
                <div id="service" data-value="5" onClick={((e) => handleModal(e))} className="w-4/5 h-auto mb-20 bg-stone-100 hover:cursor-pointer">
                    <img src={Restaurant} alt="Test for design purposes"></img>
                    <div className='px-5 pb-5'>
                        <h1 className='text-center text-2xl font-bold my-5'>Restaurant Services</h1>
                        <div className='mx-auto bg-sky-500 mb-5 h-[3px] w-[50px]'></div>
                        <p>A clean restaurant is a happy one. We'll take care of all your cleaning needs. </p>
                    </div>
                </div>
            </div>
            {data && 
                <div id="modal" ref={modalRef} style={{right: '-1000px'}} className='absolute top-0  h-[100vh] w-1/3 bg-white transition-all duration-300'>
                  
                </div>
            }
            <Blurb />
            <Contact />
        </>
            
     );
}
 
export default Services;