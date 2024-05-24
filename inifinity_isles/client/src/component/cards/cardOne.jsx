/* eslint-disable react/prop-types */
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import Stock from "../../sideFunction/stock";
import { useDispatch, useSelector } from "react-redux";
import IconChecker from "../../sideFunction/iconChecker";
import { Link, useNavigate } from "react-router-dom";
import { addItemToBasket } from " ../../../apps/slices/cartSlice";
import { DoFav } from "../../../apps/action/cartAction";
import { useState } from 'react'

const CardOne = ({ product }) => {
    const [chknchk, setChknchk] = useState(false)
    const [uchknchk, setUchknchk] = useState(true)
    const truncateText = (text, maxWords) => {
        let word = text.split(' ')
        if (word.length > maxWords) {
            return word.slice(0, maxWords).join(' ') + "..."
        } else {
            return text
        }
    }

    const title = product.title
    const description = product.description

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const state = useSelector(state => state.User)
    const auth = state.isAuth.data

    const handleAddToCart = () => {
        if (auth?.role === 'buyer') {
            dispatch(addItemToBasket({ id: product._id, title: title, description: description, price: product.price, image: product.images, stock: product.stock, category: product.category.category }))
        } else {
            if (auth?.role === "seller" || auth?.role === "user") {
                navigate('/profile')
            } else {
                navigate('/authenctication/registeration')
            }
        }

    }

    const handleChk = () => {
        if (chknchk) {
            dispatch(DoFav(product._id))
            setUchknchk(true)
            setChknchk(false)
        } else if (uchknchk) {
            setChknchk(true)
            setUchknchk(false)
        }
    }
    return (
        <>
            <div className="relative group/item overflow-hidden w-60 h-80">
                <img src={product.images} className="object-cover object-top w-full h-full" />
                <div className="absolute top-0 bg-white bg-opacity-70 transform transition-transform translate-y-80 duration-500 w-60 h-80 group-hover/item:translate-y-0"></div>
                <div className="absolute bottom-0 p-2 transform transition-transform  translate-y-32 ease-linear duration-500 group-hover/item:translate-y-0 w-full">
                    <div className="text-xl font-[700]">{title && truncateText(title, 4)}</div>
                    <div className="text-sm font-medium leading-[15px]">{description && truncateText(description, 6)}</div>
                    <div className="border-b-2 border-black mt-2 mb-1 mr-1.5"></div>
                    <div className="flex items-center justify-between mr-1.5">
                        <div className="text-sm font-bold">{product.price}/- pkr</div>
                        <div className={`${product.stock === 0 ? 'bg-red-600 text-white' : 'bg-white'} text-xs font-bold  rounded py-0.5 px-3`}><Stock stock={product.stock} /></div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 m-1.5" onClick={handleChk}>
                    <IconChecker CheckedIcon={<FaHeart className="text-xl text-red-700" />} UnCheckedIcon={<FaRegHeart className="text-xl text-white" />} chknchk={chknchk} uchknchk={uchknchk}/>
                </div>
                <div className="absolute top-1/3 right-0 left-0 flex justify-center">
                    <Link to={`/all-categories/${product.category.category}/${product.category._id}/${product._id}`}><div className="group-hover/item:scale-100 border-2 border-black hover:border-white hover:text-white rounded-full transform transition-transform duration-500 p-1 mx-3 scale-0"><IoSearch className="text-xl" /></div></Link>
                    <div className="group-hover/item:scale-100 border-2 border-black hover:border-white hover:text-white rounded-full transform transition-transform duration-500 delay-100 p-1 mx-3 scale-0" onClick={handleAddToCart}><FaPlus className="text-xl" /></div>
                </div>
            </div>
        </>
    )
}

export default CardOne
