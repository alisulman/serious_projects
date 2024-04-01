// import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="items-center bg-gray-800 text-amber-50 pb-1 cursor-pointer">
                <div className="flex justify-between items-center mx-20 py-2 tracking-widest">
                    <Link to='/' className="text-3xl font-semibold uppercase">Infinity Isles</Link>
                    <ul className="flex text-xl text-gray-300 font-normal uppercase">
                        <NavLink to='/' className="mx-7 hover:text-amber-50">home</NavLink>
                        <li id="bouton" className="group/bouton mx-7 hover:text-amber-50"> Collection
                            <ul className="absolute flex-col text-gray-700 bg-white rounded-md border border-gray-900 hidden group-hover/bouton:flex group-hover/bouton:opacity-100 transition-all px-4 py-3">
                                <Link to='/'men className="py-2 px-12 border-b border-gray-300 hover:text-black">men</Link>
                                <Link to='/women' className="py-2 px-12 border-b border-gray-300 hover:text-black">women</Link>
                                <Link to='/kids' className="py-2 px-12 hover:text-black">kids</Link>
                            </ul>
                        </li>
                        <NavLink to='/lookbook' className="mx-7 hover:text-amber-50">lookbook</NavLink>
                        <NavLink to='/customer-care' className="mx-7 hover:text-amber-50">customer care</NavLink>
                        <NavLink to='/visit-us' className="mx-7 hover:text-amber-50">visit us</NavLink>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
