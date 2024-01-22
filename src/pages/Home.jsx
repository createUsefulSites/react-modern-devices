import { useEffect, useState, createContext, useRef } from 'react';
import Model from './../ModelBlock/Model';
import Skeleton from './../assets/Skeleton';
import TopCategories from './../TopCategories/TopCategories';

export const TagContext = createContext('');

export default function Home() {
    const [models, setModels] = useState([]);
    const [additionalTag, setAdditionalTag] = useState('');
    const [additionalCategory, setAdditionalCategory] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [searchInput, setSearchInput] = useState('');
    const [inputWidth, setInputWidth] = useState({ width: '0px', opacity: '0' });
    const searchField = useRef(null);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://65aaa8cb081bd82e1d978003.mockapi.io/Models_info?' +
                additionalTag +
                additionalCategory,
        )
            .then((responce) => responce.json())
            .then((answer) => {
                setModels(answer);
                setIsLoading(false);
            });
    }, [additionalTag, additionalCategory]);

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
                    <TagContext.Provider value={{ setAdditionalTag, setAdditionalCategory }}>
                        <TopCategories />
                    </TagContext.Provider>
                    <h2 className='content__title'>
                        Все товары
                        <div className='search_input_wrapper' ref={searchField}>
                            <img
                                onClick={() =>
                                    setInputWidth((prev) => {
                                        return { width: '300px', opacity: '1' };
                                    })
                                }
                                className='search_input__image'
                                width='15px'
                                src={'https://cdn-icons-png.flaticon.com/512/622/622669.png'}
                            />
                            <input
                                placeholder='Что вы ищете?'
                                className='search_input__input'
                                style={{ ...inputWidth }}
                                onChange={(event) => {
                                    setSearchInput(event.target.value);
                                }}
                                value={searchInput}
                                type='text'
                            />
                            {searchInput && (
                                <div
                                    onClick={() => {
                                        setSearchInput('');
                                    }}
                                    className='search_input__close'
                                >
                                    x
                                </div>
                            )}
                        </div>
                    </h2>
                    <div className='content__items'>
                        {isLoading
                            ? [...new Array(6)].map((skelet, index) => <Skeleton key={index} />)
                            : models
                                  .filter((model) => {
                                      return model.title
                                          .toLowerCase()
                                          .includes(searchInput.toLowerCase());
                                  })
                                  .map((model) => <Model {...model} key={model.title} />)}
                    </div>
                </div>
            </div>
        </>
    );
}
