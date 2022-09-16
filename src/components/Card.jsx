import React from 'react'

import { accountServices } from "./utils/data"

const Card = ({ Icon, title }) => {
    return (
        <div className='bg-card p-3 w-96 mr-7 my-3 z     border-l-4 border-btnloginColor '>
            <div className='flex gap-2 items-center'> <Icon className='text-btnloginColor text-3xl' /><p className='text-2xl text-btnloginColor font-semibold'>{title}</p></div>
            <ul className='p-2'>
                {accountServices.map((item, index) => (
                    <li className='cursor-pointer text-btnloginColor hover:text-blue-500 transition-all ease-out duration-150 ' key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Card