/* eslint-disable react/prop-types */

import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

const Ratings = ({ rating }) => {
    return (
        <div className='flex'>
            {rating > 4.8 ? (
                <>
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                </>
            ) : rating >= 4.6 && rating <= 4.8 ? (
                <>
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <div className='flex items-center'>
                        <FaStarHalf className='text-yellow-300 -mr-4' />
                        <FaStarHalf className='text-gray-300 scale-x-[-1]' />
                    </div>
                </>
            ) : rating >= 4 && rating < 4.6 ? (
                <>
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-gray-300' />
                </>
            ) : rating >= 3.5 && rating < 4 ? (
                <>
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <div className='flex items-center'>
                        <FaStarHalf className='text-yellow-300 -mr-4' />
                        <FaStarHalf className='text-gray-300 scale-x-[-1]' />
                    </div>
                    <FaStar className='text-gray-300' />
                </>
            ) : rating >= 3 && rating < 3.5 ? (
                <>
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-gray-300' />
                    <FaStar className='text-gray-300' />
                </>
            ) : rating >= 2.5 && rating < 3 ? (
                <>
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <div className='flex items-center'>
                        <FaStarHalf className='text-yellow-300 -mr-4' />
                        <FaStarHalf className='text-gray-300 scale-x-[-1]' />
                    </div>
                    <FaStar className='text-gray-300' />
                    <FaStar className='text-gray-300' />
                </>
            ) : rating >= 2 && rating < 2.5 ? (
                <>
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-gray-300' />
                    <FaStar className='text-gray-300' />
                    <FaStar className='text-gray-300' />
                </>
            ) : rating >= 1.5 && rating < 2 ? (
                <>
                    <FaStar className='text-yellow-300' />
                    <div className='flex items-center'>
                        <FaStarHalf className='text-yellow-300 -mr-4' />
                        <FaStarHalf className='text-gray-300 scale-x-[-1]' />
                    </div>
                    <FaStar className='text-gray-300' />
                    <FaStar className='text-gray-300' />
                    <FaStar className='text-gray-300' />
                </>
            ) : rating >= 1 && rating < 1.5 ? (
                <>
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-gray-300' />
                    <FaStar className='text-gray-300' />
                    <FaStar className='text-gray-300' />
                    <FaStar className='text-gray-300' />
                </>
            ) : rating > 0 && rating < 1 ? (
                <>
                    <div className='flex items-center'>
                        <FaStarHalf className='text-yellow-300 -mr-4' />
                        <FaStarHalf className='text-gray-300 scale-x-[-1]' />
                    </div>
                    <FaStar className='text-gray-300' />
                    <FaStar className='text-gray-300' />
                    <FaStar className='text-gray-300' />
                    <FaStar className='text-gray-300' />
                </>
            ) : rating === 0 ? (
                <>
                    <FaStar className='text-gray-300' />
                    <FaStar className='text-gray-300' />
                    <FaStar className='text-gray-300' />
                    <FaStar className='text-gray-300' />
                    <FaStar className='text-gray-300' />
                </>
            ) : null
            }
        </div>
    )
}

export default Ratings