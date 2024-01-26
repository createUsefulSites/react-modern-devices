import styles from './EmptyCart.module.css';
import { Link } from 'react-router-dom';

export default function EmptyCart() {
    return (
        <>
            <div className={styles.header}>Корзина пуста</div>
            <div className={styles.descr}>
                в нашем магазине огромное количество товаров, которые могут вам понравиться!
            </div>

            <Link to='/react-modern-devices'>
                <button className={styles.goMain}>на главную</button>
            </Link>
        </>
    );
}
