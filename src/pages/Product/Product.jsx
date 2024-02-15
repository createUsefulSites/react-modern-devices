import './Product.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductContent from '../../ProductContent/ProductContent';
import ProductLoading from './ProductLoading';

export default function Product() {
    const [modelInfo, setModelInfo] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(
                    'https://65aaa8cb081bd82e1d978003.mockapi.io/Models_info/' + id,
                );
                setModelInfo((prev) => data);
            } catch (error) {
                console.log('Товар не найден');
            }
        })();
    }, []);

    return (
        <>
            {modelInfo ? (
                <div>{<ProductContent {...modelInfo}></ProductContent>}</div>
            ) : (
                <ProductLoading />
            )}
        </>
    );
}
