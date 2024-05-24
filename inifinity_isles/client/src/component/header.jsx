/* eslint-disable no-unused-vars */

import * as React from 'react'
import { HiMiniShoppingCart } from "react-icons/hi2";
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import Logo from '../../public/assets/logo';

const Header = () => {

    const stateOne = useSelector(state => state.User)
    const stateTwo = useSelector(state => state.Product)
    const stateThree = useSelector(state => state.Cart)
    const user = stateOne.isAuth
    const quantity = stateTwo.quantity
    const totalQuantity = stateThree.totalQuantity
    const role = user?.data?.role
    const { cName } = useParams()
    return (
        <div className="bg-gray-300">
            <div className="flex justify-between items-center py-1.5 mx-7">
                {cName ? (
                    <Link to='/' className=''>
                        <div className='flex items-center'>
                            <Logo style='w-14' />
                            <div className='text-2xl ml-2'>Infinity Isles</div>
                        </div>
                    </Link>
                ) : null}
                <form className="flex items-center mx-auto sm:mx-0">
                    <label htmlFor="voice-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-3 h-3 text-gray-500 dark:text-gray-400 sm:w-4 sm:h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z" />
                            </svg>
                        </div>
                        <input type="text" id="voice-search" className="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-md block focus:outline-none focus:border-blue-500 focus:ring-1 w-[260px] ps-8 p-0.5 sm:ps-9 md:ps-9 lg:ps-10 sm:p-1 md:p-2 lg:p-1 sm:w-96 md:w-[450px] lg:w-[650px] xl:w-[750px]" placeholder="Search..." required />
                        <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z" />
                            </svg>
                        </button>
                    </div>
                </form>

                <div className="sm:flex items-center cursor-pointer">
                    {user.length === 0 && (
                        <Link
                            to='/authenctication/registeration'
                            className="flex flex-col items-end -mr-5 sm:mx-1 md:mx-2 lg:mx-3 xl:mx-4">
                            <span className="text-[9px] font-medium md:text-[11px] lg:text-xs xl:text-sm">Hello Guest</span>
                            <span className="text-xs font-bold leading-5 md:text-sm lg:text-base xl:text-lg">Signup</span>
                        </Link>
                    )}
                    {role === "buyer" || role === "seller" ? (
                        <Link to="/dashboard" className={`${cName ? 'hidden' : null}`}>
                            <div className="hidden sm:block font-mono hover:bg-gray-50 sm:text-xs md:text-sm lg:text-base xl:text-lg sm:mx-1 md:mx-2 lg:mx-0 xl:mx-4 sm:px-1 md:px-1.5 lg:px-2 xl:px-1">Dashboard</div>
                        </Link>
                    ) : (<div></div>)}
                    <div className="hidden sm:block font-mono border-x border-gray-800 hover:bg-gray-50 sm:text-xs md:text-sm lg:text-base xl:text-lg sm:mx-1 md:mx-2 lg:mx-3 xl:mx-4 sm:px-1 md:px-1.5 lg:px-2 xl:px-3">Free Shipping</div>
                    <Link to='/checkout/cart'>
                        <div className="hidden sm:block sm:mx-0 md:mx-1 lg:mx-2 xl:mx-3">
                            <span className={`${totalQuantity === 0 && 'hidden'} absolute inline-flex items-center justify-center text-red-800 font-semibold bg-red-200 rounded-full w-1 h-1 sm:p-1.5 md:p-2 lg:p-2.5 xl:p-3 sm:text-[9px] md:text-[10px] lg:text-sm xl:text-sm sm:top-2 md:top-2.5 lg:top-0 sm:right-[22px] md:right-6 lg:right-[26px] xl:right-6`}>{totalQuantity}</span>
                            <HiMiniShoppingCart className="sm:text-base md:text-lg lg:text-xl xl:text-2xl" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header