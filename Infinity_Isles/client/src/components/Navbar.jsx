// import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { LuMenuSquare } from "react-icons/lu";
import Logo from '../assets/Logo'

const Navbar = () => {
    const handleClick = () => {
        document.getElementById('menuBar').classList.toggle('hidden')
    }
    return (
        <>
            <div className="bg-gray-800 text-amber-50 pb-1 cursor-pointer">
                <div className="flex justify-between items-center py-1 tracking-widest mx-6 sm:mx-8 md:mx-10 lg:mx-12 xl:mx-14">
                    <Link to='/' className="flex items-center text-sm font-semibold uppercase  sm:text-base md:text-lg lg:text-2xl xl:text-3xl"><Logo /><div className='mx-4'>Infinity Isles</div></Link>
                    <ul className="hidden text-gray-300 font-normal uppercase  sm:text-xs md:flex md:text-xs lg:text-sm xl:text-xl">
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
                    </ul>
                    <div className='md:hidden'><LuMenuSquare className='w-7 h-7' onClick={handleClick} />
                        <div id='menuBar' className='hidden sm:invisible'>
                            <ul className="absolute right-4 top-12 flex flex-col text-lg text-gray-800 font-medium uppercase bg-white border border-gray-400 rounded-lg py-2 pr-32 pl-2">
                                <Link to='/' className="md:mx-1.5 lg:mx-5 hover:text-amber-50 hover:bg-gray-400 py-1 px-4 hover:rounded-lg">home</Link>
                                <li id="bouton" className="group/bouton md:mx-1.5 lg:mx-5 hover:text-amber-50 hover:bg-gray-400 py-1 px-4 hover:rounded-lg"> Collection</li>
                                <Link to='/lookbook' className="md:mx-1.5 lg:mx-5 hover:text-amber-50 hover:bg-gray-400 py-1 px-4 hover:rounded-lg">lookbook</Link>
                                <Link to='/customer-care' className="md:mx-1.5 lg:mx-5 hover:text-amber-50 hover:bg-gray-400 py-1 px-4 hover:rounded-lg">customer care</Link>
                                <Link to='/visit-us' className="md:mx-1.5 lg:mx-5 hover:text-amber-50 hover:bg-gray-400 py-1 px-4 hover:rounded-lg">visit us</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
