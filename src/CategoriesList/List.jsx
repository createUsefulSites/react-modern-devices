import './List.css';
import { useDispatch, useSelector } from 'react-redux';
import { setAdditionalCategory, setindexCheckedCategory } from './../redux/slices/filterSlice';

export default function List() {
    const allModels = ['Все', 'Apple', 'Samsung', 'Huawei', 'Honor', 'Pocophone'];
    const allModelsForBackend = allModels.map((model) => 'category=' + model + '&');
    allModelsForBackend[0] = '';
    const dispatch = useDispatch();
    const indexCheckedCategory = useSelector((state) => state.filter.indexCheckedCategory);

    function setCategory(index) {
        dispatch(setindexCheckedCategory(index));
        dispatch(
            setAdditionalCategory({
                allModelsForBackend,
                model: allModelsForBackend[index],
            }),
        );
    }

    return (
        <div className='categories'>
            <ul>
                {allModels.map((model, index) => {
                    return (
                        <li
                            onClick={() => setCategory(index)}
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
