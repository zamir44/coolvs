import React from 'react'
import Image from 'next/image'
import SwiperCore, { Navigation} from 'swiper'
import { Swiper, SwiperSlide} from 'swiper/react'
import swiperTwo from '../swiperTwo'
import useTranslation from 'next-translate/useTranslation'



SwiperCore.use([Navigation]);

const SwipeTwo = () => {

    let { t } = useTranslation()

    return (
        <>
        <div className="mb-32">
            <p className="text-gray-800 text-2xl md:text-3xl lg:text-4xl uppercase text-center tracking-widest">{t('common:title3')}</p>
        </div>
        <Swiper

            className="overflow-hidden hajde"
            spaceBetween={30}
            slidesPerView= {1}
            navigation 
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            loop = "true"
            breakpoints = {{
        
            499: {
                slidesPerView: 2,
                spaceBetweenSlides: 30
            },

            999: {
                slidesPerView: 3,
                spaceBetweenSlides: 40
            } 
        }}
    >

    {swiperTwo.map(show => (
        <SwiperSlide  className="slide overflow-hidden" key={show.id}>
                <div className="slide-content text-center">
                    <div className="user-image flex justify-center">
                        <a>
                            <Image src={show.src} 
                            height={show.height}
                            width={show.width} 
                            className="user-photo uppercase"
                            layout = "intrinsic"
                            />
                        </a>
                    </div>
                    <div className="uppercase text-sm tracking-wider mt-10">
                        {show.description}
                    </div>
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
        </>
    )
}

export default SwipeTwo
