import { useState } from 'react';
import List from '../CategoriesList/List';
import SortPopUp from '../SortPopUp/SortPopUp';
import './TopCategories.css';

export default function TopCategories() {
    const [sortingType, setSortingType] = useState('выбрать');
    const [isFieldVisble, setIsFieldVisble] = useState(false);

    return (
        <div className='content__top'>
            <List />
            <div className='sort'>
                <div className='sort__label'>
                    <b>Сортировка по:</b>
                    <span onClick={() => setIsFieldVisble(!isFieldVisble)}>{sortingType}</span>
                </div>
                {isFieldVisble && (
                    <SortPopUp
                        setFieldVisibility={setIsFieldVisble}
                        sortingVariantsFunc={setSortingType}
                    />
                )}
            </div>
        </div>
    );
}
