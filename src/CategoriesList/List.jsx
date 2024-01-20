import { useState, useContext } from 'react';
import { TagContext } from './../pages/Home';
import './List.css';

export default function List() {
    const allModels = ['Все', 'Apple', 'Samsung', 'Huawei', 'Honor', 'Pocophone'];
    const allModelsForBackend = allModels.map((model) => 'category=' + model + '&');
    const [indexCheckedCategory, setIndexCheckedCategory] = useState(0);
    const { setAdditionalTag, setAdditionalCategory } = useContext(TagContext);

    return (
        <div className='categories'>
            <ul>
                {allModels.map((model, index) => {
                    return (
                        <li
                            onClick={() => {
                                setIndexCheckedCategory(index);
                                index === 0
                                    ? setAdditionalCategory((prev) => '')
                                    : setAdditionalCategory((prev) => {
                                          allModelsForBackend.includes(prev)
                                              ? (prev = prev.replace(
                                                    new RegExp(prev),
                                                    allModelsForBackend[index],
                                                ))
                                              : (prev += allModelsForBackend[index]);
                                          return prev;
                                      });
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
