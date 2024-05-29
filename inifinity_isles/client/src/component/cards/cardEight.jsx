/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

const CardEight = ({ product }) => {
    const truncateText = (text, maxWords) => {
        let word = text?.split(' ')
        if (word?.length > maxWords) {
            return word?.slice(0, maxWords).join(' ') + "..."
        } else {
            return text
        }
    }
    return (
        <>
            <Link to={`/all-categories/${product?.category?.category}/${product?.category?._id}/${product?._id}`}>
                <div className="hover:scale-105 cursor-pointer">
                    <div className="w-52 h-72">
                        <img src={product?.images} className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <div className="text-base font-medium">
                            {truncateText(product?.title, 2)}
                        </div>
                        <div className="text-xs">
                            $ {product?.price}
                        </div>
                    </div>
                    <div className="text-xs">
                        {truncateText(product?.description, 5)}
                    </div>
                </div>
            </Link>
        </>
    )
}

export default CardEight
