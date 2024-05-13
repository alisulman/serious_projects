/* eslint-disable react/jsx-key */
// import React from 'react'

import { useDispatch, useSelector } from "react-redux"
import Header from "../../component/header"
import Navbar from "../../component/navbar"
import { CardAllLayout } from "../../layout/cardLayout"
import { useEffect } from "react"
import { fetchAllProducts } from "../../../apps/action/prodAction"
import CarasolOne from "../../component/carousel/carasolOne"
import TopBusinessman from "./topBusinessman"


const HomeScrn = () => {
    const state = useSelector(state => state.Product)
    const products = state.products
    console.log(products)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [dispatch])
    if (dispatch === fetchAllProducts) {
        state(true)
    }

    return (
        <>
            <Header />
            <Navbar />
            <div>
                <CarasolOne />
            </div>
            <div className="mx-20 my-10">
                <TopBusinessman />
                <div className="border-b border-black" />
            </div>


        </>
    )
}

export default HomeScrn