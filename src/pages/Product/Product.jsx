import './Product.css';
import { useParams } from 'react-router-dom';

export default function Product() {
    const param = useParams();

    console.log(param);

    return <div>some text w id</div>;
}
