/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllCategories, fetchAllProducts } from "../../../apps/action/prodAction"
import CardFour from "../../component/cards/cardFour"
import { Link } from "react-router-dom"

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
                <div className="flex justify-between">
                    <div className="text-3xl font-medium">Top Categories:</div>
                    {categories.length > 3 ? (
                        <Link to='/all-categories'><div className="flex items-end text-sm text-blue-600 capitalize hover:underline">see more</div></Link>
                    ) : null}
                </div>

                <div className="grid grid-cols-3 gap-3 my-5 h-[335px] overflow-hidden">
                    {categories?.map(cate => (
                        <CardFour key={cate._id} category={cate} products={products} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default TopCategory
