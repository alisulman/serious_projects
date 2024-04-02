/* eslint-disable react/prop-types */
// import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo'

const RegistrationWrap = ({ children }) => {
    return (
        <>
            <Link to='/' className="flex items-center text-sm font-semibold uppercase m-3  sm:text-base md:text-lg lg:text-2xl xl:text-3xl"><Logo color='black'/><div className='mx-4'>Infinity Isles</div></Link>
            <main>{children}</main>
        </>
    )
}

export default RegistrationWrap
