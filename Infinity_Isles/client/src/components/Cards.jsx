/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'

const Card = ({ product }) => {
    // simple logics
    const truncateText = (text, maxWords) => {
        let word = text.split(' ')
        if (word.length > maxWords) {
            return word.slice(0, maxWords).join(' ') + " ..."
        } else {
            return text
        }
    }

    return (
        <>
            <div className="max-w-[250px] bg-white border border-gray-500 rounded-lg shadow-sm shadow-gray-600 overflow-hidden dark:bg-gray-800 dark:border-gray-700 hover:transform hover:scale-105 hover:shadow-md hover:shadow-gray-800">
                <div>
                    <div>
                        <img className="border-b border-white w-72 h-40 rounded-t-lg mb-2" src={product.thumbnail ? product.thumbnail : "https://dummyjson.com/image/400x200/111?text=Dummy+Image!&fontFamily=quicksand "} alt="image" />
                    </div>
                </div>
                <div className="flex items-center">
                    {/* <StockFunction product={product} /> */}
                    <div className="inline text-white text-xs bg-violet-600 px-1 ">New</div>
                </div>
                <div className="px-2 py-2">
                    <div>
                        <Link to={`/products`} className="text-gray-900 text-[13px] font-bold tracking-tight hover:text-gray-300 hover:underline  dark:text-white">
                            {product.title ? truncateText(product.title, 5) : "This is dummy title"}
                        </Link>
                    </div>
                    <p className="text-xs text-gray-700 font-normal w-auto h-12 my-1 dark:text-gray-400">
                        {product.description ? truncateText(product.description, 15) : "This is dummy description"}
                    </p>
                    {/* <RatingFunction product={product} /> */}
                    <div className="inline-flex uppercase text-xs font-medium tracking-wide rounded-sm bg-blue-400 px-1">
                        {product.category ? product.category : "Category"} 
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="text-lg font-bold tracking-wide dark:text-white">
                            ${product.price}
                        </div>
                        <div>
                            <a href="/" className="inline-flex items-center text-xs text-center text-white font-medium bg-blue-700 rounded-md px-4 py-1 my-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Add to Cart
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card