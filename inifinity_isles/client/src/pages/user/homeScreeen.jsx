/* eslint-disable react/jsx-key */
// import React from 'react'

import { useDispatch, useSelector } from "react-redux"
import Header from "../../component/header"
import Navbar from "../../component/navbar"
import { CardAllLayout } from "../../layout/cardLayout"
import { useEffect } from "react"
import { fetchAllProducts } from "../../../apps/action/prodAction"
import CarasolOne from "../../component/carousel/carasolOne"


const HomeScrn = () => {
    const state = useSelector(state => state.Product)
    const products = state.products
    console.log(products)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [dispatch])

    const images = [
        "https://t4.ftcdn.net/jpg/05/40/82/11/360_F_540821167_aAv3kKYIaUpb3Gkd4ib3Qt61OFcMWuT8.jpg",
        "https://c4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7c9gfq-lgEYjCectqjc4PnHOqpow6jS_8Mfpw6SqN1A&s",
        "https://static.vecteezy.com/system/resources/thumbnails/038/987/289/small_2x/ai-generated-majestic-mountain-peak-reflects-tranquil-sunset-over-water-generated-by-ai-photo.jpg",
        "https://img.freepik.com/premium-photo/photo-majestic-mountain-range-sunrise-with-small-lake-lone-tree-foreground_978463-562.jpg?w=360"
    ]

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


            <div className="flex justify-center items-center my-20 mx-[355px]">
                <CarasolOne />
            </div>
        </>
    )
}

export default HomeScrn