import './SortPopUp.css';
import { useDispatch } from 'react-redux';
import { setAdditionalTag } from './../redux/slices/filterSlice';
import { useEffect, useRef } from 'react';

export default function SortPopUp({ setFieldVisibility, sortingVariantsFunc }) {
    const dispatch = useDispatch();
    const formRef = useRef();

    const sortingVariantsArray = ['популярности', 'цене', 'алфавиту'];
    const sortingVariantsForBackend = [
        'sortBy=rating&order=desc&',
        'sortBy=price&order=asc&',
        'sortBy=title&order=asc&',
    ];

    return (
        <div
            className='sort__popup'
            onClick={() => {
                setFieldVisibility((prev) => !prev);
            }}
        >
            <ul>
                {sortingVariantsArray.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => {
                            sortingVariantsFunc(sortingVariantsArray[index]);
                            dispatch(
                                setAdditionalTag({
                                    sortingVariantsForBackend,
                                    variant: sortingVariantsForBackend[index],
                                }),
                            );
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
