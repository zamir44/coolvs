import React from 'react'
import Image from 'next/image'
import SwiperCore, { Navigation} from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
import showcase from '../showcase'


SwiperCore.use([Navigation]);


const Swipe = () => {
    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                navigation 
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
            {showcase.map(show => (
                <div className="container">
                <SwiperSlide key={show.id} className="slide">
                    <div className="slide-content text-center">
                        <div className="user-image flex justify-center">
                            <Image src={show.src} 
                                    height={show.height}
                                    width={show.width} 
                                    className="user-photo uppercase"
                                    layout="intrinsic"
                                    />
                        </div>
                        <div className="uppercase text-sm tracking-wider">
                            {show.description}
                        </div>
                    </div>
                </SwiperSlide>
                </div>
                ))}
            </Swiper>
        </>
    )
}

export default Swipe
