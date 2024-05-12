// import React from 'react'

import { useDispatch, useSelector } from "react-redux"
import Header from "../../component/header"
import Navbar from "../../component/navbar"
import { CardAllLayout } from "../../layout/cardLayout"
import { useEffect } from "react"
import { fetchAllProducts } from "../../../apps/action/prodAction"


const HomeScrn = () => {
    const state = useSelector(state => state.Product)
    const products = state.products
    console.log(products)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [dispatch])
    return (
        <>
            <Header />
            <Navbar />
            <div>
                <div className="flex justify-center items-center my-5">
                    <div className="border-b-2 border-gray-300 w-full"></div>
                    <div className="text-3xl font-medium bg-gray-100 px-5 pb-1.5">Products</div>
                    <div className="border-b-2 border-gray-300 w-full"></div>
                </div>
                <div>
                    <CardAllLayout products={products} />
                </div>
            </div>
        </>
    )
}

export default HomeScrn