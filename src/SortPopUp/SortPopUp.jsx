import { useContext } from 'react';
import { TagContext } from './../pages/Home';
import './SortPopUp.css';

export default function SortPopUp({ setFieldVisibility, sortingVariantsFunc }) {
    const sortingVariantsArray = ['популярности', 'цене', 'алфавиту'];
    const sortingVariantsForBackend = [
        'sortBy=rating&order=asc&',
        'sortBy=price&order=asc&',
        'sortBy=title&order=asc&',
    ];
    const { setAdditionalTag, setAdditionalCategory } = useContext(TagContext);

    return (
        <div className='sort__popup' onClick={() => setFieldVisibility((prev) => !prev)}>
            <ul>
                {sortingVariantsArray.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => {
                            sortingVariantsFunc(sortingVariantsArray[index]);
                            setAdditionalTag((prev) => {
                                prev = prev.replace(
                                    new RegExp(prev),
                                    sortingVariantsForBackend[index],
                                );
                                return prev;
                            });
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
