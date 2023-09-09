import { accountServices, taxServices, companySec } from "./utils/data";

const Services = () => {
    return (
        <div className='flex w-[600px] items-center justify-between' >
            <div className='flex flex-col '>
                <h2 className='uppercase  text-gray-500' >ACCOUNTING SERVICES</h2>
                <ul className=' pt-4 gap-2 flex flex-col'>
                    {accountServices.map((item, index) => (
                        <li key={index} className='list-none text-black capitalize cursor-pointer font-normal hover:text-blue-700 '>{item}</li>
                    ))}
                </ul>
            </div>
            <div className='flex flex-col '>
                <h2 className='uppercase  text-gray-500' >tax SERVICES</h2>
                <ul className=' pt-4 gap-2 flex flex-col'>
                    {taxServices.map((item, index) => (
                        <li key={index} className='list-none text-black capitalize cursor-pointer font-normal hover:text-blue-700 '>{item}</li>
                    ))}
                </ul>
            </div>
            <div className='flex flex-col'>
                <h2 className='uppercase  text-gray-500' >COMPANY SECRETARIAL</h2>
                <ul className=' pt-4 gap-2 flex flex-col'>
                    {companySec.map((item, index) => (
                        <li key={index} className='list-none text-black capitalize cursor-pointer font-normal hover:text-blue-700 '>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Services
