import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import imageOne from '../../../public/assets/cloth_1.jpg'
import imageTwo from '../../../public/assets/cloth_2.jpg'
import imageFour from '../../../public/assets/shoe_1.jpg'
import imageFive from '../../../public/assets/shoe_2.jpg'


const CarasolOne = () => {
    const SliderOne = <img src={imageOne} alt="" className='w-auto h-32' />
    const SliderTwo = <img src={imageTwo} alt="" className='w-auto h-32' />
    const SliderFour = <img src={imageFour} alt="" className='w-auto h-32' />
    const SliderFive = <img src={imageFive} alt="" className='w-auto h-32' />
    return (
        <>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>{SliderOne}</SwiperSlide>
            <SwiperSlide>{SliderTwo}</SwiperSlide>
            <SwiperSlide>{SliderFour}</SwiperSlide>
            <SwiperSlide>{SliderFive}</SwiperSlide>
        </Swiper>

        <div className='flex-shrink-0 object-center w-svw inse object-cover rounded-xl z gap-2. tracking-widest text-transparent transform translate-y-20 transition-transform delay-1000 '></div>
        </>
    )
}

export default CarasolOne