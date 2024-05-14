import item_6 from '../../../public/assets/item_6.jpg'
import item_7 from '../../../public/assets/item_7.jpg'
import item_8 from '../../../public/assets/item_8.jpg'
import item_9 from '../../../public/assets/item_9.jpg'
import item_10 from '../../../public/assets/item_10.jpg'
import item_11 from '../../../public/assets/item_11.jpg'
import { FaHeart } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";


const FavouriteItems = () => {
    return (
        <>
            <div className="my-5">
                <div className="text-3xl font-medium">All Your Favourites:</div>
                <div className='flex justify-between my-5 cursor-pointer'>
                    <div className='relative overflow-hidden group/item'>
                        <img src={item_6} className='w-40 h-60 rounded-lg' />
                        <div className='group-hover/item:translate-y-0 absolute top-0 w-full h-full bg-black rounded-lg bg-opacity-50 transform translate-y-60 ease-in-out transition-transform duration-[1s]'></div>
                        <div className='group-hover/item:translate-y-0 absolute bottom-0 text-white p-2 translate-y-24 transition-transform duration-[1s] ease-in-out'>
                            <div className='text-xl font-medium hover:underline'>Lorem Ipsum</div>
                            <div className='text-xs'>Lorem ipsum dolor sit amet consectetur.</div>
                            <div className='border-b my-1'></div>
                            <div className='text-sm'>1000/- pkr</div>
                        </div>
                        <FaHeart className='group-hover/item:scale-100 group-hover/item:opacity-100 absolute top-0 right-0 text-lg text-red-600 m-2 scale-0 transition-transform ease-linear duration-[0.2s] delay-700 opacity-0' />
                        <div className='absolute top-[40%] left-0 right-0 flex justify-center items-center text-white text-2xl'>
                            <span className='group-hover/item:scale-100 border-2 border-white rounded-full mx-3 p-1 transition-transform ease-in-out duration-[0.2s] delay-300 scale-0 hover:border-black hover:text-black'><IoSearch className='text-lg font-medium' /></span>
                            <span className='group-hover/item:scale-100 border-2 border-white rounded-full mx-3 p-1 transition-transform ease-in-out duration-[0.2s] delay-[0.4s] hover:border-black hover:text-black scale-0'><FaPlus className='text-lg font-medium' /></span>
                        </div>
                    </div>
                    <div className='relative overflow-hidden group/item'>
                        <img src={item_7} className='w-40 h-60 rounded-lg' />
                        <div className='group-hover/item:translate-y-0 absolute top-0 w-full h-full bg-black rounded-lg bg-opacity-50 transform translate-y-60 ease-in-out transition-transform duration-[1s]'></div>
                        <div className='group-hover/item:translate-y-0 absolute bottom-0 text-white p-2 translate-y-24 transition-transform duration-[1s] ease-in-out'>
                            <div className='text-xl font-medium hover:underline'>Lorem Ipsum</div>
                            <div className='text-xs'>Lorem ipsum dolor sit amet consectetur.</div>
                            <div className='border-b my-1'></div>
                            <div className='text-sm'>1000/- pkr</div>
                        </div>
                        <FaHeart className='group-hover/item:scale-100 group-hover/item:opacity-100 absolute top-0 right-0 text-lg text-red-600 m-2 scale-0 transition-transform ease-linear duration-[0.2s] delay-700 opacity-0' />
                        <div className='absolute top-[40%] left-0 right-0 flex justify-center items-center text-white text-2xl'>
                            <span className='group-hover/item:scale-100 border-2 border-white rounded-full mx-3 p-1 transition-transform ease-in-out duration-[0.2s] delay-300 scale-0 hover:border-black hover:text-black'><IoSearch className='text-lg font-medium' /></span>
                            <span className='group-hover/item:scale-100 border-2 border-white rounded-full mx-3 p-1 transition-transform ease-in-out duration-[0.2s] delay-[0.4s] hover:border-black hover:text-black scale-0'><FaPlus className='text-lg font-medium' /></span>
                        </div>
                    </div>
                    <div className='relative overflow-hidden group/item'>
                        <img src={item_8} className='w-40 h-60 rounded-lg' />
                        <div className='group-hover/item:translate-y-0 absolute top-0 w-full h-full bg-black rounded-lg bg-opacity-50 transform translate-y-60 ease-in-out transition-transform duration-[1s]'></div>
                        <div className='group-hover/item:translate-y-0 absolute bottom-0 text-white p-2 translate-y-24 transition-transform duration-[1s] ease-in-out'>
                            <div className='text-xl font-medium hover:underline'>Lorem Ipsum</div>
                            <div className='text-xs'>Lorem ipsum dolor sit amet consectetur.</div>
                            <div className='border-b my-1'></div>
                            <div className='text-sm'>1000/- pkr</div>
                        </div>
                        <FaHeart className='group-hover/item:scale-100 group-hover/item:opacity-100 absolute top-0 right-0 text-lg text-red-600 m-2 scale-0 transition-transform ease-linear duration-[0.2s] delay-700 opacity-0' />
                        <div className='absolute top-[40%] left-0 right-0 flex justify-center items-center text-white text-2xl'>
                            <span className='group-hover/item:scale-100 border-2 border-white rounded-full mx-3 p-1 transition-transform ease-in-out duration-[0.2s] delay-300 scale-0 hover:border-black hover:text-black'><IoSearch className='text-lg font-medium' /></span>
                            <span className='group-hover/item:scale-100 border-2 border-white rounded-full mx-3 p-1 transition-transform ease-in-out duration-[0.2s] delay-[0.4s] hover:border-black hover:text-black scale-0'><FaPlus className='text-lg font-medium' /></span>
                        </div>
                    </div>
                    <div className='relative overflow-hidden group/item'>
                        <img src={item_9} className='w-40 h-60 rounded-lg' />
                        <div className='group-hover/item:translate-y-0 absolute top-0 w-full h-full bg-black rounded-lg bg-opacity-50 transform translate-y-60 ease-in-out transition-transform duration-[1s]'></div>
                        <div className='group-hover/item:translate-y-0 absolute bottom-0 text-white p-2 translate-y-24 transition-transform duration-[1s] ease-in-out'>
                            <div className='text-xl font-medium hover:underline'>Lorem Ipsum</div>
                            <div className='text-xs'>Lorem ipsum dolor sit amet consectetur.</div>
                            <div className='border-b my-1'></div>
                            <div className='text-sm'>1000/- pkr</div>
                        </div>
                        <FaHeart className='group-hover/item:scale-100 group-hover/item:opacity-100 absolute top-0 right-0 text-lg text-red-600 m-2 scale-0 transition-transform ease-linear duration-[0.2s] delay-700 opacity-0' />
                        <div className='absolute top-[40%] left-0 right-0 flex justify-center items-center text-white text-2xl'>
                            <span className='group-hover/item:scale-100 border-2 border-white rounded-full mx-3 p-1 transition-transform ease-in-out duration-[0.2s] delay-300 scale-0 hover:border-black hover:text-black'><IoSearch className='text-lg font-medium' /></span>
                            <span className='group-hover/item:scale-100 border-2 border-white rounded-full mx-3 p-1 transition-transform ease-in-out duration-[0.2s] delay-[0.4s] hover:border-black hover:text-black scale-0'><FaPlus className='text-lg font-medium' /></span>
                        </div>
                    </div>
                    <div className='relative overflow-hidden group/item'>
                        <img src={item_10} className='w-40 h-60 rounded-lg' />
                        <div className='group-hover/item:translate-y-0 absolute top-0 w-full h-full bg-black rounded-lg bg-opacity-50 transform translate-y-60 ease-in-out transition-transform duration-[1s]'></div>
                        <div className='group-hover/item:translate-y-0 absolute bottom-0 text-white p-2 translate-y-24 transition-transform duration-[1s] ease-in-out'>
                            <div className='text-xl font-medium hover:underline'>Lorem Ipsum</div>
                            <div className='text-xs'>Lorem ipsum dolor sit amet consectetur.</div>
                            <div className='border-b my-1'></div>
                            <div className='text-sm'>1000/- pkr</div>
                        </div>
                        <FaHeart className='group-hover/item:scale-100 group-hover/item:opacity-100 absolute top-0 right-0 text-lg text-red-600 m-2 scale-0 transition-transform ease-linear duration-[0.2s] delay-700 opacity-0' />
                        <div className='absolute top-[40%] left-0 right-0 flex justify-center items-center text-white text-2xl'>
                            <span className='group-hover/item:scale-100 border-2 border-white rounded-full mx-3 p-1 transition-transform ease-in-out duration-[0.2s] delay-300 scale-0 hover:border-black hover:text-black'><IoSearch className='text-lg font-medium' /></span>
                            <span className='group-hover/item:scale-100 border-2 border-white rounded-full mx-3 p-1 transition-transform ease-in-out duration-[0.2s] delay-[0.4s] hover:border-black hover:text-black scale-0'><FaPlus className='text-lg font-medium' /></span>
                        </div>
                    </div>
                    <div className='relative overflow-hidden group/item'>
                        <img src={item_11} className='w-40 h-60 rounded-lg object-cover' />
                        <div className='group-hover/item:translate-y-0 absolute top-0 w-full h-full bg-black rounded-lg bg-opacity-50 transform translate-y-60 ease-in-out transition-transform duration-[1s]'></div>
                        <div className='group-hover/item:translate-y-0 absolute bottom-0 text-white p-2 translate-y-24 transition-transform duration-[1s] ease-in-out'>
                            <div className='text-xl font-medium hover:underline'>Lorem Ipsum</div>
                            <div className='text-xs'>Lorem ipsum dolor sit amet consectetur.</div>
                            <div className='border-b my-1'></div>
                            <div className='text-sm'>1000/- pkr</div>
                        </div>
                        <FaHeart className='group-hover/item:scale-100 group-hover/item:opacity-100 absolute top-0 right-0 text-lg text-red-600 m-2 scale-0 transition-transform ease-linear duration-[0.2s] delay-700 opacity-0' />
                        <div className='absolute top-[40%] left-0 right-0 flex justify-center items-center text-white text-2xl'>
                            <span className='group-hover/item:scale-100 border-2 border-white rounded-full mx-3 p-1 transition-transform ease-in-out duration-[0.2s] delay-300 scale-0 hover:border-black hover:text-black'><IoSearch className='text-lg font-medium' /></span>
                            <span className='group-hover/item:scale-100 border-2 border-white rounded-full mx-3 p-1 transition-transform ease-in-out duration-[0.2s] delay-[0.4s] hover:border-black hover:text-black scale-0'><FaPlus className='text-lg font-medium' /></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FavouriteItems
