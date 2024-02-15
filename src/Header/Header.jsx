import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import iphonesLogo from './../assets/iphones_logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { resetAllParametrs, setindexCheckedCategory } from './../redux/slices/filterSlice';

export default function Header() {
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const totalCount = useSelector((state) => state.cart.totalCount);
    const { pathname } = useLocation();
    const dispatch = useDispatch();

    const headerRef = useRef(null);

    useEffect(() => {
        function headerStickyHandler() {
            if (headerRef.current.getBoundingClientRect().top === 0) {
                headerRef.current.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.1)';
            } else {
                headerRef.current.style.boxShadow = '';
            }
        }

        document.addEventListener('scroll', headerStickyHandler);

        return () => document.removeEventListener('scroll', headerStickyHandler);
    }, []);

    function formatNumber(number) {
        return new Intl.NumberFormat('ru-RU').format(number);
    }

    function resetFilters() {
        dispatch(resetAllParametrs());
        dispatch(setindexCheckedCategory(0));
    }

    return (
        <div ref={headerRef} className='header'>
            <div className='container'>
                <Link to='/react-modern-devices'>
                    <div
                        onClick={resetFilters}
                        className='header__logo'
                        style={{ cursor: 'pointer' }}
                    >
                        <img
                            width='50px'
                            height='51px'
                            src={iphonesLogo}
                            alt='Iphones logo'
                            style={{ cursor: 'pointer', alignSelf: 'center' }}
                        />
                        <div>
                            <h1>Техника новая и б/у</h1>
                            <p>самые свежие и актуальные модели</p>
                        </div>
                    </div>
                </Link>
                {pathname !== '/react-modern-devices/cart' && (
                    <div className='header__cart'>
                        <Link to='/react-modern-devices/cart' className='button button--cart'>
                            <span>{formatNumber(totalPrice)} руб</span>
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
                )}
            </div>
        </div>
    );
}
