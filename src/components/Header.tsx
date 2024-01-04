import Logo from "./../assets/images/logo.svg";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Logo Fylo" className="header__img" />
      <nav className="navbar">
        <a href="#features" className="navbar__link">
          Features
        </a>
        <a href="#team" className="navbar__link">
          Team
        </a>
        <a href="#signin" className="navbar__link">
          Sign In
        </a>
      </nav>
    </header>
  );
};

export default Header;
