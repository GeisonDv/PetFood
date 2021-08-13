import Logo from "../../assets/logo.png";
import LogoWhite from "../../assets/logo-white.png";
import "./styles.css";

import { Link } from "react-router-dom";

const Header = ({ whiteVersion, hideCart }) => {
  const openDrawer = () => {
    const event = new CustomEvent("openCart");
    window.dispatchEvent(event);
  };

  return (
    <div className="col-12 px-4 text-center">
      <header className="py-4">
        <Link to="/">
          <img src={whiteVersion ? LogoWhite : Logo} className="img-fluid" />
        </Link>
      </header>
      {!hideCart && (
        <button
          onClick={() => openDrawer()}
          className="btn btn-secondary cart-button"
        >
          <span className="mdi mdi-cart"> 2 Itens</span>
        </button>
      )}
    </div>
  );
};

export default Header;
