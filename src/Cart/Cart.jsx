import FilledCart from '../CartModel/FilledCart';
import styles from './Cart.module.css';
import EmptyCart from '../EmptyCart/EmptyCart';
import { useSelector } from 'react-redux';

export default function Cart() {
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <>
            <div className={styles.wrapper}>
                {cartItems.length ? <FilledCart /> : <EmptyCart />}
            </div>
        </>
    );
}
