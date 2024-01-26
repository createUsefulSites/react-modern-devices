import './Model.css';
import { useDispatch } from 'react-redux';
import { addProduct } from './../redux/slices/cartSlice';
import { Link } from 'react-router-dom';

export default function Model({
    id,
    title,
    cartTitle,
    cartDescription,
    image,
    price,
    newModels,
    category,
}) {
    const dispatch = useDispatch();
    function formatNumber(number) {
        return new Intl.NumberFormat('ru-RU').format(number);
    }

    return (
        <Link to='/react-modern-devices/cart'>
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
                <img
                    className={
                        category === 'Apple'
                            ? 'model-block__image'
                            : 'model-block__image model-block__image__wider'
                    }
                    src={image}
                />
                <h4 className='model-block__title'>{title}</h4>
                <div className='model-block__bottom'>
                    <div className='model-block__price'>{formatNumber(price)} ₽</div>
                    <Link>
                        <button
                            className='button button__card'
                            onClick={() =>
                                dispatch(
                                    addProduct({ id, cartTitle, cartDescription, image, price }),
                                )
                            }
                        >
                            <span>В корзину</span>
                        </button>
                    </Link>
                </div>
            </div>
        </Link>
    );
}
