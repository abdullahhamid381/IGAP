import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './Scss/TopProduct.scss'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { TopProducts } from "../../Data";
import { Link } from "react-router-dom";


export default function TopProduct() {
    return (

        <div className="top-product-back">
            <div className="TopProuct-parent">
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
              

                navigation={true}

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}


                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 8,
                        spaceBetween: 10,
                    },
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >

                {
                    TopProducts.map((map) => {
                        return (
                        <Link to='/category'>
                                <SwiperSlide>
                            <div>
                              
                                    <img src='./images/10.png' alt="" />
                                  
                                
                            </div>
                            </SwiperSlide>
                        </Link>
                        )
                    })
                }
            </Swiper>
        </div>
        </div>


    );
}
