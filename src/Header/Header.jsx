import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__logo'>
          <img width='38' src='./img/pizza-logo.svg' alt='Pizza logo' />
          <div>
            <h1>Техника новая и б/у</h1>
            <p>самые свежие и актуальные модели</p>
          </div>
        </div>
        <div className='header__cart'>
          <a href='/cart.html' className='button button--cart'>
            <span>3</span>
          </a>
        </div>
      </div>
    </div>
  );
}
