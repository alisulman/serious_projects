import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchTopProducts } from '../../../apps/action/prodAction';


const TopProducts = () => {
    const truncateText = (text, maxWords) => {
        let word = text.split(' ')
        if (word.length > maxWords) {
            return word.slice(0, maxWords).join(' ') + "..."
        } else {
            return text
        }
    }

    const dispatch = useDispatch()

    const state = useSelector(state => state.Product)
    const products = state.topProducts

    useEffect(() => {
        dispatch(fetchTopProducts())
    }, [dispatch])
    return (
        <>
            <div className='relative'>
                <div className="text-3xl font-medium my-5">Top Rating Products: </div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true
                    }}
                    modules={[Autoplay, EffectCoverflow, Pagination]}
                    initialSlide={Math.floor(products.length === 1 ? 1 : products.length / 2)}
                    className="mySwiper"
                >
                    {products?.map(product => (
                        <SwiperSlide key={product._id}>
                            <img src={product.images} />
                            <div className='absolute bottom-0 text-center bg-white bg-opacity-50 w-full'>
                                <div className='capitalize text-2xl font-[600]'>{truncateText(product?.title, 3)}</div>
                                <div className='text-xl leading-3 mb-2'>{truncateText(product?.description, 5)}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default TopProducts
