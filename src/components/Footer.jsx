import { FaMapMarkerAlt, FaMapPin, FaRegEnvelope, FaFacebookF, FaYoutube, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiPhone } from "react-icons/hi";

import { taxServices } from "./utils/data";
import auth from "../assets/auth.png"

const socialIcons = [FaFacebookF, FaYoutube, FaTwitter, FaInstagram, FaLinkedinIn]
const Footer = () => {
    return (
        <div className='w-full  p-16 bg-workSect '>
            <div className='flex w-full items-center justify-around'>
                <div className='w-72 flex flex-col items-start '>
                    <p className='text-2xl tracking-widest uppercase font-normal text-white text-center'>Naseems</p>
                    <p className='text-base font-normal text-gray-300 '>Naseems Accountants provide professional tax consultancy & accounting services to small, medium and large businesses in Birmingham, as well as the rest of United Kingdom.</p>
                </div>
                <div className='gap-2 flex flex-col items-start'>
                    <p className='text-white text-2xl capitalize'>Contact info</p>
                    <div className=' flex  gap-1 items-center text-gray-300'><FaMapMarkerAlt className='text-lg' />  104 Stoney Lane, Balsall Heath</div>
                    <div className=' flex gap-1 items-center text-gray-300'><FaMapPin className='text-lg' />Birmingham, B12 8AF</div>
                    <div className=' flex gap-2 items-center text-gray-300'><FaRegEnvelope className='text-lg' />info@naseems.co.uk</div>
                    <div className='flex gap-2 items-center text-gray-300'><HiPhone className='text-lg' />0121 771 4161</div>
                </div>
                <div>
                    <span className='text-white text-2xl capitalize'>Important Links</span>
                    <ul>
                        {taxServices.map((item) => (
                            <li className='text-base text-gray-300 cursor-pointer hover:text-white' key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className='flex flex-col items-center'>
                    <span className='text-white text-2xl capitalize'>Connect With Us</span>
                    <div className='flex gap-2 py-3'>
                        {socialIcons.map((Item) => (
                            <Item  className='text-xl text-gray-300 cursor-pointer hover:text-white' />
                        ))}
                    </div>
                    <img src={auth} className="object-contain w-20 rounded-md" />
                </div>

            </div>
        </div>
    )
}

export default Footer
