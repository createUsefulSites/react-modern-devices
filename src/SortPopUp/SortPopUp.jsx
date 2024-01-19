import { useContext } from 'react';
import { TagContext } from '../App';
import './SortPopUp.css';

export default function SortPopUp({ setFieldVisibility, sortingVariantsFunc }) {
    const sortingVariantsArray = ['популярности', 'цене', 'алфавиту'];
    const sortingVariantsForBackend = ['?sortBy=rating=asc', '?sortBy=price', '?sortBy=title'];
    const setAdditionalTag = useContext(TagContext);

    return (
        <div className='sort__popup' onClick={() => setFieldVisibility((prev) => !prev)}>
            <ul>
                {sortingVariantsArray.map((item, index) => (
                    <li
                        key={item.id}
                        onClick={() => {
                            sortingVariantsFunc(sortingVariantsArray[index]);
                            setAdditionalTag(sortingVariantsForBackend[index]);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
