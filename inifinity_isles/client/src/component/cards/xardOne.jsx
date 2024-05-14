import { FaRegHeart } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

const CardOne = () => {
    return (
        <>
            <div className="relative group/item overflow-hidden">
                <img src="https://i.pinimg.com/736x/0c/7f/91/0c7f91d5552ee4b454636538b692e673.jpg" className="object-cover object-top w-60 h-80" />
                <div className="absolute top-0 bg-white bg-opacity-50 transform transition-transform translate-y-80 duration-500 w-60 h-80 group-hover/item:translate-y-0"></div>
                <div className="absolute bottom-0 p-2 transform transition-transform  translate-y-28 ease-linear duration-500 group-hover/item:translate-y-0">
                    <div className="text-2xl font-[700]">Lorem Ipsum</div>
                    <div className="text-sm font-medium leading-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    <div className="border-b-2 border-black mt-2 mb-1"></div>
                    <div className="flex items-center justify-between">
                        <div className="text-sm font-bold">1000/- pkr</div>
                        <div className="text-xs font-bold bg-white rounded py-0.5 px-3">Limited Stock</div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 m-1.5">
                    <FaRegHeart className="text-xl text-white" />
                </div>
                <div className="absolute top-1/3 right-0 left-0 flex justify-center">
                    <div className="group-hover/item:scale-100 border-2 border-black hover:border-white hover:text-white rounded-full transform transition-transform duration-500 p-1 mx-3 scale-0"><IoSearch className="text-xl" /></div>
                    <div className="group-hover/item:scale-100 border-2 border-black hover:border-white hover:text-white rounded-full transform transition-transform duration-500 delay-100 p-1 mx-3 scale-0"><FaPlus className="text-xl" /></div>
                </div>
            </div>
        </>
    )
}

export default CardOne
