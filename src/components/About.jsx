import intro from "../assets/intro.png";
const About = () => {
    return (
        <div className='w-full px-16' >
            <div className='grid grid-cols-2 py-10'>
                <div className='flex items-center'>
                    <img src={intro} alt="Introduction" className='w-[600px] object-contain' />
                </div>
                <div className='flex flex-col '>
                    <p className='text-2xl text-btnloginColor font-semibold'>Would you like to find someone who can be more than just an accountant?</p>
                    <p className='text-base text-black py-3 font-semibold'>As accountants, we take care of your compliance whilst allowing you to concentrate on running and growing your business.</p>
                    <p className='font-base font-normal tracking-wide leading-7 text-justify'>Many people feel that accountants are just there to do the number crunching and provide reports. An accountant’s professional role is to advise and assist in the effective management of a company. Accountants play multiple roles in a business: gathering information, reporting financial results, and preparing taxes. Accountants also help businesses establish internal controls and identify risks and opportunities through research and analysis. <br /><br />
                        We use award-winning software designed for accountants to provide our clients with real-time insights into their business performance. We also provide clients with access to software like Xero to ensure that they are in control of their business and its financials, not just the accountant. <br /><br />
                        We believe in high customer satisfaction and ensure you have access to a dedicated qualified accountant when you need help and support.</p>
                    <div className='w-auto my-4'>
                        <button className='rounded-full w-auto  text-center bg-btnloginColor text-white font-semibold py-3 px-6 hover:drop-shadow-lg transition-all ease-in-out duration-300'>Book a Free Meeting</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default About;
