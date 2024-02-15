import './List.css';
import { useDispatch, useSelector } from 'react-redux';
import { setAdditionalCategory, setindexCheckedCategory } from './../redux/slices/filterSlice';

export default function List() {
    const allModels = ['Все', 'Apple', 'Samsung', 'Huawei', 'Honor', 'Pocophone'];
    const allModelsForBackend = allModels.map((model) => 'category=' + model + '&');
    allModelsForBackend[0] = '';
    const status = useSelector((state) => state.models.status);

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
                            onClick={() => {
                                if (status === 'success') {
                                    setTimeout(() => setCategory(index), 20);
                                }
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
