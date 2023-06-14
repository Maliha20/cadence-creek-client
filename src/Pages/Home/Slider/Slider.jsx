
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Pagination } from "swiper";


import img1 from '../../../assets/carousel/img1.png'
import img2 from '../../../assets/carousel/imgage2.png'
import img3 from '../../../assets/carousel/image3.jpg'
import img4 from '../../../assets/carousel/image4.jpeg'
import img5 from '../../../assets/carousel/image5.jpg'


const Slider = () => {
  return (
    <div className="shadow-xl shadow-sky-600 container mx-auto my-16">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
        <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img5} alt="" /></SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Slider;
