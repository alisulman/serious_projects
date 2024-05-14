import item_1 from '../../../public/assets/item_1.jpg'
import item_2 from '../../../public/assets/item_2.jpg'
import item_3 from '../../../public/assets/item_3.jpg'
import item_4 from '../../../public/assets/item_4.jpg'
import item_5 from '../../../public/assets/item_5.jpg'
import { IoIosArrowBack } from "react-icons/io";


const TopProducts = () => {
    return (
        <>
            <div className='relative'>
                <div className="text-3xl font-medium my-5">Top Rating Products: </div>
                <div className="relative flex justify-between my-5 cursor-pointer blur-[5px]">
                    <img src={item_1} className='object-cover xl:w-52 scale-75 hover:shadow-2xl' />
                    <img src={item_2} className='object-cover xl:w-52 scale-90 hover:shadow-2xl' />
                    <img src={item_3} className='object-cover xl:w-52 hover:shadow-2xl' />
                    <img src={item_4} className='object-cover xl:w-52 scale-90 hover:shadow-2xl' />
                    <img src={item_5} className='object-cover xl:w-52 scale-75 hover:shadow-2xl' />
                    <div className='absolute top-[45%] flex justify-between items-center w-full'>
                        <div className='bg-white border border-gray-300 rounded-full p-3'><IoIosArrowBack className='text-lg' /></div>
                        <div className='bg-white border border-gray-300 rounded-full p-3'><IoIosArrowBack className='text-xl scale-[-1]' /></div>
                    </div>
                </div>
                <div className="absolute right-0 left-0 top-1/3">
                    <div className="flex flex-col items-center text-gray-800  font-extrabold bg-gray-100 tracking-wider rounded bg-opacity-70 text-xs mx-20 sm:rounded-xl sm:text-sm sm:mx-40 md:text-lg md:mx-60 md:p-2 lg:text-[25px] lg:mx-[300px] lg:p-3 xl:text-4xl"><span className="">Fancy Slider/Carasol here!!</span> <span className="text-blue-700">Coming Soon</span></div>
                </div>
            </div>
        </>
    )
}

export default TopProducts
