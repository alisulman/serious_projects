// import React from 'react'
import { Link } from 'react-router-dom'
// import { LuMenuSquare } from "react-icons/lu";
import Logo from '../../public/assets/logo';
import { useSelector } from 'react-redux';
import { FaCircleUser } from "react-icons/fa6";
import TemporaryDrawer from './drawer/drawer';
import { useRef } from 'react';
// import { LuLogOut } from "react-icons/lu";

const Navbar = () => {

    const drawerRef = useRef()
    // variables 
    // const navigate = useNavigate()


    // function
    // const handleClickOpen = () => {
    //     document.getElementById('menuBarUser').classList.toggle('hidden')
    // }
    // const handleLogout = () => {
    //     localStorage.removeItem('auth')
    //     navigate('/authenctication/registeration')
    //     window.location.reload()
    // }
    // const handleClick = () => {
    //     document.getElementById('menuBar').classList.toggle('hidden')
    // }

    const state = useSelector(state => state.User)
    const user = state.isAuth
    // const username = user?.data?.username

    console.log(user.data.colors)


    return (
        <>
            <div className="bg-gray-800 text-amber-50 pb-1 cursor-pointer">
                <div className="flex justify-between items-center py-1 tracking-widest mx-6 sm:mx-8 md:mx-10 lg:mx-12 xl:mx-14">
                    <Link to='/' className="flex items-center text-xs font-semibold uppercase sm:text-xs md:text-base lg:text-xl"><Logo color='white' width='w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16' height='h-6 sm:h-7 md:h-8 lg:h-9 xl:h-10' style='mt-1' /><div className='mx-1 mt-0.5 sm:mt-0'>Infinity Isles</div></Link>
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
                    {user.length === 0 ? (
                        <Link to='/authenctication/registeration'>
                            <FaCircleUser className='text-4xl' />
                        </Link>
                    ) : (
                        <div className='flex justify-center items-center uppercase rounded-full w-9 h-9' style={{ backgroundColor: user?.data?.colors[0]?.hex, color: user?.data?.colors[0]?.textColour }} onClick={() => drawerRef.current.click()}>
                            {user?.data?.email?.slice(0, 1)}
                        </div>
                    )}
                </div>
            </div>
            <TemporaryDrawer referance={drawerRef} />
        </>
    )
}

export default Navbar

{/* <ul className="items-center hidden text-gray-300 font-medium uppercase sm:text-xs md:flex md:text-xs lg:text-base xl:text-lg">
                        <NavLink to='/' className="md:mx-1.5 lg:mx-3 xl:mx-5 hover:text-amber-50">home</NavLink>
                        <li id="bouton" className="group/bouton md:mx-1.5 lg:mx-3 xl:mx-5 hover:text-amber-50"> Collection
                            <ul className="absolute flex-col text-gray-700 bg-white rounded-md border z-50 border-gray-900 hidden group-hover/bouton:flex group-hover/bouton:opacity-100 transition-all px-4 py-3">
                                <Link to='/' className="py-2 px-12 border-b border-gray-300 hover:text-black">men</Link>
                                <Link to='/women' className="py-2 px-12 border-b border-gray-300 hover:text-black">women</Link>
                                <Link to='/kids' className="py-2 px-12 hover:text-black">kids</Link>
                            </ul>
                        </li>
                        <NavLink to='/lookbook' className="md:mx-1.5 lg:mx-3 xl:mx-5 hover:text-amber-50">lookbook</NavLink>
                        <NavLink to='/customer-care' className="md:mx-1.5 lg:mx-3 xl:mx-5 hover:text-amber-50">customer care</NavLink>
                        <NavLink to='/visit-us' className="md:ml-1.5 lg:ml-3 xl:ml-5 hover:text-amber-50">visit us</NavLink>
                        {user.length !== 0 && (
                            <div className='ml-5'>
                                <FaCircleUser className='w-8 h-8' onClick={handleClickOpen} />
                                <div id='menuBarUser' className='transition ease-linear duration-500 hidden'>
                                    <ul className="absolute right-1 top-24 flex flex-col justify-end items-center text-lg text-gray-800 font-medium uppercase bg-white border border-gray-400 rounded-lg py-2 pr-5 pl-2 z-50">
                                        <div className='flex items-center border-b-2 pb-2 mb-1 '>
                                            <FaCircleUser />
                                            <div className='text-base font-bold mx-1'>Hi {username}</div>
                                        </div>
                                        <Link
                                            to='/profile'
                                            className="md:mx-1.5 lg:mx-5 hover:bg-gray-300 hover:w-32 hover:flex hover:justify-center rounded-lg py-1 px-6 "
                                        >
                                            Profile
                                        </Link>
                                        <li id="bouton" className="group/bouton md:mx-1.5 lg:mx-5 hover:bg-gray-300 hover:w-32 hover:flex hover:justify-center rounded-lg py-1 px-4">Settings</li>
                                        <div to='/lookbook' className="flex justify-center items-center text-red-600 md:mx-1.5 lg:mx-5 hover:text-black  hover:bg-gray-300 hover:w-32 rounded-lg py-1 px-2.5" onClick={handleLogout}><span>Logout</span><LuLogOut className='mx-1' /> </div>
                                    </ul>
                                </div>
                            </div>
                        )}
                        <div className='md:hidden'><LuMenuSquare className='w-7 h-7' onClick={handleClick} />
                            <div id='menuBar' className='hidden md:invisible'>
                                <ul className="absolute right-4 top-[85px] flex flex-col text-lg text-gray-800 font-medium uppercase bg-white border border-gray-400 rounded-lg py-2 pr-32 pl-2">
                                    <Link to='/' className="md:mx-1.5 lg:mx-5 hover:text-amber-50 hover:bg-gray-400 py-1 px-4 hover:rounded-lg">home</Link>
                                    <li id="bouton" className="group/bouton md:mx-1.5 lg:mx-5 hover:text-amber-50 hover:bg-gray-400 py-1 px-4 hover:rounded-lg"> Collection</li>
                                    <Link to='/lookbook' className="md:mx-1.5 lg:mx-5 hover:text-amber-50 hover:bg-gray-400 py-1 px-4 hover:rounded-lg">lookbook</Link>
                                    <Link to='/customer-care' className="md:mx-1.5 lg:mx-5 hover:text-amber-50 hover:bg-gray-400 py-1 px-4 hover:rounded-lg">customer care</Link>
                                    <Link to='/visit-us' className="md:mx-1.5 lg:mx-5 hover:text-amber-50 hover:bg-gray-400 py-1 px-4 hover:rounded-lg">visit us</Link>
                                </ul>
                            </div>
                        </div>
                    </ul> */}