import './Model.css';
import { useDispatch } from 'react-redux';
import { addProduct } from './../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import ModelBlockBadges from '../ModelBlockBadges/ModelBlockBadges';

export default function Model({
    id,
    title,
    cartTitle,
    cartDescription,
    image,
    price,
    newModels,
    widthCoefficient,
}) {
    const dispatch = useDispatch();
    function formatNumber(number) {
        return new Intl.NumberFormat('ru-RU').format(number);
    }

    function setWidthImage() {
        const resWidth = widthCoefficient ? 200 / widthCoefficient : 150;
        return { width: `${resWidth}px` };
    }

    return (
        <Link to={'/react-modern-devices/product/' + id}>
            <div className='model-block'>
                <div className='badges_wrapper'>
                    <ModelBlockBadges newModels={newModels} />
                </div>
                <img className='model-block__image' style={setWidthImage()} src={image} />
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
