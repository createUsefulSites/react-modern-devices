import './ModelBlockBadges.css';

export default function ModelBlockBadges(newModels) {
    return (
        <div className='model-block__badges'>
            {newModels && (
                <span className='model-block__badges__badge model-block__badges__new'>Новинка</span>
            )}
            <span className='model-block__badges__badge model-block__badges__guarantee'>
                Гарантии
            </span>
            <img
                width='64px'
                height='23px'
                src='https://mimilav.ru/wp-content/uploads/2022/11/Branding-badge-5.png'
                alt='доступна оплата долями'
            />
        </div>
    );
}
