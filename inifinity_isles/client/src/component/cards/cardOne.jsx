/* eslint-disable react/prop-types */
import { FaRegHeart } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import Stock from "../../sideFunction/stock";
import { useDispatch } from "react-redux";
import { AddToCart, GetCartProducts } from "../../../apps/action/cartAction";
import { useEffect } from "react";

const CardOne = ({ product }) => {
    const truncateText = (text, maxWords) => {
        let word = text.split(' ')
        if (word.length > maxWords) {
            return word.slice(0, maxWords).join(' ') + "..."
        } else {
            return text
        }
    }
    const title = product.title
    const description = product.description
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(AddToCart(product._id))
    }

    useEffect(() => {
        dispatch(GetCartProducts())
    }, [dispatch])
    return (
        <>
            <div className="relative group/item overflow-hidden w-60 h-80">
                <img src={product.images} className="object-cover object-top w-full h-full" />
                <div className="absolute top-0 bg-white bg-opacity-50 transform transition-transform translate-y-80 duration-500 w-60 h-80 group-hover/item:translate-y-0"></div>
                <div className="absolute bottom-0 p-2 transform transition-transform  translate-y-32 ease-linear duration-500 group-hover/item:translate-y-0">
                    <div className="text-xl font-[700]">{title&&truncateText(title, 4)}</div>
                    <div className="text-sm font-medium leading-[15px]">{description&&truncateText(description, 6)}</div>
                    <div className="border-b-2 border-black mt-2 mb-1 mr-1.5"></div>
                    <div className="flex items-center justify-between mr-1.5">
                        <div className="text-sm font-bold">{product.price}/- pkr</div>
                        <div className={`${product.stock === 0 ? 'bg-red-600 text-white' : 'bg-white'} text-xs font-bold  rounded py-0.5 px-3`}><Stock stock={product.stock} /></div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 m-1.5">
                    <FaRegHeart className="text-xl text-white" />
                </div>
                <div className="absolute top-1/3 right-0 left-0 flex justify-center">
                    <div className="group-hover/item:scale-100 border-2 border-black hover:border-white hover:text-white rounded-full transform transition-transform duration-500 p-1 mx-3 scale-0"><IoSearch className="text-xl" /></div>
                    <div className="group-hover/item:scale-100 border-2 border-black hover:border-white hover:text-white rounded-full transform transition-transform duration-500 delay-100 p-1 mx-3 scale-0" onClick={handleAddToCart}><FaPlus className="text-xl" /></div>
                </div>
            </div>
        </>
    )
}

export default CardOne
