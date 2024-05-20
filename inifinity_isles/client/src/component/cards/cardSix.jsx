/* eslint-disable react/prop-types */
import { FaHeart } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";


const CardSix = ({ item }) => {
    const truncateText = (text, maxWords) => {
        let word = text.split(' ')
        if (word.length > maxWords) {
            return word.slice(0, maxWords).join(' ') + "..."
        } else {
            return text
        }
    }
    const title = item?.title
    const description = item?.description
    return (
        <>
            <div className='flex justify-between my-5 cursor-pointer'>
                <div className='relative overflow-hidden group/item'>
                    <img src={item?.images} className='w-40 h-60 rounded-lg object-cover' />
                    <div className='group-hover/item:translate-y-0 absolute top-0 w-full h-full bg-black rounded-lg bg-opacity-50 transform translate-y-60 ease-in-out transition-transform duration-[1s]'></div>
                    <div className='group-hover/item:translate-y-0 absolute bottom-0 text-white p-2 translate-y-24 transition-transform duration-[1s] ease-in-out'>
                        <div className='text-xl font-medium hover:underline'>{truncateText(title, 3)}</div>
                        <div className='text-xs'>{truncateText(description, 6)}</div>
                        <div className='border-b my-1'></div>
                        <div className='text-sm'>{item?.price}/- pkr</div>
                    </div>
                    <FaHeart className='group-hover/item:scale-100 group-hover/item:opacity-100 absolute top-0 right-0 text-lg text-red-600 m-2 scale-0 transition-transform ease-linear duration-[0.2s] delay-700 opacity-0' />
                    <div className='absolute top-[40%] left-0 right-0 flex justify-center items-center text-white text-2xl'>
                        <span className='group-hover/item:scale-100 border-2 border-white rounded-full mx-3 p-1 transition-transform ease-in-out duration-[0.2s] delay-300 scale-0 hover:border-black hover:text-black'><IoSearch className='text-lg font-medium' /></span>
                        <span className='group-hover/item:scale-100 border-2 border-white rounded-full mx-3 p-1 transition-transform ease-in-out duration-[0.2s] delay-[0.4s] hover:border-black hover:text-black scale-0'><FaPlus className='text-lg font-medium' /></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardSix
