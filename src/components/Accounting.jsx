import accounting from "../assets/accounting.png";
const Accounting = () => {
    return (
        <div className='w-full' >
            <div className='grid grid-cols-2 py-10 px-16'>
                <div className='flex flex-col  '>
                    <p className='text-2xl text-btnloginColor font-semibold'>Your growth is important to us.</p>
                    <p className='text-base text-black py-3 font-semibold'>Businesses need more than just accountants to remain competitive.</p>
                    <p className='font-base font-normal tracking-wide leading-7 text-justify'>The importance of business advice has increased tremendously due to businesses becoming more and more competitive.With increased competition levels, we at Naseems Accountants understand your business and provide you with sound advice to aid your decision-making. <br /><br />
                        Whether you need business advice on corporate structure, cost reduction strategies or tax planning, you can count on Naseems Accountants to provide you with sound business advice. <br /><br />
                        Our dedicated accountants are on hand to provide you with comprehensive advice for your business.</p>
                    <div className='flex gap-2 my-4'>
                        <button className='rounded-full w-auto  text-center bg-btnloginColor text-white font-semibold py-3 px-6 hover:drop-shadow-lg transition-all ease-in-out duration-300' >Book a Free Meeting</button>
                        <button className='rounded-full w-auto  text-center bg-btnloginColor text-white font-semibold py-3 px-5 hover:drop-shadow-lg transition-all ease-in-out duration-300' >Get a Quote</button>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={accounting} alt="Introduction" className='w-[500px] object-contain' />
                </div>
            </div>
        </div>
    )
}

export default Accounting;
