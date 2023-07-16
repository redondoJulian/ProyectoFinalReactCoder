import React, { useContext } from "react";
import "./CartCard.css";
import DeleteIcon from "@mui/icons-material/Delete";

//Context
import { ItemsContext } from "../../context/ItemsContext";

const CartCard = ({ data }) => {
  const { items, deleteToCart, darkMode, changeTheme } =
    useContext(ItemsContext);

  //Funcion para eliminar un producto del carrito
  const deleteProduct = () => {
    deleteToCart(data);
  };
  return (
    <div className={darkMode ? "shop-list-dark" : "shop-list-light"}>
      <img className="shop-img" src={data.img} alt="" />
      <div className={darkMode ? "shop-box-dark" : "shop-box-light"}>
        <p className="shop-box-p">Nombre</p>
        <p
          className={
            darkMode ? "shop-box-amount-dark" : "shop-box-amount-light"
          }
        >
          {data.name}
        </p>
      </div>
      <div className={darkMode ? "shop-box-dark" : "shop-box-light"}>
        <p className="shop-box-p">Precio</p>
        <p
          className={
            darkMode ? "shop-box-amount-dark" : "shop-box-amount-light"
          }
        >
          ${data.price}
        </p>
      </div>
      <div className={darkMode ? "shop-box-dark" : "shop-box-light"}>
        <p className="shop-box-p">Cantidad</p>
        <p
          className={
            darkMode ? "shop-box-amount-dark" : "shop-box-amount-light"
          }
        >
          {data.quantity}
        </p>
      </div>
      <div className={darkMode ? "shop-box-dark" : "shop-box-light"}>
        <p className="shop-box-p">Total</p>
        <p
          className={
            darkMode ? "shop-box-amount-dark" : "shop-box-amount-light"
          }
        >
          ${data.price * data.quantity}
        </p>
      </div>
      <button
        className={
          darkMode ? "shop-button-delete-dark" : "shop-button-delete-light"
        }
        onClick={deleteProduct}
      >
        <DeleteIcon fontSize="large" />
      </button>
    </div>
  );
};

export default CartCard;
