import './Model.css';
import { useDispatch } from 'react-redux';
import { addProduct } from './../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Model({ id, title, cartTitle, cartDescription, image, price, newModels }) {
    const dispatch = useDispatch();
    const [addInCart, setAddInCart] = useState('');

    return (
        <Link
            onClick={(e) =>
                e.target.tagName === 'SPAN' || e.target.tagName === 'BUTTON'
                    ? setAddInCart((prev) => '')
                    : setAddInCart((prev) => '/react-modern-devices/cart')
            }
            to={addInCart}
        >
            <div className='model-block'>
                <div className='model-block__badges'>
                    {newModels && (
                        <span className='model-block__badges__badge model-block__badges__new'>
                            Новинка
                        </span>
                    )}
                    <span className='model-block__badges__badge model-block__badges__guarantee'>
                        Гарантии
                    </span>
                    <img
                        width='70px'
                        src='https://mimilav.ru/wp-content/uploads/2022/11/Branding-badge-5.png'
                        alt=''
                    />
                </div>
                <img className='model-block__image' src={image} alt='iphone 14' />
                <h4 className='model-block__title'>{title}</h4>
                <div className='model-block__bottom'>
                    <div className='model-block__price'>{price} ₽</div>
                    <button
                        className='button button__card'
                        onClick={() =>
                            dispatch(addProduct({ id, cartTitle, cartDescription, image, price }))
                        }
                    >
                        <span>В корзину</span>
                    </button>
                </div>
            </div>
        </Link>
    );
}
