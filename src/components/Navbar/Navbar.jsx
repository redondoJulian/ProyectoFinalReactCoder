import { useContext } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navbar.css";

//Context
import { ItemsContext } from "../../context/ItemsContext";

const Navbar = () => {
  const { items } = useContext(ItemsContext);
  //Cantidad de productos (extraidas del contexto)
  const cantidadTotal = items.reduce((total, item) => total + item.quantity, 0);
  return (
    <header>
      <h1>Julishop</h1>
      <ul>
        <li>
          <Link to="/" className="link-navbar">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/filter-page/remera" className="link-navbar">
            Remeras
          </Link>
        </li>
        <li>
          <Link to="/filter-page/pantalon" className="link-navbar">
            Pantalon
          </Link>
        </li>
        <li>
          <Link to="/filter-page/buzo" className="link-navbar">
            Buzo
          </Link>
        </li>
        <Link to="/shop" className="link-navbar">
          <button className="cart-conteiner">
            <ShoppingCartIcon /> {cantidadTotal}
          </button>
        </Link>
      </ul>
    </header>
  );
};

export default Navbar;
