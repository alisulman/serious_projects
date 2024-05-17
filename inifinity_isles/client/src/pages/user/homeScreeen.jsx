/* eslint-disable react/jsx-key */
// import React from 'react'

import { useDispatch, useSelector } from "react-redux"
import Header from "../../component/header"
import Navbar from "../../component/navbar"
import { useEffect } from "react"
import CarasolOne from "../../component/carousel/carasolOne"
import TopBusinessman from "./topBusinessman"
import TopProducts from "./topProducts"
import FavouriteItems from "./favouriteItems"
import TopCategory from "./topCategory"
import { fetchBussinessMen } from "../../../apps/action/authAction"


const HomeScrn = () => {
    const state = useSelector(state => state.User)
    const bussinessMen = state.users

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBussinessMen())
    }, [dispatch])

    return (
        <>
            <Header />
            <Navbar />
            <div>
                <CarasolOne />
            </div>
            <div className="mx-20 my-10">
                <TopBusinessman users = {bussinessMen} />
                <div className="border-b border-black" />
                <TopProducts />
                <div className="border-b border-black" />
                <FavouriteItems />
                <div className="border-b border-black" />
                <TopCategory />
                <div className="border-b border-black" />
                <div className="text-3xl font-medium my-5">You may like these:</div>
            </div>


        </>
    )
}

export default HomeScrn