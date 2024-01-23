import { useState } from 'react';
import './List.css';
import { useDispatch } from 'react-redux';
import { setAdditionalCategory } from './../redux/slices/filterSlice';

export default function List() {
    const allModels = ['Все', 'Apple', 'Samsung', 'Huawei', 'Honor', 'Pocophone'];
    const allModelsForBackend = allModels.map((model) => 'category=' + model + '&');
    allModelsForBackend[0] = '';
    const dispatch = useDispatch();
    const [indexCheckedCategory, setIndexCheckedCategory] = useState(0);

    return (
        <div className='categories'>
            <ul>
                {allModels.map((model, index) => {
                    return (
                        <li
                            onClick={() => {
                                setIndexCheckedCategory(index);
                                dispatch(
                                    setAdditionalCategory({
                                        allModelsForBackend,
                                        model: allModelsForBackend[index],
                                    }),
                                );
                            }}
                            className={index === indexCheckedCategory ? 'active' : ''}
                            key={index}
                        >
                            {model}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
