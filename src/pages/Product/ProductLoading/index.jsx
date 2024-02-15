import './style.css';

export default function ProductLoading() {
    return (
        <>
            <div className='loading_main_wrapper'>
                <div className='main_inner_wrapper'>
                    <img
                        className='loading_gif'
                        width='300px'
                        src='https://rb.ru/media/upload_tmp/2018/d5.gif'
                        alt='loading gif 2'
                    />
                    <div className='main_wrapper__header'>Выбранный товар загружается</div>

                    <div className='main_wrapper__descr'>
                        Пожалуйста, подождите некоторое время, скорость загрузки зависит от вашего
                        интернет-соединения
                    </div>
                </div>
            </div>
        </>
    );
}
