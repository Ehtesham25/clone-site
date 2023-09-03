

const Header = () => {
    return (
        <div className='w-full -z-[101] h-[calc(100vh-80px)] bg-header flex items-center px-16 backdrop-blur-3xl'>
            <div className='grid grid-cols-2'>
                <div className='flex flex-col gap-2 '>
                    <p className='text-[4rem] leading-[4rem] text-white'>Proactive Accountants at their best</p>
                    <p className='text-base text-white '>we are dynamic firm of charted cetrified accountants providing tax and adivisory services to businesses and indivisuals across the UK.</p>
                    <div className='flex gap-2 my-4'>
                        <button className='rounded-full text-center bg-white text-btnloginColor font-semibold py-3 px-6 hover:bg-gray-800 hover:text-white transition-all ease-in-out duration-300' >Book a Free Meeting</button>
                        <button className='rounded-full text-center bg-white text-btnloginColor font-semibold py-3 px-5  hover:bg-gray-800 hover:text-white transition-all ease-in-out duration-300' >Get a Quote</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
