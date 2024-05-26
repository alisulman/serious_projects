/* eslint-disable react/jsx-key */
// import React from 'react'

import { useDispatch, useSelector } from "react-redux"
import Header from "../../component/header"
import Navbar from "../../component/navbar"
import { useEffect, useState } from "react"
import TopBusinessman from "./topBusinessman"
import TopProducts from "./topProducts"
import TopCategory from "./topCategory"
import { fetchBussinessMen } from "../../../apps/action/authAction"
import FavouritePage from "./favouritePage"
import Footer from "../../component/footer"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SEO_Comp from "../../component/SEO"



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
            <SEO_Comp title='Home-Inifinity Isles' description='A free Packages to buy your choice Product' keywords='Shopping, Ecommerce Store' author='Ali Sulman' />
            <Header />
            <Navbar />
            <div className="relative h-full">
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 30000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, EffectFade, Navigation, Pagination]}
                >
                    <SwiperSlide className="w-full h-[410px]" >
                        <img src="https://static.vecteezy.com/system/resources/previews/006/560/561/original/4-april-sale-poster-or-banner-with-4-over-on-product-podium-scene-april-4-sales-banner-template-design-for-social-media-and-website-special-offer-sale-50-off-campaign-or-promotion-free-vector.jpg" className='w-full h-full object-cover object-top' />
                    </SwiperSlide>
                    <SwiperSlide className="w-full h-[410px]" >
                        <img src="https://i.pngimg.me/thumb/f/720/52e3fed22b0f436f86c0.jpg" className='w-full h-full object-cover' />
                    </SwiperSlide>
                    <SwiperSlide className="w-full h-[410px]">
                        <img src="https://img.freepik.com/premium-psd/black-friday-sale-facebook-banner-template_252779-772.jpg" className='w-full h-full object-cover object-top' />
                    </SwiperSlide>
                    <SwiperSlide className="w-full h-[410px]">
                        <img src="https://cdn.dribbble.com/users/5680396/screenshots/14325328/media/1878b28d84d191bcf9857e1400050b34.png?resize=400x0" className='w-full h-fullobject-cover' />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className=" mx-20 my-10">
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