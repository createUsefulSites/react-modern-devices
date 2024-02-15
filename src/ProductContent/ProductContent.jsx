import './ProductContent.css';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from './../redux/slices/cartSlice';
import { setInitialState } from '../redux/slices/productContentSlice';
import { ModelSelector } from './ModelSelector/ModelSelector';
import ModelBlockBadges from '../ModelBlockBadges/ModelBlockBadges';

import DiscountBlock from './DiscountBlock/DiscountBlock';
import { LeftSideSwiper } from './LeftSideSwiper/LeftSideSwiper';
import YouMayLikeSwiper from './YouMayLikeSwiper/YouMayLikeSwiper';
import Characteristics from './Characteristics/Characteristics';
import SameModels from './SameModels/SameModels';

export default function ProductContent(props) {
    const dispatch = useDispatch();
    const { id, cartTitle, image } = props;
    const imageRef = useRef(null);

    const title = useSelector((state) => state.productContent.title);
    const currentPrice = useSelector((state) => state.productContent.currentPrice);

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

    function setPaddingLeft() {
        return props.widthCoefficient === 1 ? '50px' : '110px';
    }

    return (
        <>
            <div className='model_wrapper'>
                <div className='model__main_block'>
                    <div className='bigger__part'>
                        <div className='model__left_side'>
                            <img
                                style={{ paddingLeft: setPaddingLeft() }}
                                ref={imageRef}
                                className='model__image'
                                src={props.image}
                            />
                            <LeftSideSwiper image={props.image} />
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

                        <ModelSelector {...props} />

                        <ModelSelector header={'SIM-карта'} />

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
                        <div className='deliver__product'>
                            <DiscountBlock
                                mainText={'Получить скидку'}
                                descrText={'Купон после оплаты'}
                                rightSide={'до 30% стоимости'}
                                imgSrc={
                                    'https://icon-library.com/images/discount-icon-png/discount-icon-png-0.jpg'
                                }
                            />
                            <div className='br'></div>
                            <DiscountBlock
                                mainText={'Обменять товар'}
                                descrText={'Сдайте старую версию в обмен на новую'}
                                rightSide={'бесплатно'}
                                imgSrc={'https://cdn-icons-png.flaticon.com/512/2424/2424455.png'}
                            />
                        </div>
                    </div>
                </div>

                <div className='recommended__header'>Вам обязательно понравятся</div>
            </div>
            <div className='swiper__bottom__wrapper'>
                <YouMayLikeSwiper />
            </div>
            <div className='br'></div>
            <div className='model_wrapper'>
                <Characteristics {...props} />

                <div className='recommended__header'>Похожие товары</div>
            </div>
            <div className='swiper__bottom__wrapper'>
                <SameModels currentId={props.id} category={props.category} />
            </div>
        </>
    );
}
