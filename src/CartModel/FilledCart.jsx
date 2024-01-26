import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import styles from './FilledCart.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeAllProducts } from './../redux/slices/cartSlice';

export default function FilledCart() {
    const { totalPrice, totalCount, items: cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <>
            <div className={styles.cart}>
                <div className={styles.left_part}>
                    <img
                        width='26px'
                        style={{ filter: 'invert(100%)' }}
                        src='https://pngimg.com/d/shopping_cart_PNG4.png'
                        alt='cart image'
                    />
                    <h3 className={styles.cart__header}>Корзина</h3>
                </div>

                <div className={styles.right_part} onClick={() => dispatch(removeAllProducts())}>
                    <img
                        width='14px'
                        style={{ opacity: '.4', cursor: 'pointer' }}
                        src='https://cdn-icons-png.flaticon.com/512/1483/1483063.png'
                        alt=''
                    />
                    <p className={styles.cart__clear}>Очистить корзину</p>
                </div>
            </div>

            <div className={styles.models__wrapper}>
                {cartItems.map((model) => (
                    <CartItem {...model} key={model.id} />
                ))}
            </div>

            <div className={styles.counter_and_total_price}>
                <div className={styles.bottom_left_part}>
                    <div className={styles.total__count}>
                        Всего товаров: <span style={{ fontWeight: 'bold' }}>{totalCount} шт.</span>
                    </div>
                    <Link to='/react-modern-devices'>
                        <button className={`${styles.button} ${styles.back_button}`}>
                            <img
                                width='17px'
                                style={{ top: '0.5px', position: 'relative' }}
                                src='https://cdn.icon-icons.com/icons2/1993/PNG/512/arrow_back_chevron_direction_left_navigation_right_icon_123223.png'
                            />
                            На главную
                        </button>
                    </Link>
                </div>

                <div className={styles.bottom_right_part}>
                    <div className={styles.total__price}>
                        Сумма заказа:{' '}
                        <span style={{ fontWeight: 'bold', color: '#1f5afc' }}>{totalPrice} ₽</span>
                    </div>
                    <button className={`${styles.button} ${styles.order_button}`}>
                        Оформить заказ
                    </button>
                </div>
            </div>
        </>
    );
}
