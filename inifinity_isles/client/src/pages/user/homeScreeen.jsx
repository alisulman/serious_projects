/* eslint-disable react/jsx-key */
// import React from 'react'

import { useDispatch, useSelector } from "react-redux"
import Header from "../../component/header"
import Navbar from "../../component/navbar"
import { useEffect, useState } from "react"
import CarasolOne from "../../component/carousel/carasolOne"
import TopBusinessman from "./topBusinessman"
import TopProducts from "./topProducts"
import TopCategory from "./topCategory"
import { fetchBussinessMen } from "../../../apps/action/authAction"
import FavouritePage from "./favouritePage"
import Footer from "../../component/footer"


const HomeScrn = () => {
    const [showCat, setShowCat] = useState(false)
    const [showSlide, setSlide] = useState(false)
    const state = useSelector(state => state.User)
    const stateOne = useSelector(state => state.Product)
    const stateTwo = useSelector(state => state.Cart)
    const categories = stateOne.category
    const bussinessMen = state?.users
    const topProducts = stateOne.topProducts
    const isFavourite = stateTwo.isFavourite
    const dispatch = useDispatch()

    useEffect(() => {
        if (categories) {
            setShowCat(true)
        } else {
            setShowCat(false)
        }
    }, [categories])

    useEffect(() => {
        if (topProducts.length !== 0) {
            setSlide(true)
        } else {
            setSlide(false)
        }
    }, [topProducts])

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
                <TopBusinessman users={bussinessMen} />
                <div className="border-b border-black" />
                {showSlide && (
                    <TopProducts />
                )}
                <div className="border-b border-black" />
                {isFavourite.length !== 0 ? (
                    <FavouritePage />
                ) : null}
                <div className="border-b border-black" />
                {showCat && (
                    <TopCategory setHideCate={setShowCat} />
                )}
                <div className="border-b border-black" />
                <div className="text-3xl font-medium my-5">You may like these:</div>
            </div>
            <Footer />


        </>
    )
}

export default HomeScrn