import Logo from '../../../public/assets/logo'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeRole } from '../../../apps/action/authAction'
import { SpinnerOne } from '../../component/spinner'
import { useEffect, useState } from 'react'
import checkSVG from '../../../public/assets/7efs.gif'
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ManageAccount = () => {
    const [isLoading, setisLoading] = useState(false)
    const [isLoadingTwo, setisLoadingTwo] = useState(false)
    const [count, setCount] = useState("")
    const [countTwo, setCountTwo] = useState("")
    const [text, setText] = useState("")
    const [textTwo, setTextTwo] = useState("")
    const [showImage, setShowImage] = useState(false);

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const state = useSelector(state => state.User)
    const user = state.isAuth.data
    const role = state.isAuth.data.role

    const handleBuyerAccount = () => {
        setisLoading(true)
        setCount(5)
        const id = user._id
        const role = "buyer"
        dispatch(changeRole(id, role))
        setShowImage(true)
        setTimeout(() => {
            navigate('/')
            window.location.reload()
        }, 6000);
    }
    const handleSellerAccount = () => {
        setisLoadingTwo(true)
        setCountTwo(5)
        const id = user._id
        const role = "seller"
        dispatch(changeRole(id, role))
        setShowImage(true)
        setTimeout(() => {
            navigate('/')
            window.location.reload()
        }, 6000);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(decre => --decre)
        }, 1000)
        if (count === 5) {
            setText("It takes a minute")
        } else if (count === 2) {
            setText("Almost Done")
        } else if (count === 0) {
            setText("Done")
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [count])

    useEffect(() => {
        const interval = setInterval(() => {
            setCountTwo(decre => --decre)
        }, 1000)
        if (countTwo === 5) {
            setTextTwo("It takes a minute")
        } else if (countTwo === 2) {
            setTextTwo("Almost Done")
        } else if (countTwo === 0) {
            setTextTwo("Done")
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [countTwo])
    if (count === 0) {
        setTimeout(() => {
            setShowImage(false)
        }, 1500);
    }

    return (
        <>
            <Link to="/" className='flex items-center justify-center my-2'>
                <Logo style='w-20 h-10 mt-1' />
                <span className='text-2xl font-medium px-1'>Infinity Isles</span>
            </Link>
            <div className='flex items-center justify-center gap-10 mt-20'>
                {role === "buyer" ? (
                    <>
                        <div className='flex flex-col items-center bg-white border-8 border-[#76B43F] rounded-t-lg w-1/3 h-96'>
                            {role === "seller" ? (
                                <img src={checkSVG} alt="" />
                            ) : (
                                <div className='my-[85px]'><IoCheckmarkCircleSharp className='text-[148px] text-[#76B43F]' /></div>
                            )}
                            <span className='text-lime-800 font-bold text-3xl -mt-20'>Done</span>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='flex flex-col items-center bg-blue-200 rounded-t-lg w-1/3 h-96'>
                            <span className='text-4xl my-2'>Buyer Account</span>
                            <div className='flex flex-col items-center justify-center h-[40vh]'>
                                <span>Click to activate buyer account</span>
                                {isLoading ? (
                                    <>
                                        <SpinnerOne color={'text-blue-700'} />
                                        <span className='-mt-4 leading-3'>Please wait...</span>
                                        <span>{text}</span>
                                    </>
                                ) : (
                                    <span className='bg-blue-500 hover:bg-blue-700 text-white px-4 py-1 my-2 cursor-pointer' onClick={handleBuyerAccount}>Click here</span>
                                )}
                            </div>
                        </div>
                    </>
                )}
                {role === 'seller' ? (
                    <>
                        <div className='flex flex-col items-center bg-white border-8 border-[#76B43F] rounded-t-lg w-1/3 h-96'>
                            {role === "buyer" ? (
                                <img src={checkSVG} alt="" />
                            ) : (
                                <div className='my-[85px]'><IoCheckmarkCircleSharp className='text-[148px] text-[#76B43F]' /></div>
                            )}
                            <span className='text-lime-800 font-bold text-3xl -mt-20'>Done</span>
                        </div>
                    </>
                ) : (
                    <div className='flex flex-col items-center bg-blue-200 rounded-t-lg w-1/3 h-96'>
                        <span className='text-4xl my-2'>Seller Account</span>
                        <div className='flex flex-col items-center justify-center h-[40vh]'>
                            <span>Click to activate seller account</span>
                            {isLoadingTwo ? (
                                <>
                                    <SpinnerOne color={'text-blue-700'} />
                                    <span className='-mt-4 leading-3'>Please wait...</span>
                                    <span>{textTwo}</span>
                                </>
                            ) : (
                                <span className='bg-blue-500 hover:bg-blue-700 text-white px-4 py-1 my-2' onClick={handleSellerAccount}>Click here</span>
                            )}
                        </div>
                    </div>
                )}
            </div >
        </>
    )
}


export default ManageAccount
