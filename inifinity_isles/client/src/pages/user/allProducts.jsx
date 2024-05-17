import { useDispatch, useSelector } from "react-redux"
import CardOne from "../../component/cards/cardOne"
import Header from "../../component/header"
import Navbar from "../../component/navbar"
import { useEffect } from "react"
import { fetchAllProducts } from "../../../apps/action/prodAction"

const AllProducts = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  const state = useSelector(state => state.Product)
  const products = state.products
  return (
    <>
      <Header />
      <Navbar />
      <div className="flex justify-center text-3xl font-medium my-5">Lookbook</div>
      <div className="grid grid-cols-4 gap-10 mx-32 my-5">
        {products && products.map(product => (
          <CardOne key={product._id} product={product} />
        ))}
      </div>
    </>
  )
}

export default AllProducts
