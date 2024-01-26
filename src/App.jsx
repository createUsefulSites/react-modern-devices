import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './App.css';
import Cart from './Cart/Cart';

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/react-modern-devices' element={<Home />} />
                <Route path='/react-modern-devices/cart' element={<Cart />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
        </>
    );
}
