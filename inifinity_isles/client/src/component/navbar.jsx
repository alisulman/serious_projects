// import React from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { LuMenuSquare } from "react-icons/lu";
import Logo from '../../public/assets/logo';
import { useSelector } from 'react-redux';
import { FaCircleUser } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";

const Navbar = () => {

    // variables 
    const navigate = useNavigate()


    // function
    const handleClickOpen = () => {
        document.getElementById('menuBar').classList.toggle('hidden')
    }
    const handleLogout = () => {
        localStorage.removeItem('auth')
        navigate('/authenctication/registeration')
        window.location.reload()
    }
    const handleClick = () => {
        document.getElementById('menuBar').classList.toggle('hidden')
    }

    const state = useSelector(state => state.User)
    const user = state.isAuth


    return (
        <>
            <div className="bg-gray-800 text-amber-50 pb-1 cursor-pointer">
                <div className="flex justify-between items-center py-1 tracking-widest mx-6 sm:mx-8 md:mx-10 lg:mx-12 xl:mx-14">
                    <Link to='/' className="flex items-center text-sm font-semibold uppercase  sm:text-base md:text-lg lg:text-2xl xl:text-3xl"><Logo color='white' /><div className='mx-4'>Infinity Isles</div></Link>
                    <ul className="items-center hidden text-gray-300 font-normal uppercase  sm:text-xs md:flex md:text-xs lg:text-sm xl:text-xl">
                        <NavLink to='/' className="md:mx-1.5 lg:mx-3 xl:mx-5 hover:text-amber-50">home</NavLink>
                        <li id="bouton" className="group/bouton md:mx-1.5 lg:mx-3 xl:mx-5 hover:text-amber-50"> Collection
                            <ul className="absolute flex-col text-gray-700 bg-white rounded-md border border-gray-900 hidden group-hover/bouton:flex group-hover/bouton:opacity-100 transition-all px-4 py-3">
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
                                <FaCircleUser className='w-8 h-8 ' onClick={handleClickOpen} />
                                <div id='menuBar' className='hidden transition ease-linear duration-500'>
                                    <ul className="absolute right-1 top-[107px] flex flex-col justify-end items-center text-lg text-gray-800 font-medium uppercase bg-white border border-gray-400 rounded-lg py-2 pr-5 pl-2">
                                        <div className='flex items-center border-b-2 pb-2 mb-1 '>
                                            <FaCircleUser className='w-6 h-6' />
                                            <div className='text-base font-bold mx-1'>Hi { }</div>
                                        </div>
                                        <Link
                                            to='/profile/authorized'
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
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar