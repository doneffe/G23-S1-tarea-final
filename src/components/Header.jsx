import '../assets/styles/Header.scss';

const Header = () => {
  return (
    <header className="header-container">
      <h3 className="header-container__h3">Anime - Nekos API</h3>
      <nav className="header-container__nav">
        <a className="header-container__a" href="/">Ir al Home</a>
      </nav>
    </header>
  );
};

export default Header;
