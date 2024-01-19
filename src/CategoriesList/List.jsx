import './List.css';

export default function List() {
    const allModels = ['Все модели', 'Apple', 'Samsung', 'Huawei', 'Honor', 'Xiaomi'];

    return (
        <div className='categories'>
            <ul>
                {allModels.map((model, index) => {
                    return (
                        <li key={index} className={index === 0 ? 'active' : ''}>
                            {model}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
