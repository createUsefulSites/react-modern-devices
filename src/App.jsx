import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Model from './ModelBlock/Model';
import Skeleton from './assets/Skeleton';
import TopCategories from './TopCategories/TopCategories';
import { createContext } from 'react';

export const TagContext = createContext('');

export default function App() {
    const [models, setModels] = useState([]);
    const [additionalTag, setAdditionalTag] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://65aaa8cb081bd82e1d978003.mockapi.io/Models_info' + additionalTag)
            .then((responce) => responce.json())
            .then((answer) => {
                setModels(answer);
                setIsLoading(false);
            });
    }, [additionalTag]);

    return (
        <>
            <Header />
            <div className='content'>
                <div className='container'>
                    <TagContext.Provider value={setAdditionalTag}>
                        <TopCategories />
                    </TagContext.Provider>
                    <h2 className='content__title'>Все товары</h2>
                    <div className='content__items'>
                        {isLoading
                            ? [...new Array(6)].map((skelet, index) => <Skeleton key={index} />)
                            : models.map((model) => <Model {...model} key={model.title} />)}
                    </div>
                </div>
            </div>
        </>
    );
}
