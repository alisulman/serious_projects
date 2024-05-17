/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Stock from "../../sideFunction/stock";
import IsNew from "../../sideFunction/forNew";
import Ratings from "../../sideFunction/rationg";

const truncateText = (text, maxWords) => {
    let word = text.split(' ')
    if (word.length > maxWords) {
        return word.slice(0, maxWords).join(' ') + "..."
    } else {
        return text
    }
}

const CardTwo = ({ product }) => {
    const title = product.title
    const description = product.description
    const category = product.category.category
    const rating = product.ratings
    const stock = product.stock
    console.log(product.images)
    return (
        <>
            <Link to=''>
                <div className="relative flex bg-white border border-gray-500 rounded-lg hover:shadow-xl cursor-pointer transition-all hover:scale-110 w-full dark:bg-gray-800 dark:border-gray-700" >
                    <div className="relative w-2/5">
                        <img className=" rounded-l-md w-full h-full object-cover object-center" src={product.images} />
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
                            {category}
                        </div>
                        <div className="flex justify-between items-center dark:text-white my-2.5">
                            <div className="font-bold tracking-wide text-sm">
                                {product?.price} pkr/-
                            </div>
                            <div className={`flex justify-center items-center text-[10px] rounded-sm ml-2 my-1 font-medium ${stock > 15 ? "bg-green-300 px-1.5" : stock <= 15 && stock > 10 ? "bg-orange-400 px-3" : stock <= 10 && stock > 5 ? "bg-orange-400 text-white px-5" : stock <= 5 && stock > 0 ? "bg-orange-600 text-white px-5" : stock == 0 ? "bg-red-600 text-white px-5" : null}`}><Stock stock={stock} /></div>
                        </div>
                    </div>
                    <div className="absolute -top-2 -left-1.5  flex justify-center items-center text-[10px] text-white bg-indigo-400 rounded-full px-2 mx-1"><IsNew dater={product.updatedAt} /></div>
                </div>
            </Link>
        </>
    )
}

export default CardTwo