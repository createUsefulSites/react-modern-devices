import { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

export const LeftSideSwiper = memo(function LeftSideSwiper({ image }) {
    let swiperImages = [...new Array(9)].map((item) => (item = image));

    return (
        <Swiper
            direction='vertical'
            spaceBetween={25}
            loop={true}
            slidesPerView='auto'
            navigation={{ nextEl: '.safsaff', prevEl: '.swiper-button-prev' }}
            autoplay={{
                delay: 4000,
            }}
            modules={[Autoplay, Navigation]}
            className='mySwiper'
            slideToClickedSlide={true}
        >
            {swiperImages.map((item, index) => (
                <SwiperSlide key={index}>
                    <img height='85px' src={item} alt='iphone image' />
                </SwiperSlide>
            ))}
        </Swiper>
    );
});
