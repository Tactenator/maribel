import { useRef } from 'react'
import Hours from '../images/hours.svg'
import Telephone from '../images/telephone.svg';
import Mail from '../images/mail.svg';

const Contact = () => {

    const formRef = useRef()
    const thanksRef = useRef()

    function handleSubmit (e) {
        e.preventDefault()
        console.log('clicked!')

        let formData = new FormData(formRef.current);

        fetch("../../public/contact-form.html", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
        .then(() => console.log('success'))
        .then(() => {
            formRef.current.style.display = 'none';
            thanksRef.current.style.display = 'flex';
        })
        .catch((error) => alert(error));
    }
    return ( 
        <>
            <div id="servicesBanner" className="p-16 bg-sky-400/50 text-white font-Monarda text-4xl text-center">
                <h1>Contact Us</h1>
            </div>
            <div id="contactContainer">
                <div id="info-container" className="flex flex-col md:flex-row md:justify-evenly py-10 bg-stone-100 font-Afterglow">
                    <div id="info" className="text-center md:text-left mb-10 md:mb-0">
                        <img src={Telephone} alt="A telephone"  className="mx-auto"></img>
                        <div className='ml-1'>
                            <h1 className='text-2xl my-5 font-bold'>Phone</h1>
                            <a href="tel:4022037491" className="text-2xl font-Afterglow hover:underline">402-203-7491</a>
                        </div>
                    </div>
                    <div id="info" className="text-center md:text-left mb-10 md:mb-0">
                        <img src={Mail} alt="An envelope for sending mail" className="mx-auto"></img>
                        <div className='ml-1'>
                            <h1 className='text-2xl my-5 font-bold'>Email</h1>
                            <span className='text-2xl'>cleaning1now@gmail.com</span>
                        </div>
                    </div>
                    <div id="info" className="text-center md:text-left mb-10 md:mb-0">
                        <img src={Hours} alt="A clock"  className="mx-auto"></img>
                        <div className='ml-1'>
                            <h1 className='text-2xl my-5 font-bold'>Hours</h1>
                            <div className="text-2xl">Weekdays: 8AM - 5PM</div>
                            <div className="text-2xl">Weekdays: 8AM - 5PM</div>
                        </div>
                    </div>
                </div>
                <h1 className="text-center text-4xl font-Monarda my-20">Contact Us Today!</h1>
                <div ref={formRef} id='contactContainer' className='flex flex-col md:flex-row justify-center items-center gap-10 w-screen my-10' data-netlify="true" onSubmit={((e) => { handleSubmit(e)})}>
                    <form className="flex flex-col gap-6 px-6">
                        <div className="relative h-12 w-full min-w-[300px] md:min-w-[400px]">
                            <input type="text" name="name" required
                            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-gray-50 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-sky-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-sky-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-sky-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-sky-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Name
                            </label>
                        </div>
                        <div className="relative h-12 w-full min-w-[300px] md:min-w-[400px]">
                            <input type='email' name='email' required
                            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-gray-50 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-sky-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-sky-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-sky-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-sky-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Email Address
                            </label>
                        </div>
                        <div className="relative h-12 w-full min-w-[300px] md:min-w-[400px]">
                            <input type='text' name='phone' required
                            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-gray-50 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-sky-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-sky-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-sky-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-sky-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Phone
                            </label>
                        </div>
                        <div>
                        <textarea name='message' rows="8" cols="30" placeholder='How can we help?' required
                        className='bg-gray-50 rounded-lg p-2.5 border border-gray-300 resize-none min-w-[300px] md:min-w-[500px] text-sm text-gray-900'></textarea>
                        </div>
                        <div className="flex justify-center mb-10">
                        <button type="submit" className='border-solid border-2 border-sky-400 bg-sky-500 text-white py-6 px-10 text-2xl rounded-lg transition-all duration-200 hover:bg-white hover:text-sky-500
                        '>Send Message</button>
                        </div>
                    </form>
                   
                </div>
                <div ref={thanksRef} className='text-black font-Afterglow text-center h-full flex flex-col justify-center gap-6 pb-20' style={{display: 'none'}}>
                    <h1 className='text-white font-Monarda text-4xl'>Thank you!</h1>
                    <p className='text-3xl'>We have recieved your message! Thank you for your interest in Maribel's Cleaning Service!</p>
                    <p className='text-3xl'>We will reply to your message as soon as we can. </p>
                    <p className='text-3xl'>Thank you!</p>
                </div>
            </div>
        </> 
    );
}
 
export default Contact;