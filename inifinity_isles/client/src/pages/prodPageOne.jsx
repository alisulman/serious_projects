/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import CardEight from "../component/cards/cardEight"

const ProdPageOne = ({productId}) => {
    const state = useSelector(state => state.Product)
    const products = state.singleCateProdByName

    const filteredProducts = products.filter(item => item._id !== productId);
    console.log(productId)
    return (
        <>
            {filteredProducts?.map(item => (
                <CardEight key={item._id} product={item} />
            ))}
        </>
    )
}

export default ProdPageOne
