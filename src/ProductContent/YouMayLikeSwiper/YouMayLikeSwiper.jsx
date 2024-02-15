import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import Model from '../../ModelBlock/Model';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTopModels } from '../../redux/slices/modelSlice';
import ContentLoader from 'react-content-loader';

export default function YouMayLikeSwiper() {
    const dispatch = useDispatch();
    const topModelsStatus = useSelector((state) => state.models.topModelsStatus);

    useEffect(() => {
        dispatch(fetchTopModels());
    }, []);

    const topModels = JSON.parse(localStorage.getItem('topModels'));

    return (
        <>
            {topModelsStatus === 'success' ? (
                <>
                    <div className='s-button-prev2'></div>
                    <Swiper
                        navigation={{
                            nextEl: '.s-button-next2',
                            prevEl: '.s-button-prev2',
                        }}
                        slidesPerView='auto'
                        modules={[Autoplay, Navigation]}
                        className='mySwiper2'
                        slideActiveClass='none'
                        autoplay={{
                            delay: 3000,
                        }}
                    >
                        {topModels.map((_, index) => (
                            <SwiperSlide key={index} className='swiper-slide2'>
                                <Model
                                    fullSize={false}
                                    clickHandler={() => {
                                        window.scrollTo(0, 0);
                                        setInterval(() => location.reload(), 10);
                                    }}
                                    {...topModels[index]}
                                    heightValue='120px'
                                    fontSize='15px'
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='s-button-next2'></div>
                </>
            ) : (
                <div className='skeletons__wrapper'>
                    {[...new Array(3)].map((_, index) => {
                        return (
                            <ContentLoader
                                key={index}
                                speed={2}
                                width={360}
                                height={400}
                                viewBox='0 0 360 400'
                                backgroundColor='#f3f3f3'
                                foregroundColor='#ecebeb'
                            >
                                <rect x='52' y='37' rx='6' ry='6' width='70' height='23' />
                                <rect x='137' y='36' rx='6' ry='6' width='70' height='23' />
                                <rect x='228' y='36' rx='6' ry='6' width='70' height='23' />
                                <rect x='128' y='85' rx='7' ry='7' width='95' height='120' />
                                <rect x='35' y='209' rx='10' ry='10' width='288' height='48' />
                                <rect x='136' y='266' rx='4' ry='4' width='80' height='27' />
                                <rect x='103' y='306' rx='9' ry='9' width='150' height='45' />
                            </ContentLoader>
                        );
                    })}
                </div>
            )}
        </>
    );
}
