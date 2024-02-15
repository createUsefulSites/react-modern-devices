import { useEffect, useState, useRef, useCallback } from 'react';
import debounce from 'lodash.debounce';
import Model from './../ModelBlock/Model';
import Skeleton from './../assets/Skeleton';
import TopCategories from './../TopCategories/TopCategories';
import { useSelector, useDispatch } from 'react-redux';
import { fetchModels } from './../redux/slices/modelSlice';
import FailedToLoadResourses from '../assets/FailedToLoadResourses/FailedToLoadResourses';

export default function Home() {
    const additionalTag = useSelector((state) => state.filter.additionalTag);
    const additionalCategory = useSelector((state) => state.filter.additionalCategory);
    const dispatch = useDispatch();

    const [searchInput, setSearchInput] = useState('');
    const [inputValueForBack, setInputValueForBack] = useState('');
    const [inputWidth, setInputWidth] = useState({ width: '0px', opacity: '0' });
    const searchField = useRef(null);
    const inputRef = useRef(null);

    const status = useSelector((state) => state.models.status);
    const models = JSON.parse(localStorage.getItem('models'));

    const updateSearchValue = useCallback(
        debounce((value) => {
            setInputValueForBack(value);
        }, 300),
        [],
    );

    useEffect(() => {
        (async () => {
            dispatch(
                fetchModels({
                    inputValueForBack,
                    additionalTag,
                    additionalCategory,
                }),
            );
        })();
    }, [additionalTag, additionalCategory, inputValueForBack]);

    function onChangeInput(event) {
        const value = event.target.value;
        setSearchInput(value);
        updateSearchValue(value);
    }

    useEffect(() => {
        if (inputWidth.opacity == '0') return;

        function handleClick(e) {
            if (!searchField.current || searchField.current.firstChild.nextElementSibling.value)
                return;
            if (!searchField.current.contains(e.target)) {
                setInputWidth((prev) => {
                    return { width: '0px', opacity: '0' };
                });
            }
        }

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, [inputWidth]);

    return (
        <>
            <div className='content'>
                <div className='container'>
                    <TopCategories />
                    <h2 className='content__title'>
                        Все товары
                        <div className='search_input_wrapper' ref={searchField}>
                            <img
                                onClick={() => {
                                    inputRef.current.focus();
                                    setInputWidth((prev) => {
                                        return { width: '300px', opacity: '1' };
                                    });
                                }}
                                className='search_input__image'
                                width='15px'
                                src='https://cdn-icons-png.flaticon.com/512/622/622669.png'
                            />
                            <input
                                ref={inputRef}
                                placeholder='Что вы ищете?'
                                className='search_input__input'
                                style={{ ...inputWidth }}
                                onChange={(event) => {
                                    onChangeInput(event);
                                }}
                                value={searchInput}
                                type='text'
                            />
                            {searchInput && (
                                <div
                                    onClick={() => {
                                        setSearchInput('');
                                        setInputValueForBack('');
                                    }}
                                    className='search_input__close'
                                >
                                    x
                                </div>
                            )}
                        </div>
                    </h2>
                    <div className='content__items'>
                        {status === 'error' ? (
                            <FailedToLoadResourses />
                        ) : status === 'loading' ? (
                            [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                        ) : (
                            models.map((model) => <Model {...model} key={model.title} />)
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
