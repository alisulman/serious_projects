/* eslint-disable react/prop-types */
import Stock from '../sideFunction/stock';
import Ratings from "../sideFunction/rationg";
import IsNew from "../sideFunction/forNew";
import { Link } from "react-router-dom";

const truncateText = (text, maxWords) => {
    let word = text.split(' ')
    if (word.length > maxWords) {
        return word.slice(0, maxWords).join(' ') + "..."
    } else {
        return text
    }
}

export const CardOne = ({ product }) => {
    const stock = product.stock
    const rating = 4
    const title = product.title
    const description = product.description

    return (
        <>
            <Link to={`update-product/${product._id}`}>
                <div className="bg-white border border-gray-500 rounded-lg hover:shadow-xl cursor-pointer transition-all hover:scale-110 w-52 dark:bg-gray-800 dark:border-gray-700" >
                    <div className="relative">
                        <img className="rounded-t-md h-28 " src={product.images} />
                    </div>
                    <div className="flex items-center">
                        <div className={`flex justify-center items-center text-[10px] rounded-sm ml-2 my-1 px-5 font-medium ${stock > 15 ? "bg-green-300" : stock <= 15 && stock > 10 ? "bg-orange-400" : stock <= 10 && stock > 5 ? "bg-orange-400 text-white" : stock <= 5 && stock > 0 ? "bg-orange-600 text-white" : stock == 0 ? "bg-red-600 text-white" : null}`}><Stock stock={stock} /></div>

                        <div className="flex justify-center items-center text-[10px] text-white bg-indigo-400 rounded-sm px-2 mx-1"><IsNew dater={product.updatedAt} /></div>
                    </div>
                    <div className="px-2 py-0.5 h-[152px]">
                        <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">{title && truncateText(title, 3)}</h5>
                        <p className="text-xs mb-1 font-medium text-gray-700 dark:text-gray-400 h-9 ">{description && truncateText(description, 8)}</p>
                        <div className="flex items-center mt-2.5 my-1">
                            <Ratings rating={rating} />
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 rounded dark:bg-blue-200 dark:text-blue-800 ml-1.5">
                                {rating}
                            </span>
                        </div>
                        <div className="uppercase inline text-[11px] text-white tracking-wider font-medium px-2 rounded-sm bg-blue-500">
                            {product.category && product.category}
                        </div>
                        <div className="flex justify-between items-center dark:text-white my-2.5">
                            <div className="font-bold tracking-wide text-sm">
                                {product.price && product.price} pkr/-
                            </div>
                            {/* <div className="inline-flex items-center px-3 py-0.5 text-xs font-bold text-center text-blue-950 bg-blue-400 border border-blue-950 rounded-[4px] hover:bg-blue-600 hover:text-white hover:border hover:border-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Add to Cart
                        </div> */}
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

