import styles from './PageNotFound.module.css';

export default function PageNotFound() {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.smile}>😞</div>
                <div className={styles.not_found_header}>Страница не найдена на нашем сайте</div>
            </div>
        </>
    );
}
