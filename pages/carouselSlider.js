import React, { useState } from "react";
import SwiperCore, { Navigation,Thumbs } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"



SwiperCore.use([Navigation,Thumbs]);


const CarouselSlider = () => {
    
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    
    
    return (
        <>
        <div className="w-full flex space-between ml-20 mt-28">
            <div>
                <Swiper style={{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}} 
                    loop={true} 
                    spaceBetween={10} 
                    thumbs={{ swiper: thumbsSwiper }} 
                    className="mySwiper3">
                    <SwiperSlide><img src="/showcase/vogue-VO5334-W44-54_030A.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/showcase/Vogue-VO5334-W44-d090.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/showcase/vogue-VO5334-W44-54_000A.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/showcase/vogue-VO5334-W44-54_330A.jpg" /></SwiperSlide>
                </Swiper>
                
                <Swiper 
                    onSwiper={setThumbsSwiper} 
                    spaceBetween={10} 
                    slidesPerView={4} 
                    freeMode={true} 
                    watchSlidesVisibility={true} 
                    watchSlidesProgress={true} 
                    className="mySwiper mt-3">
                    <SwiperSlide className="swiperThumb"><img src="/showcase/vogue-VO5334-W44-54_030A.jpg" /></SwiperSlide>
                    <SwiperSlide className="swiperThumb"><img src="/showcase/Vogue-VO5334-W44-d090.jpg" /></SwiperSlide>
                    <SwiperSlide className="swiperThumb"><img src="/showcase/vogue-VO5334-W44-54_000A.jpg" /></SwiperSlide>
                    <SwiperSlide className="swiperThumb"><img src="/showcase/vogue-VO5334-W44-54_330A.jpg" /></SwiperSlide>
                </Swiper>
            </div>

    <div className="ml-20">
        
        <div className="text-sm text-blue-400">Ray Ban </div>
            <h2 className="text-3xl">Ray Ban Exclusive</h2>
            <p className="mt-3">Blush Tortoise</p>
        </div>
        </div>
        </>
        
        
    )
}

export default CarouselSlider


