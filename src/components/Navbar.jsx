import React from 'react'
import { HiPhone, HiChevronDown } from "react-icons/hi"

import logo from "../assets/logo.png"
import Services from './Services'

const Navbar = () => {
    return (
        <div className='flex justify-center'>
            <div className='w-full px-16 py-1 flex justify-between items-center h-20'>
                <img src={logo} className="w-24 object-contain" />
                <ul className=' hidden list-none md:flex'>
                    <li className='cursor-pointer  hover:text-btnloginColor capitalize px-3 text-base font-semibold' >home</li>
                    <li className='cursor-pointer  hover:text-btnloginColor capitalize px-3 text-base font-semibold' >about</li>
                    <li className=' group items-center  flex cursor-pointer relative  hover:text-btnloginColor capitalize px-3 text-base font-semibold' >get a quote
                        <HiChevronDown />
                        <div className='z-[101] absolute top-7 bg-primary px-4 rounded-md py-5 hidden group-hover:block'>
                            <Services />
                        </div>
                    </li>
                    <li className='cursor-pointer  hover:text-btnloginColor capitalize px-3 text-base font-semibold' >service</li>
                    <li className='cursor-pointer  hover:text-btnloginColor capitalize px-3 text-base font-semibold' >knowledge</li>
                    <li className='cursor-pointer  hover:text-btnloginColor capitalize px-3 text-base font-semibold' >contact</li>
                </ul>
                <div className='gap-3 flex'>
                    <button className='text-center font-medium py-1 px-5 text-white rounded-full bg-btnloginColor text-lg  '>Client Login</button>
                    <div className='text-center hidden md:flex  gap-2 items-center bg-black font-medium  px-7 text-btnColor cursor-pointer rounded-full hover:drop-shadow-lg hover:bg-gray-700 transition-all ease-out duration-150' > <HiPhone className='text-xl text-white' /> +912345789</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar