import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import './BannerSlider.scss'

// import required modules
import { Pagination } from "swiper";

export default function BannerSlider() {
  return (
    <div className="banner-slider-parent">
      {/* <Swiper pagination={{clickable:true}} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src="./images/5.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/6.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/7.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/8.png" alt="" /></SwiperSlide>
       
      </Swiper> */}
      <div style={{}}>
      <img src="./images/5.jpg" alt="" style={{height:'370px',boxShadow:'0px 0px 5px 0px #00000042'}}/>
      </div>
    </div>
  );
}
