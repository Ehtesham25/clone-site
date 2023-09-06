
import { FaExchangeAlt, FaDiceD20, FaRegHandPointRight } from "react-icons/fa"

import Card from './Card'

const OurServices = () => {
    return (
        <div className='w-full bg-white py-10'>
            <div className='flex flex-col justify-center items-center py-4'>
                <p className='text-2xl text-btnloginColor font-semibold'>Our Services</p>
                <p className='w-[450px] text-center py-2'>All our accounting services are built around YOUR NEEDS in mind.Select option below to see our services for YOU</p>
                <div className='flex w-full px-16 items-center'>
                    <Card Icon={FaDiceD20} title="Accounting Services" />
                    <Card Icon={FaExchangeAlt} title="Tax Services" />
                    <Card Icon={FaRegHandPointRight} title="Company Secretarial" />
                </div>
            </div>
        </div>
    )
}

export default OurServices
