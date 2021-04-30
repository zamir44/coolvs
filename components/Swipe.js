import React from 'react'
import Image from 'next/image'
import SwiperCore, { Navigation} from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
import showcaseTwo from '../showcaseTwo';


SwiperCore.use([Navigation]);


const Swipe = () => {
    return (
        <>
        <Swiper
                spaceBetween={100}
                slidesPerView={1}
                navigation 
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints = {{
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                      width: 320
                    },
                  
                    480: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                      width: 480
                    },
                   
                    640: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                      width: 640
                    }
                  }}
            >
        
            {showcaseTwo.map(show => (
                <div className="container"> 
                    <SwiperSlide  className="slide" key={}>
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
