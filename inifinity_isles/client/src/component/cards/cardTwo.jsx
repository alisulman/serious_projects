/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Stock from "../../sideFunction/stock";
import IsNew from "../../sideFunction/forNew";
import Ratings from "../../sideFunction/rationg";
import { AiFillDelete } from "react-icons/ai";
import { MdEditDocument } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import TransitionsModal from '../models'

const truncateText = (text, maxWords) => {
    let word = text.split(' ')
    if (word.length > maxWords) {
        return word.slice(0, maxWords).join(' ') + "..."
    } else {
        return text
    }
}

const CardTwo = ({ product }) => {
    const [descriptionLimit, setDescriptionLimit] = useState(8);
    const [titleLimit, setTitleLimit] = useState(3);
    const title = product.title
    const description = product.description
    const category = product.category.category
    const rating = product.ratings
    const stock = product.stock
    const modelRef = useRef(null)
    const handleResize = () => {
        const width = window.innerWidth;
        if (width < 640) {
            setTitleLimit(2)
            setDescriptionLimit(3);
        } else if (width >= 640 && width < 768) {
            setTitleLimit(2)
            setDescriptionLimit(3);
        } else if (width >= 768 && width < 1024) {
            setTitleLimit(2)
            setDescriptionLimit(4);
        } else if (width >= 1024 && width < 1280) {
            setTitleLimit(3);
            setDescriptionLimit(5);
        } else if (width >= 1280 && width <= 1400) {
            setTitleLimit(3);
            setDescriptionLimit(8);
        } else {
            setTitleLimit(10);
            setDescriptionLimit(10);
        }
    };
    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <>

            <div className="relative flex bg-white border border-gray-500 rounded-lg hover:shadow-xl cursor-pointer transition-all hover:scale-105 w-full">
                <div className="relative w-2/5">
                    <img className=" rounded-l-md w-full xl:h-full object-cover object-center" src={product?.images} />
                </div>
                <div className="px-0.5 py-0.5 w-[60%] h-12 sm:px-2 sm:h-[59px] md:h-[75px] lg:h-[110px] xl:h-[152px]">
                    <h5 className="font-bold tracking-tight text-gray-900 text-[8px] sm:text-[10px] md:text-[11px] lg:text-xs xl:text-sm">{title && truncateText(title, titleLimit)}</h5>
                    <p className="font-medium text-gray-700 text-[6px] sm:h-0 md:h-1 lg:h-5 lg:text-[11px] xl:h-9 xl:text-xs ">{description && truncateText(description, descriptionLimit)}</p>
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="flex items-center mt-0 sm:mt-2 md:mt-2.5 my-1">
                                <Ratings rating={rating} style='text-[6px] sm:text-[9px] md:text-[10px] lg:text-sm xl:text-lg' />
                                <span className="bg-blue-100 text-blue-800 ml-0.5 text-[5px] px-[1px] sm:text-[8px] md:ml-1 md:px-1 md:text-[7px] lg:text-xs lg:px-2 lg:ml-1.5 font-semibold  rounded-sm md:rounded ">
                                    {rating}
                                </span>
                            </div>
                            <div className="relative -top-4 uppercase inline text-white tracking-wider font-medium px-2 rounded-sm bg-blue-500 text-[5px] sm:-top-3.5 sm:text-[6px] md:-top-3 md:text-[7px] lg:text-[9px] xl:text-[11px] lg:-top-2 xl:mt-0">
                                {category}
                            </div>
                        </div>
                        <div className="flex -mt-4 sm:mt-0 lg:gap-1 xl:gap-2">
                            <Link to={`/dashboard/vendor/update-product/${product?.category?.category}/${product._id}`}>
                                <div className="relative group/item">
                                    <MdEditDocument className=" text-blue-600 text-[9px] sm:text-[10px] md:text-sm lg:text-xl xl:text-2xl" />
                                    <div className="absolute -top-4 text-[9px] font-bold w-20 hidden group-hover/item:block">Edit Product</div>
                                </div>
                            </Link>
                            <div className="relative group/item">
                                <AiFillDelete className=" text-red-600 text-[9px] sm:text-[10px] md:text-sm lg:text-xl xl:text-2xl" onClick={() => modelRef.current.click()} />
                                <div className="absolute -top-4 -left-10  text-[9px] font-bold w-20 hidden group-hover/item:block">Delete Product</div>
                            </div>
                            <TransitionsModal referance={modelRef} item={product} />
                        </div>
                    </div>
                    <div className="flex justify-between items-center -mt-6 sm:-mt-[21px] md:-mt-3.5 lg:-mt-3 xl:my-2.5">
                        <div className="font-bold tracking-wide text-[5px] sm:text-[7px] md:text-[9px] lg:text-xs xl:text-sm">
                            $ {product?.price}
                        </div>
                        <div className={`flex justify-center items-center text-[5px] sm:text-[6px] md:text-[7px] lg:text-[9px] xl:text-[10px] rounded-sm ml-2 my-1 font-medium ${stock > 15 ? "bg-green-300 px-1.5" : stock <= 15 && stock > 10 ? "bg-orange-400 px-3" : stock <= 10 && stock > 5 ? "bg-orange-400 text-white px-5" : stock <= 5 && stock > 0 ? "bg-orange-600 text-white px-1 sm:px-2 md:px-3 lg:px-5" : stock == 0 ? "bg-red-600 text-white px-5" : null}`}><Stock stock={stock} /></div>
                    </div>
                </div>
                <div className="absolute -top-0.5 -left-1.5  flex justify-center items-center  text-white bg-indigo-400 rounded-full mx-1 px-1 text-[6px] sm:px-1 sm:-top-1 sm:text-[7px] md:-top-1 md:text-[8px] md:px-2 lg:-top-2 lg:text-[9px] xl:text-[10px]"><IsNew dater={product.updatedAt} /></div>
            </div>
        </>
    )
}

export default CardTwo