import Test from '../images/about2.jpg'

const Services = () => {
    return ( 
        <>
            <div id="servicesBanner" className="p-16 bg-sky-400/50 text-white font-Monarda text-4xl">
                <h1>Our Services</h1>
            </div>
            <div id="servicesContainer" className="grid grid-cols-3 content-center justify-center place-items-center p-10">
                <div id="service" className="w-4/5 h-auto mb-20 bg-stone-100">
                    <img src={Test} alt="Test image for design purposes"></img>
                    <div className='px-5 pb-5'>
                        <h1 className='text-center text-2xl font-bold my-5'>Commercial Cleaning</h1>
                        <div className='mx-auto bg-sky-500 mb-5 h-[3px] w-[50px]'></div>
                        <p>Scrubbing, vacuuming, you name it. We're here for all your basic cleaning needs.  </p>
                    </div>
                </div>
                <div id="service" className="w-4/5 h-auto mb-20 bg-stone-100">
                    <img src={Test} alt="Test image for design purposes"></img>
                    <div className='px-5 pb-5'>
                        <h1 className='text-center text-2xl font-bold my-5'>Move In/Out Service</h1>
                        <div className='mx-auto bg-sky-500 mb-5 h-[3px] w-[50px]'></div>
                        <p>We'll make sure we leave the place you're leaving better than when you moved in. </p>
                    </div>
                </div>
                <div id="service" className="w-4/5 h-auto mb-20 bg-stone-100">
                    <img src={Test} alt="Test image for design purposes"></img>
                    <div className='px-5 pb-5'>
                        <h1 className='text-center text-2xl font-bold my-5'>Pressure Cleaning</h1>
                        <div className='mx-auto bg-sky-500 mb-5 h-[3px] w-[50px]'></div>
                        <p>Need something a little more heavy duty? We got you covered.  </p>
                    </div>
                </div>
                <div id="service" className="w-4/5 h-auto mb-20 bg-stone-100">
                    <img src={Test} alt="Test image for design purposes"></img>
                    <div className='px-5 pb-5'>
                        <h1 className='text-center text-2xl font-bold my-5'>After Hours Cleaning</h1>
                        <div className='mx-auto bg-sky-500 mb-5 h-[3px] w-[50px]'></div>
                        <p>Closing up shop? We'll take care of all your end of the day cleaning needs.  </p>
                    </div>
                </div>
                <div id="service" className="w-4/5 h-auto mb-20 bg-stone-100">
                    <img src={Test} alt="Test image for design purposes"></img>
                    <div className='px-5 pb-5'>
                        <h1 className='text-center text-2xl font-bold my-5'>Office Cleaning</h1>
                        <div className='mx-auto bg-sky-500 mb-5 h-[3px] w-[50px]'></div>
                        <p>We keep offices nice and tidy so you can focus more on getting the job done. </p>
                    </div>
                </div>
                <div id="service" className="w-4/5 h-auto mb-20 bg-stone-100">
                    <img src={Test} alt="Test image for design purposes"></img>
                    <div className='px-5 pb-5'>
                        <h1 className='text-center text-2xl font-bold my-5'>Restaurant Services</h1>
                        <div className='mx-auto bg-sky-500 mb-5 h-[3px] w-[50px]'></div>
                        <p>A clean restaurant is a happy one. We'll take care of all your cleaning needs. </p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Services;