import './ProductContent.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from './../redux/slices/cartSlice';
import { setInitialState } from '../redux/slices/productContentSlice';
import ModelSelector from './ModelSelector/ModelSelector';
import ModelBlockBadges from '../ModelBlockBadges/ModelBlockBadges';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

export default function ProductContent(props) {
    const dispatch = useDispatch();
    const { id, cartTitle, image } = props;

    const title = useSelector((state) => state.productContent.title);
    const currentPrice = useSelector((state) => state.productContent.currentPrice);

    let swiperImages = [...new Array(9)].map((item) => (item = props.image));

    const simTypesArr = ['single-SIM', 'dual-SIM'];

    useEffect(() => {
        dispatch(
            setInitialState({
                currentPrice: props.price,
                currentMemory: props.currentMemory,
                title: props.title,
                simType: props.cartDescription.split(' ')[0],
            }),
        );
    }, []);

    function formatNumber(number) {
        return new Intl.NumberFormat('ru-RU').format(number);
    }

    return (
        <>
            <div className='model_wrapper'>
                <div className='model__main_block'>
                    <div className='bigger__part'>
                        <div className='model__left_side'>
                            <img className='model__image' src={props.image} />
                            <Swiper
                                direction='vertical'
                                spaceBetween={25}
                                loop={true}
                                centeredSlides={true}
                                watchOverflow={true}
                                slidesPerView={3.3}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}
                                className='mySwiper'
                                on={('slideChange', () => console.log(1))}
                            >
                                {swiperImages.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <img height='85px' src={item} alt='iphone image' />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    <div className='model__right_side'>
                        <div className='header_and_badges'>
                            <div className='model__header'>{title}</div>
                            <ModelBlockBadges newModels={props.newModels} />
                        </div>
                        <div className='model__selector'>
                            <div className='model__selector__header'>Категория</div>
                            <div className='model__selector__checkbox model__selector__checkbox_current'>
                                {props.category}
                            </div>
                        </div>

                        <ModelSelector {...props} header={'Память'} />

                        <ModelSelector simTypesArr={simTypesArr} header={'SIM-карта'} />

                        <div className='bottom__part_price'>
                            <div className='br'></div>
                            <div className='price__block'>
                                <div className='current_price'>
                                    {formatNumber(currentPrice) + ' ₽'}
                                </div>
                                <div className='discount'>
                                    До +{Math.floor(currentPrice / 10)} бонусов
                                </div>
                            </div>
                            <div className='models_buttons'>
                                <button
                                    onClick={() => {
                                        dispatch(
                                            addProduct({
                                                id,
                                                cartTitle,
                                                cartDescription: title.replace(cartTitle, ''),
                                                image,
                                                price: currentPrice,
                                            }),
                                        );
                                    }}
                                    className='model__button button_add_to_cart'
                                >
                                    <span className='model__button__text'>Добавить в корзину</span>
                                </button>
                                <button className='model__button button_black_model'>
                                    Оплатить
                                    <img
                                        className='button_black_model__image'
                                        width='100px'
                                        src='https://mimilav.ru/wp-content/uploads/2022/11/Branding-badge-5.png'
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
