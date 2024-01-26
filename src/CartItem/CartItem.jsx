import styles from './CartItem.module.css';
import minus from './../assets/minus.svg';
import plus from './../assets/plus.svg';
import { useDispatch } from 'react-redux';
import { removeProduct, addProduct } from './../redux/slices/cartSlice';

export default function CartItem(props) {
    const dispatch = useDispatch();

    function removeOneProduct() {
        props.count > 1
            ? dispatch(removeProduct({ id: props.id, count: 1, price: props.price }))
            : '';
    }

    return (
        <div className={styles.model_wrapper}>
            <div className={styles.model__left_part}>
                <div className={styles.model_image__part}>
                    <img width='65px' src={props.image} />
                    <div className={styles.model_image__part__wrapper}>
                        <h4 className={styles.model_image__header}>{props.cartTitle}</h4>
                        <p className={styles.model_image__descr}>{props.cartDescription}</p>
                    </div>
                </div>

                <div className={styles.cart__counter}>
                    <img
                        onClick={removeOneProduct}
                        width='12px'
                        src={minus}
                        className={props.count === 1 ? styles.changed_opacity : ''}
                        alt='minus img'
                    />
                    <p className={styles.counter__value}>{props.count}</p>
                    <img
                        onClick={() => dispatch(addProduct(props))}
                        width='12px'
                        src={plus}
                        alt='plus img'
                    />
                </div>
            </div>

            <div className={styles.model__right_part}>
                <p className={styles.price}>{props.price} ₽</p>
                <img
                    onClick={() =>
                        dispatch(
                            removeProduct({ id: props.id, count: props.count, price: props.price }),
                        )
                    }
                    width='20px'
                    style={{ opacity: '.4', cursor: 'pointer' }}
                    src='https://cdn.icon-icons.com/icons2/1875/PNG/512/closecircle_120264.png'
                />
            </div>
        </div>
    );
}
