import { useSelector } from "react-redux"
import CardFive from "../../component/cards/cardFive"
import Header from "../../component/header"
import Navbar from "../../component/navbar"
import ScrollToTop from "../../utils/scrollToTop"
import SEO_Comp from "../../component/SEO"

const Category = () => {
    const state = useSelector(state => state.Product)
    const category = state.category
    ScrollToTop()
    return (
        <>
        <SEO_Comp title="Categories" />
            <Navbar />
            <div>
                <div className="text-center text-3xl font-medium mt-5 -mb-10">All Categories</div>
                <div className="grid grid-cols-4 gap-10 m-20">
                    {category?.map(cate => (
                        <CardFive key={cate._id} category={cate} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Category
