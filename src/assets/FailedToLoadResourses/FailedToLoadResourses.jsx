import styles from './FailedToLoadResourses.module.css';

export default function FailedToLoadResourses() {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.header}>Кажется произошла ошибка 😞</h3>
            <p className={styles.descr}>Произошла ошибка при загрузке ресурсов</p>
            <p className={styles.descr}>Пожалуйста, повторите попытку чуть позже</p>
        </div>
    );
}
