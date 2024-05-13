import { IoIosArrowBack } from "react-icons/io";

const CarasolOne = () => {
    return (
        <>
            <div className="relative">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/2bbcfa99737217.5ef9be3dbb9a9.jpg" className="blur-[3px] w-full object-cover object-right sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh]" />
                <div className="absolute flex justify-between xl:w-full inset-0">
                    <div className="flex items-center bg-black text-white opacity-5 hover:opacity-100"><IoIosArrowBack className="text-xl" /></div>
                    <div className="flex items-center bg-black text-white opacity-5 hover:opacity-100"><IoIosArrowBack className="text-xl scale-[-1]" /></div>
                </div>
                <div className="absolute right-0 left-0 top-1/3">
                    <div className="flex flex-col items-center text-gray-800  font-extrabold bg-gray-100 tracking-wider rounded bg-opacity-70 text-xs mx-20 sm:rounded-xl sm:text-sm sm:mx-40 md:text-lg md:mx-60 md:p-2 lg:text-[25px] lg:mx-[300px] lg:p-3 xl:text-4xl"><span className="">Fancy Slider/Carasol here!!</span> <span className="text-blue-700">Coming Soon</span></div>
                </div>
            </div>
        </>
    )
}

export default CarasolOne