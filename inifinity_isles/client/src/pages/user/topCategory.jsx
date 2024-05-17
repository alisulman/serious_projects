import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllCategories, fetchAllProducts } from "../../../apps/action/prodAction"
import CardFour from "../../component/cards/cardFour"

const TopCategory = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllCategories())
        dispatch(fetchAllProducts())
    }, [dispatch])

    const state = useSelector(state => state.Product)
    const categories = state.category
    const products = state.products

    return (
        <>
            <div className="my-5">
                <div className="text-3xl font-medium">Top Categories:</div>
                <div className="grid grid-cols-3 gap-3 my-5">
                    {categories?.map(cate => (
                        <CardFour key={cate._id} category={cate} products={products} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default TopCategory
