/* eslint-disable react/prop-types */
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { addItemToBasket } from "../../../apps/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { RemoveFav } from "../../../apps/action/cartAction";
import toast, { Toaster } from "react-hot-toast";
import IconChecker from "../../sideFunction/iconChecker";
import ScrollToTop from "../../utils/scrollToTop";


const CardSix = ({ item }) => {
    const [chknchk, setChknchk] = useState(true)
    const [uchknchk, setUchknchk] = useState(false)

    const title = item?.product?.title
    const description = item?.product?.description
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector(state => state.User)
    const auth = state.isAuth.data

    const truncateText = (text, maxWords) => {
        let word = text?.split(' ')
        if (word?.length > maxWords) {
            return word?.slice(0, maxWords).join(' ') + "..."
        } else {
            return text
        }
    }
    const handleAddToCart = () => {
        if (auth?.role === 'buyer') {
            dispatch(addItemToBasket({ id: item?.product?._id, title: title, description: description, price: item?.product?.price, image: item?.product?.images, stock: item?.product?.stock, category: item?.product?.category.category }))
            
        } else {
            if (auth?.role === "seller" || auth?.role === "user") {
                navigate('/profile')
            } else {
                navigate('/authenctication/registeration')
            }
        }

    }
    console.log(item)
    const handleChk = () => {
        if (chknchk) {
            setChknchk(false)
            setUchknchk(true)
            toast(`You unfavourite ${truncateText(item.product.title, 3)}`)
            dispatch(RemoveFav(item?.product?._id))
        } else if (uchknchk) {
            setChknchk(true)
            setUchknchk(false)
        }
    }


    return (
        <>
            <Toaster />
            <div className='flex justify-between my-5 cursor-pointer '>
                <div className='relative overflow-hidden group/item border-2 border-gray-400 rounded-xl hover:border-white'>
                    <img src={item?.product?.images} className='w-44 h-64 rounded-lg object-cover' />
                    <div className='group-hover/item:translate-y-0 absolute top-0 w-full h-full bg-black rounded-lg bg-opacity-50 transform translate-y-64 ease-in-out transition-transform duration-[1s]'></div>
                    <div className='group-hover/item:translate-y-0 absolute bottom-0 text-white p-2 translate-y-24 transition-transform duration-[1s] ease-in-out'>
                        <div className='text-lg font-medium hover:underline'>{truncateText(title, 2)}</div>
                        <div className='text-xs'>{truncateText(description, 3)}</div>
                        <div className='border-b my-1'></div>
                        <div className='text-sm'>{item?.product?.price}/- pkr</div>
                    </div>
                    <div className="absolute top-0 right-5 m-1.5" onClick={handleChk}>
                        <IconChecker CheckedIcon={<FaHeart className="text-xl text-red-600" />} UnCheckedIcon={<FaRegHeart className="text-xl text-white" />} chknchk={chknchk} uchknchk={uchknchk} />
                    </div>
                    <div className='absolute top-[40%] left-0 right-0 flex justify-center items-center text-white text-2xl'>
                        <span className='group-hover/item:scale-100 border-2 border-white rounded-full mx-3 p-1 transition-transform ease-in-out duration-[0.2s] delay-300 scale-0 hover:border-black hover:text-black' onClick={() => ScrollToTop()}><Link to={`/all-categories/${item?.product?.category?.category}/${item?.product?.category?._id}/${item?.product?._id}`}><IoSearch className='text-lg font-medium' /></Link></span>

                        <span className='group-hover/item:scale-100 border-2 border-white rounded-full mx-3 p-1 transition-transform ease-in-out duration-[0.2s] delay-[0.4s] hover:border-black hover:text-black scale-0' onClick={handleAddToCart}><FaPlus className='text-lg font-medium' /></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardSix
