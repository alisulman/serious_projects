import { useDispatch, useSelector } from "react-redux"
import Header from "../../component/header"
import Navbar from "../../component/navbar"
import { useEffect, useState } from "react"
import { fetchSingleCateProdByName, fetchSingleProduct } from "../../../apps/action/prodAction"
import { useParams } from "react-router-dom"
import Ratings from "../../sideFunction/rationg"
import { FaHeart } from "react-icons/fa"
import { addItemToBasket } from "../../../apps/slices/cartSlice"
import SEO_Comp from "../../component/SEO"
import toast, { Toaster } from "react-hot-toast"
import { DoFav, RemoveFav } from "../../../apps/action/cartAction"
import IconChecker from "../../sideFunction/iconChecker"
import { FaRegHeart } from "react-icons/fa6"
import ProdPageOne from "../prodPageOne"
import Footer from "../../component/footer"


const SingleProduct = () => {
  const { productId, category } = useParams()
  const [chknchk, setChknchk] = useState(false)
  const [uchknchk, setUchknchk] = useState(true)

  const dispatch = useDispatch()

  const truncateText = (text, maxWords) => {
    let word = text.split(' ')
    if (word.length > maxWords) {
      return word.slice(0, maxWords).join(' ') + "..."
    } else {
      return text
    }
  }
  const state = useSelector(state => state.Product)
  const stateTwo = useSelector(state => state.Cart)
  const products = state.singleCateProd
  const product = state.product
  const favProd = stateTwo.isFavourite

  const handleCartAdd = () => {
    dispatch(addItemToBasket({ id: product?._id, title: product?.title, description: product?.description, price: product?.price, image: product.images, stock: product.stock, category: product?.category?.category }))
    toast('One item add in cart')
  }
  const favProdFind = favProd.some(item => item.product._id === product._id)
  const handleChk = () => {
    if (chknchk) {
      setChknchk(false)
      setUchknchk(true)
      if (favProdFind) {
        dispatch(RemoveFav(product._id))
        toast(`You unfavourite ${truncateText(product.title, 3)}`)
      } else if (!favProdFind) {
        dispatch(DoFav(product._id))
      }
    } else if (uchknchk) {
      dispatch(DoFav(product._id))
      setChknchk(true)
      setUchknchk(false)
      toast(`You favourite ${truncateText(product.title, 3)}`)
    }
  }

  useEffect(() => {
    if (favProdFind) {
      setUchknchk(false)
      setChknchk(true)
    } else {
      setUchknchk(true)
      setChknchk(false)
    }
  }, [favProdFind])

  useEffect(() => {
    dispatch(fetchSingleProduct(productId))
  }, [dispatch, productId])

  useEffect(() => {
    dispatch(fetchSingleCateProdByName(category))
  }, [category, dispatch])
  return (
    <>
      <SEO_Comp title={product?.title} />
      <Toaster />
      <Header />
      <Navbar />
      <div className="relative bg-white mx-20 my-5 p-5 overflow-hidden">
        <div className="flex">
          <div className="w-96 h-60">
            <img src={product.images} className="border-2 border-gray-400 w-full h-full object-cover object-top rounded-tr-2xl rounded-br-2xl" />
          </div>
          <div className="px-3">
            <div className="text-3xl font-semibold">{product?.title}</div>
            <div className="flex justify-center items-center text-white text-sm uppercase bg-blue-600 w-40 my-2">{product?.category?.category}</div>
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
            <div className="absolute top-1 right-6 m-1.5" onClick={handleChk}>
              <IconChecker CheckedIcon={<FaHeart className="text-xl text-red-700" />} UnCheckedIcon={<FaRegHeart className="text-xl text-black" />} chknchk={chknchk} uchknchk={uchknchk} />
            </div>
          </div>
        </div>
      </div>
      {products.length !== 0 && (
        <div className="mx-20">
          <div className="text-4xl text-gray-500 font-semibold">Related Products:</div>
          <div className="grid grid-cols-5 gap-10 my-5">
            <ProdPageOne productId={product._id} />
          </div>
        </div>
      )}
      <Footer />
    </>
  )
}

export default SingleProduct
