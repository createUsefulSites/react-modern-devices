import './Header.css';
import { Link } from 'react-router-dom';
import iphonesLogo from './../assets/iphones_logo.png';
import { useSelector } from 'react-redux';

export default function Header() {
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const totalCount = useSelector((state) => state.cart.totalCount);

    return (
        <div className='header'>
            <div className='container'>
                <Link to='/react-modern-devices'>
                    <div className='header__logo' style={{ cursor: 'pointer' }}>
                        <img
                            width='50px'
                            src={iphonesLogo}
                            alt='Iphones logo'
                            style={{ cursor: 'pointer' }}
                        />
                        <div>
                            <h1>Техника новая и б/у</h1>
                            <p>самые свежие и актуальные модели</p>
                        </div>
                    </div>
                </Link>
                <div className='header__cart'>
                    <Link to='/react-modern-devices/cart' className='button button--cart'>
                        <span>{totalPrice} руб</span>
                        <div className='cart__separator'></div>
                        <div className='header__cart__rightPart'>
                            <img
                                width='18px'
                                src='https://pngimg.com/d/shopping_cart_PNG4.png'
                                alt='cart icon'
                            />
                            <span className='header__cart__counter'>{totalCount}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
