import { work } from "./utils/data"

const Work = () => {
    return (
        <div className='w-full bg-workSect px-16 py-10 my-10'>
            <div className='flex justify-center flex-col items-center '>
                <p className='font-semibold text-3xl text-white'>Who do we work with?</p>
                <p className='font-normal text-base text-white'>We support a wide range of clients from various sectors</p>
                <div className='flex py-0 items-center justify-around w-full'>
                    {work.map((item, index) => (
                        <div key={index} className='flex  flex-col items-center '>
                            <img src={item.img} className=" w-80 object-contain rounded-xl" />
                            <div className='-mt-3 flex flex-col items-center '>
                                <span className='text-white text-lg bg-btnloginColor py-1 px-7 text-center rounded-lg'>{item.title}</span>
                                <ul className='flex flex-col items-start' >
                                    {item.listItem.map((list, index) => (
                                        <li key={index}>{list}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Work
