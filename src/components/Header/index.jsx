import logoHome from "../../imagens/nukenzie-logo-home.png";
import "./style.css";

const Header = ({ setIsLoggedIn }) => {
  return (
    <header>
      <section className="header-position">
        <div>
          <img className="header-position__logo" src={logoHome} alt="" />
        </div>
        <div>
          <button
            className="header-position__button"
            onClick={() => setIsLoggedIn(true)}
          >
            Início
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
