/* eslint-disable no-unused-vars */

import * as React from 'react'
import { HiMiniShoppingCart } from "react-icons/hi2";
import { Link } from 'react-router-dom'
import { FaRegUserCircle } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    // variables
    const state = useSelector(state => state.user)
    const data = state.auth
    const dataLength = data.length
    const navigate = useNavigate()

    // function
    const handleClick = () => {
        document.getElementById('menuBar').classList.toggle('hidden')
    }
    const handleLogout = () => {
        localStorage.removeItem('auth')
        navigate('/pre-authentication')
        window.location.reload()
    }

    console.log(data)
    return (
        <div className="bg-gray-200">
            <div className="flex justify-between items-center py-1.5 mx-7">

                <form className="flex items-center mx-auto sm:mx-0">
                    <label htmlFor="voice-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-3 h-3 text-gray-500 dark:text-gray-400 sm:w-4 sm:h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z" />
                            </svg>
                        </div>
                        <input type="text" id="voice-search" className="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-md block focus:outline-none focus:border-blue-500 focus:ring-1 w-[260px] ps-8 p-0.5 sm:ps-9 md:ps-9 lg:ps-10 sm:p-1 md:p-2 lg:p-2.5 sm:w-96 md:w-[450px] lg:w-[650px] xl:w-[800px]" placeholder="Search..." required />
                        <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z" />
                            </svg>
                        </button>
                    </div>
                </form>

                <div className="sm:flex items-center cursor-pointer">
                    {dataLength === 0 ? (
                        <Link
                            to='/pre-authentication'
                            className="flex flex-col items-end -mr-5 sm:mx-1 md:mx-2 lg:mx-3 xl:mx-4">
                            <span className="text-[9px] font-medium md:text-[11px] lg:text-xs xl:text-sm">Hello Guest</span>
                            <span className="text-xs font-bold leading-5 md:text-sm lg:text-base xl:text-lg">Signup</span>
                        </Link>
                    ) : (
                        <div className=''>
                            <FaRegUserCircle className='w-8 h-8 ' onClick={handleClick} />
                            <div id='menuBar' className='hidden'>
                                <ul className="absolute right-4 top-14 flex flex-col justify-end items-center text-lg text-gray-800 font-medium uppercase bg-white border border-gray-400 rounded-lg py-2 pr-5 pl-2">
                                    <div className='flex items-center border-b-2 pb-2 mb-1 '>
                                        <FaRegUserCircle className='w-6 h-6' />
                                        <div className='text-base font-bold mx-1'>Hi {data.data.username}</div>
                                    </div>
                                    <Link to='/' className="md:mx-1.5 lg:mx-5 hover:text-amber-50 hover:bg-gray-400 hover:w-32 hover:flex hover:justify-center hover:rounded-lg py-1 px-4 ">Profile</Link>
                                    <li id="bouton" className="group/bouton md:mx-1.5 lg:mx-5 hover:text-amber-50 hover:bg-gray-400 hover:w-32 hover:flex hover:justify-center hover:rounded-lg py-1 px-4">Settings</li>
                                    <div to='/lookbook' className="flex justify-center items-center text-red-600 md:mx-1.5 lg:mx-5 hover:text-amber-50 hover:bg-gray-400 hover:w-32 hover:rounded-lg py-1 px-4" onClick={handleLogout}><span>Logout</span><LuLogOut className='mx-1' /> </div>
                                </ul>
                            </div>
                        </div>
                    )}


                    <div className="hidden sm:block font-mono border-x border-gray-800 hover:bg-gray-50 sm:text-xs md:text-sm lg:text-base xl:text-lg sm:mx-1 md:mx-2 lg:mx-3 xl:mx-4 sm:px-1 md:px-1.5 lg:px-2 xl:px-3">Free Shipping</div>
                    <div className="hidden sm:block sm:mx-0 md:mx-1 lg:mx-2 xl:mx-3">
                        <span className="absolute inline-flex items-center justify-center text-red-800 font-semibold bg-red-200 rounded-full w-1 h-1 sm:p-1.5 md:p-2 lg:p-2.5 xl:p-3 sm:text-[9px] md:text-[10px] lg:text-sm xl:text-lg sm:top-2 md:top-2.5 lg:top-1 sm:right-[22px] md:right-6 lg:right-[26px] xl:right-7">2</span>
                        <HiMiniShoppingCart className="sm:text-base md:text-lg lg:text-xl xl:text-2xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
