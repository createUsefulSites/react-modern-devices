import './Model.css';

export default function Model({ title, image, memoryTypes, price, newModel }) {
    return (
        <div className='model-block'>
            <div className='model-block__badges'>
                {newModel && (
                    <span className='model-block__badges__badge model-block__badges__new'>
                        Новинка
                    </span>
                )}
                <span className='model-block__badges__badge model-block__badges__new'>Новинка</span>
                <span className='model-block__badges__badge model-block__badges__guarantee'>
                    Гарантии
                </span>
                <img
                    width='70px'
                    src='https://mimilav.ru/wp-content/uploads/2022/11/Branding-badge-5.png'
                    alt=''
                />
            </div>
            <img className='model-block__image' src={image} alt='iphone 14' />
            <h4 className='model-block__title'>{title}</h4>
            <div className='model-block__bottom'>
                <div className='model-block__price'>{price} ₽</div>
                <div className='button button__card'>
                    <span>В корзину</span>
                </div>
            </div>
        </div>
    );
}
