import imageLogin from "../../imagens/illustration.png";
import imageLogo from "../../imagens/nu-henzie-logo.png";
import text1 from "../../imagens/texto-1.png";
import text2 from "../../imagens/texto-2.png";
import "./style.css";

const PageLogin = ({ setIsLoggedIn }) => {
  return (
    <section className="style-login">
      <div className="style-login__acess">
        <img src={imageLogo} alt="" />
        <img src={text1} alt="" />
        <img src={text2} alt="" />
        <button className="button-login" onClick={() => setIsLoggedIn(false)}>
          Iniciar
        </button>
      </div>

      <div>
        <img src={imageLogin} alt="" />
      </div>
    </section>
  );
};

export default PageLogin;
