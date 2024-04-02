/* eslint-disable react/prop-types */
// import React from 'react'
import Header from "../Header"
import Navbar from "../Navbar"

const HeaderWrap = ({ children }) => {
    return (
        <>
            <Header />
            <Navbar />
            <main className="container">{children}</main>
        </>
    )
}

export default HeaderWrap
