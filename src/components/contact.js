import Maid from '../images/maid.jpg'

const Contact = () => {
    return ( 
        <div id="contact-container" className="flex flex-row justify-center py-20 px-20 bg-sky-400">
            <div id="form-container" className="w-full">
            <div className="flex flex-col gap-6 items-center">
                <div id='requestInfo-container' className='bg-sky-400 text-center text-white font-Afterglow w-full'>
                    <h1 className='text-4xl '>Ready to get Started? Send us a message!</h1>   
                </div>
                    <div className="relative h-12 w-1/2 min-w-[400px]">
                        <input
                        className="peer h-full w-full rounded-[7px] border border-white bg-white border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        />
                        <label className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5   before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block  after:flex-grow after:rounded-tr-md  peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-disabled:text-transparent  peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Name
                        </label>
                    </div>
                    <div className="relative h-12 w-1/2 min-w-[400px]">
                        <input
                        className="peer h-full w-full rounded-[7px] border border-white bg-white border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-t-blue-gray-200 "
                        placeholder=" "
                        />
                        <label className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5   before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block  after:flex-grow after:rounded-tr-md  peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-disabled:text-transparent  peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Email
                        </label>
                    </div>
                    <div className="relative h-12 w-1/2 min-w-[400px]">
                    <input
                        className="peer h-full w-full rounded-[7px] border border-white bg-white border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        />
                        <label className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5   before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block  after:flex-grow after:rounded-tr-md  peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-disabled:text-transparent  peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Phone
                        </label>
                    </div>
                        <textarea rows="8" cols="50" placeholder='How can we help?' 
                        className='bg-gray-50 rounded-lg p-2.5 border border-gray-300 resize-none text-sm w-1/2 text-gray-900'></textarea>
                       <button className='border-solid border-2 border-white text-white py-6 px-10 text-2xl rounded-lg transition-all duration-200
                                           hover:bg-white hover:text-sky-500'>Contact Us</button>
                </div>
                
            </div>
            <img className="rounded-full w-[500px] h-[500px]" src={Maid} alt="Happy maid smiling"></img>
            
        </div>
        
     );
}
 
export default Contact;