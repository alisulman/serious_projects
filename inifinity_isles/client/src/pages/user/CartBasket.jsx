import { useDispatch, useSelector } from "react-redux"
import Header from "../../component/header"
import { useEffect } from "react"
import { GetCartProducts } from "../../../apps/action/cartAction"
import CardSeven from "../../component/cards/cardSeven"
// import { CardCartLayout } from "../../layout/cardLayout"

const CartBasket = () => {
    const state = useSelector(state => state.Cart)
    const totalQuantity = state.totalQuantity
    const loading = state.isLoading
    const totalPrice = state.totalPrice
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetCartProducts())
    }, [dispatch])
    const products = state.cartProduct
    const truncateText = (text, maxWords) => {
        let word = text.split(' ')
        if (word.length > maxWords) {
            return word.slice(0, maxWords).join(' ') + "..."
        } else {
            return text
        }
    }
    return (
        <>
            <Header />
            {!totalQuantity ? (
                <>
                    <div className="flex justify-center items-center h-[80vh]">
                        <div className="bg-white text-3xl text-gray-400 border border-gray-400 rounded-xl p-20">Please make the first shopping</div>
                    </div>
                </>
            ) : (
                <>
                    {!loading ? (
                        <div className="flex justify-between gap-5 p-7">
                            <div className="bg-white flex flex-col w-[80%] p-5 z-30">
                                <div className="text-3xl font-medium mb-5">Your Cart Products :</div>
                                <div className="flex flex-col gap-5">
                                    {products?.map(item => (
                                        <div key={item._id}><CardSeven product={item} /></div>
                                    ))}
                                </div>
                            </div>
                            <div className=" bg-white w-[30%] rounded-lg h-full p-5">
                                <div className="capitalize text-xl font-bold">total items({products.length}) : {totalQuantity}</div>
                                <div className="border-b border-gray-400 my-1"></div>
                                {products?.map(item => (
                                    <div key={item._id} className="flex justify-between capitalize text-base my-3">
                                        <div>{truncateText(item?.products?.title, 3)}({item?.products?.quantity}) :</div>
                                        <div>{item?.products?.totalPrice}</div>
                                    </div>
                                ))}
                                <div className="border-b border-gray-400 my-1"></div>
                                <div className="text-base capitalize font-bold">
                                    <div className="flex justify-between my-1">
                                        <div>total price</div>
                                        <div>{totalPrice}</div>
                                    </div>
                                    <div className="border-b border-gray-400 my-1"></div>
                                </div>
                                <div className="flex items-center justify-center text-sm bg-orange-500 hover:rounded-full cursor-pointer text-white font-bold tracking-widest py-1 my-5">Buy {products.length === 1 ? "this item" : "these items"}</div>
                            </div>
                        </div>
                    ) : (
                        <div>Loading...</div>
                    )}
                </>
            )}
        </>
    )
}

export default CartBasket
