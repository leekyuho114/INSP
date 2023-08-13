import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Showcase.css';
function Showcase(){
    return(
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true }}
          className = 'slide-module'
        >
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
            <SwiperSlide className = "main-bg1">

            </SwiperSlide>
            <SwiperSlide className = "main-bg2"></SwiperSlide>
            <SwiperSlide className = "main-bg3"></SwiperSlide>
            <SwiperSlide className = "main-bg4">
              <img src='https://www.pinterest.co.kr/pin/25895766601059108/'></img>
            </SwiperSlide>
            <SwiperSlide className = "main-bg5"></SwiperSlide>
        </Swiper>
    );
}

export default Showcase;