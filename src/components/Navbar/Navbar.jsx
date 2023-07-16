import { useContext } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import "./Navbar.css";

//Context
import { ItemsContext } from "../../context/ItemsContext";

const Navbar = () => {
  const { items, darkMode, changeTheme } = useContext(ItemsContext);

  const classBody = document.body;
  {
    darkMode
      ? (classBody.classList = "-dark")
      : (classBody.classList = "-light");
  }

  //Cantidad de productos (extraidas del contexto)
  const cantidadTotal = items.reduce((total, item) => total + item.quantity, 0);
  return (
    <header className={darkMode ? "header-dark" : "header-light"}>
      <h1 className={darkMode ? "logo-dark" : "logo-light"}>Julishop</h1>
      <ul>
        <li>
          <Link
            to="/"
            className={darkMode ? "link-navbar-dark" : "link-navbar-light"}
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/filter-page/remera"
            className={darkMode ? "link-navbar-dark" : "link-navbar-light"}
          >
            Remeras
          </Link>
        </li>
        <li>
          <Link
            to="/filter-page/pantalon"
            className={darkMode ? "link-navbar-dark" : "link-navbar-light"}
          >
            Pantalon
          </Link>
        </li>
        <li>
          <Link
            to="/filter-page/buzo"
            className={darkMode ? "link-navbar-dark" : "link-navbar-light"}
          >
            Buzo
          </Link>
        </li>
        <Link to="/shop">
          <button
            className={
              darkMode ? "cart-conteiner-dark" : "cart-conteiner-light"
            }
          >
            <ShoppingCartIcon /> {cantidadTotal}
          </button>
        </Link>
        <button
          className={darkMode ? "darkMode-icon-dark" : "darkMode-icon-light"}
          onClick={() => {
            changeTheme();
          }}
        >
          {darkMode ? <Brightness4Icon /> : <DarkModeIcon />}
        </button>
      </ul>
    </header>
  );
};

export default Navbar;
