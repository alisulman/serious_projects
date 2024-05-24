/* eslint-disable react/prop-types */
import Indeform from "../form/indeform";
import { useDispatch } from "react-redux";
import { removeItemFromBasket } from "../../../apps/slices/cartSlice";

const CardSeven = ({ product }) => {
    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(removeItemFromBasket(product?.id))
    }
    return (
        <>
            <div className="border-2 border-black rounded-lg h-[200px]">
                <div className="flex w-full h-full overflow-hidden">

                    <img src={product?.image} className="w-48 h-full object-cover object-top -z-10" />
                    <div className="w-full h-full p-3">
                        <div className="flex justify-between">
                            <div className="text-2xl">{product?.title}</div>
                        </div>
                        <div className="w-full h-14">{product?.description}</div>
                        <div className="flex justify-between">
                            <div>
                                <div className="inline uppercase text-sm font-bold bg-blue-300 px-4 py-0.5">{product?.category}</div>
                                <div className="text-base font-bold tracking-wider my-2">$ {product?.price}</div>
                            </div>
                            <div>
                                <Indeform qty={product?.qty} stk={product.stock} id={product.id} />
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
