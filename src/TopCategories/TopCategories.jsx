import { useState } from 'react';
import List from '../CategoriesList/List';
import SortPopUp from '../SortPopUp/SortPopUp';
import sortUp from './../assets/sortUp.svg';
import './TopCategories.css';

export default function TopCategories() {
    const [sortingType, setSortingType] = useState('популярности');
    const [isFieldVisble, setIsFieldVisble] = useState(false);

    return (
        <div className='content__top'>
            <List />
            <div className='sort'>
                <div className='sort__label'>
                    <img src={sortUp} className='sort-arrow'></img>
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
