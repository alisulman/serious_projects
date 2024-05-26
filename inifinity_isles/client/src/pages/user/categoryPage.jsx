import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchSingleCateProd } from "../../../apps/action/prodAction"
import Header from "../../component/header"
import Navbar from "../../component/navbar"
import CardOne from "../../component/cards/cardOne"
import SEO_Comp from "../../component/SEO"

const CategoryPage = () => {

  const { cpid } = useParams()
  const { category } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSingleCateProd(cpid))
  }, [dispatch, cpid])
  const state = useSelector(state => state.Product)
  const products = state.singleCateProd
  return (
    <>
    <SEO_Comp title={category} />
      <Header />
      <Navbar />
      <div className="flex justify-center items-center mt-5  -mb-10">
        <div className="border-b-2 border-gray-300 w-full"></div>
        <div className="capitalize flex justify-center text-3xl font-medium w-1/2  px-5">{category}</div>
        <div className="border-b-2 border-gray-300 w-full"></div>
      </div>
      <div className="grid grid-cols-4 gap-5 m-20">
        {products?.map(product => (
          <CardOne key={product._id} product={product} />
        ))}
      </div>
    </>
  )
}

export default CategoryPage
