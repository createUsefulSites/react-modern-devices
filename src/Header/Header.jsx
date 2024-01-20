import './Header.css';
import { Link } from 'react-router-dom';
import iphonesLogo from './../assets/iphones_logo.png';

export default function Header() {
    return (
        <div className='header'>
            <div className='container'>
                <Link to='/'>
                    <div className='header__logo' style={{ cursor: 'pointer' }}>
                        <img
                            width='50px'
                            src={iphonesLogo}
                            alt='Iphones logo'
                            style={{ cursor: 'pointer' }}
                        />
                        <div>
                            <h1>Техника новая и б/у</h1>
                            <p>самые свежие и актуальные модели</p>
                        </div>
                    </div>
                </Link>
                <div className='header__cart'>
                    <Link to='/cart' className='button button--cart'>
                        <span>3</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
