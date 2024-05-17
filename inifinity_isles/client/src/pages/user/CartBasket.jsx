import { useSelector } from "react-redux"
import Header from "../../component/header"
// import { CardCartLayout } from "../../layout/cardLayout"

const CartBasket = () => {
    const state = useSelector(state => state.Product)
    const quantity = state.quantity
    const products = state.basket
    
    return (
        <>
            <Header />
            {!quantity ? (
                <>
                    <div className="flex justify-center items-center h-[80vh]">
                        <div className="bg-white text-3xl text-gray-400 border border-gray-400 rounded-xl p-20">Please make the first shopping</div>
                    </div>
                </>
            ) : (
                <>
                    <div>
                        {/* <div><CardCartLayout product={products} /></div> */}
                        <div></div>
                    </div>
                </>
            )}
        </>
    )
}

export default CartBasket
