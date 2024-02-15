export default function DiscountBlock({ mainText, descrText, imgSrc, rightSide }) {
    return (
        <section className='discount__product__section'>
            <div className='discount__product'>
                <img
                    className='discount__product__image'
                    height='20px'
                    width='20px'
                    src={imgSrc}
                    alt='скидка'
                />
                <div className='discount__product__info_block'>
                    <div className='discount__product__info_block__main'>{mainText}</div>
                    <div className='discount__product__info_block__descr'>{descrText}</div>
                </div>
            </div>
            <div className='discount__product'>
                <div className='discount__product__info_block__main'>{rightSide}</div>
            </div>
        </section>
    );
}
