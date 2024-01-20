import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './App.css';

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<div>Корзина</div>} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
}
