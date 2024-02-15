export default function Characteristics({ header, cartTitle, memory, title }) {
    return (
        <>
            <div className='recommended__header сharactericstics__header'>Характеристики</div>
            <div className='character__info__wrapper'>
                <div className='character__info__left'>
                    <div className='character__info__title'>Основные характеристики</div>
                </div>
                <div className='character__info__right'>
                    <div className='character__info__descr__wrapper'>
                        <div className='character__info__descr__header'>Модель</div>
                        <div className='character__info__descr__inner'>{cartTitle}</div>
                    </div>

                    <div className='character__info__descr__wrapper'>
                        <div className='character__info__descr__header'>Память</div>
                        <div className='character__info__descr__inner'>
                            <ul style={{ paddingLeft: '16px' }} className='list_memory'>
                                {memory.map((item, index) => (
                                    <li key={index} className='item_memory'>
                                        {item[0] + ' ГБ'}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className='character__info__descr__wrapper'>
                        <div className='character__info__descr__header'>Цвет</div>
                        <div className='character__info__descr__inner capitalize'>
                            {title.slice(title.indexOf(',') + 2, title.length)}
                        </div>
                    </div>
                </div>
            </div>

            <div className='character__info__wrapper'>
                <div className='character__info__left'>
                    <div className='character__info__title'>Процессор</div>
                </div>
                <div className='character__info__right'>
                    <div className='character__info__descr__wrapper'>
                        <div className='character__info__descr__header'>Процессор</div>
                        <div className='character__info__descr__inner'>A17 Pro</div>
                    </div>
                </div>
            </div>

            <div className='character__info__wrapper'>
                <div className='character__info__left'>
                    <div className='character__info__title'>Дисплей</div>
                </div>
                <div className='character__info__right'>
                    <div className='character__info__descr__wrapper'>
                        <div className='character__info__descr__header'>Диагональ</div>
                        <div className='character__info__descr__inner'>6,2″</div>
                    </div>
                    <div className='character__info__descr__wrapper'>
                        <div className='character__info__descr__header'>Разрешение</div>
                        <div className='character__info__descr__inner'>2556x1179</div>
                    </div>
                    <div className='character__info__descr__wrapper'>
                        <div className='character__info__descr__header'>Яркость</div>
                        <div className='character__info__descr__inner'>2000 кд/м²</div>
                    </div>
                    <div className='character__info__descr__wrapper'>
                        <div className='character__info__descr__header'>Контрастность</div>
                        <div className='character__info__descr__inner'>2000000:1</div>
                    </div>
                    <div className='character__info__descr__wrapper'>
                        <div className='character__info__descr__header'>
                            Плотность пикселей на дюйм
                        </div>
                        <div className='character__info__descr__inner'>460 пикс/дюйм</div>
                    </div>
                    <div className='character__info__descr__wrapper'>
                        <div className='character__info__descr__header'>Тип дисплея</div>
                        <div className='character__info__descr__inner'>OLED</div>
                    </div>
                    <div className='character__info__descr__wrapper'>
                        <div className='character__info__descr__header'>Технологии дисплея</div>
                        <div className='character__info__descr__inner'>
                            <ul style={{ paddingLeft: '16px' }} className='list_memory'>
                                <li className='item_memory'>
                                    ProMotion с адаптивной частотой обновления до 120 Гц
                                </li>
                                <li className='item_memory'>True Tone</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='character__info__wrapper'>
                <div className='character__info__left'>
                    <div className='character__info__title'>Камера</div>
                </div>
                <div className='character__info__right'>
                    <div className='character__info__descr__wrapper'>
                        <div className='character__info__descr__header'>Разрешение камеры</div>
                        <div className='character__info__descr__inner'>48 Мп + 12 Мп + 12 Мп</div>
                    </div>
                    <div className='character__info__descr__wrapper'>
                        <div className='character__info__descr__header'>Технологии дисплея</div>
                        <div className='character__info__descr__inner'>
                            <ul style={{ paddingLeft: '16px' }} className='list_memory'>
                                <li className='item_memory'>сверхширокоугольный</li>
                                <li className='item_memory'>основной</li>
                                <li className='item_memory'>телефото</li>
                            </ul>
                        </div>
                    </div>
                    <div className='character__info__descr__wrapper'>
                        <div className='character__info__descr__header'>Защита объектива</div>
                        <div className='character__info__descr__inner'>сапфировое стекло</div>
                    </div>
                    <div className='character__info__descr__wrapper'>
                        <div className='character__info__descr__header'>Технологии камеры</div>
                        <div className='character__info__descr__inner'>LIDAR</div>
                    </div>
                    <div className='character__info__descr__wrapper'>
                        <div className='character__info__descr__header'>
                            Плотность пикселей на дюйм
                        </div>
                        <div className='character__info__descr__inner'>460 пикс/дюйм</div>
                    </div>
                    <div className='character__info__descr__wrapper'>
                        <div className='character__info__descr__header'>Тип дисплея</div>
                        <div className='character__info__descr__inner'>OLED</div>
                    </div>
                </div>
            </div>
        </>
    );
}
