import React, { useContext } from "react";
import "./CartCard.css";
import DeleteIcon from "@mui/icons-material/Delete";

//Context
import { ItemsContext } from "../../context/ItemsContext";

const CartCard = ({ data }) => {
  const { items, deleteToCart } = useContext(ItemsContext);

  //Funcion para eliminar un producto del carrito
  const deleteProduct = () => {
    deleteToCart(data);
  };
  return (
    <div className="shop-list">
      <img className="shop-img" src={data.img} alt="" />
      <div className="shop-box">
        <p className="shop-box-p">Nombre</p>
        <p className="shop-box-amount">{data.name}</p>
      </div>
      <div className="shop-box">
        <p className="shop-box-p">Precio</p>
        <p className="shop-box-amount">${data.price}</p>
      </div>
      <div className="shop-box">
        <p className="shop-box-p">Cantidad</p>
        <p className="shop-box-amount">{data.quantity}</p>
      </div>
      <div className="shop-box">
        <p className="shop-box-p">Total</p>
        <p className="shop-box-amount">${data.price * data.quantity}</p>
      </div>
      <button className="shop-button-delete" onClick={deleteProduct}>
        <DeleteIcon fontSize="large" />
      </button>
    </div>
  );
};

export default CartCard;
