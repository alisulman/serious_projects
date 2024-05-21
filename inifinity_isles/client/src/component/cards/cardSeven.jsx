/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import Indeform from "../form/indeform";
import Stock from "../../sideFunction/stock";
import Ratings from "../../sideFunction/rationg";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../apps/action/cartAction";

const CardSeven = ({ product }) => {
    const stock = product?.products?.stock
    const id = product?.products?._id
    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(removeFromCart(product?.products?._id))    
    }

    return (
        <>
            <div className="border-2 border-black rounded-lg h-[200px]">
                <div className="flex w-full h-full overflow-hidden">

                    <img src={product?.products?.images} className="w-48 h-full object-cover object-top -z-10" />
                    <div className="w-full h-full p-3">
                        <div className="flex justify-between">
                            <div className="text-2xl">{product?.products?.title}</div>
                            <div className={`h-5 px-3 rounded text-white ${stock > 15 ? "bg-green-500" : stock <= 15 && stock > 10 ? "bg-orange-500" : stock <= 10 && stock > 5 ? "bg-orange-600 text-white" : stock <= 5 && stock > 0 ? "bg-orange-700 text-white" : stock == 0 ? "bg-red-600 text-white" : null}`}><Stock stock={product?.products?.stock} /></div>
                        </div>
                        <div className="w-full h-14">{product?.products?.description}</div>
                        <div className="flex justify-between">
                            <div>
                                <div className="flex gap-2 my-2">
                                    <Ratings rating={product?.products?.ratings} />
                                    <div className="text-xs  font-bold bg-purple-400 rounded px-2">{product?.products?.ratings}</div>
                                </div>
                                <div className="inline uppercase text-sm font-bold bg-blue-300 px-4 py-0.5">{product?.products?.category?.category}</div>
                                <div className="text-base font-bold tracking-wider my-2">{product?.products.price} /- pkr</div>
                            </div>
                            <div>
                                <Indeform quantity={product?.products?.quantity} stock={stock} id={id} />
                                <div className="flex items-center justify-center text-white font-bold bg-orange-500 hover:rounded-full tracking-wider cursor-pointer my-3" onClick={handleRemove}>Remove from cart</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardSeven
