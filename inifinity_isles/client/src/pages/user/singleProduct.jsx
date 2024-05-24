import { useDispatch, useSelector } from "react-redux"
import Header from "../../component/header"
import Navbar from "../../component/navbar"
import { useEffect } from "react"
import { fetchSingleProduct } from "../../../apps/action/prodAction"
import { useParams } from "react-router-dom"
import Ratings from "../../sideFunction/rationg"
import { FaHeart } from "react-icons/fa"
import { addItemToBasket } from "../../../apps/slices/cartSlice"


const SingleProduct = () => {
  const { productId } = useParams()

  const dispatch = useDispatch()

  const state = useSelector(state => state.Product)
  const product = state.product

  const handleCartAdd = () => {
    dispatch(addItemToBasket({ id: product?._id, title: product?.title, description: product?.description, price: product?.price, image: product.images, stock: product.stock, category: product?.category?.category }))
  }
  useEffect(() => {
    dispatch(fetchSingleProduct(productId))
  }, [dispatch, productId])
  return (
    <>
      <Header />
      <Navbar />
      <div className="relative bg-white mx-20 my-5 p-5 overflow-hidden">
        <div className="flex">
          <div className="w-96 h-60">
            <img src={product.images} className="border-2 border-gray-400 w-full h-full object-cover object-top rounded-tr-2xl rounded-br-2xl" />
          </div>
          <div className="p-2">
            <div className="text-3xl font-semibold">{product?.title}</div>
            <div className="flex justify-center items-center text-white text-sm uppercase bg-blue-600 w-40">{product?.category?.category}</div>
            <div className="flex items-center text-base my-3"><Ratings rating={product?.ratings} /><div className="flex justify-center items-center text-xs bg-indigo-400 rounded w-5 h-4 mx-2">{product?.ratings}</div></div>
            <div className="text-xl font-semibold my-2"><span className="font-normal">Price:</span> <span>$ {product?.price}</span></div>
            <div className="flex gap-5">
              <div className="text-white bg-orange-500 hover:rounded-full px-5">Buy</div>
              <div className="text-white bg-orange-500 hover:rounded-full px-5" onClick={handleCartAdd}>Add to cart</div>
            </div>
            <div className="text-base font-semibold my-2">
              <div>Description :</div>
              <div className="text-sm font-normal">{product.description}</div>
            </div>
            <div className="absolute top-0 right-0 p-5"><FaHeart className="text-2xl text-red-600" /></div>
          </div>
        </div>
      </div>
      <div className="mx-20">
        <div className="text-4xl text-gray-500 font-semibold">Related Products:</div>
      </div>
    </>
  )
}

export default SingleProduct
