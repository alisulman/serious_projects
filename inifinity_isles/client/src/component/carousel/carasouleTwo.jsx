// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../css/style.css'
// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function CarsoulTwo() {
  return (
    <>
     wiperSlide className='swiper-slide'>
          <img src=""/>
        </SwiperSlide>
        
        <SwiperSlide className='swiper-slide'>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg"/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
