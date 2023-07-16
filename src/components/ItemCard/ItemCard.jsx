import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./ItemCard.css";

//Context
import { ItemsContext } from "../../context/ItemsContext";

const ItemCard = ({ data }) => {
  const { items, addToCart, showAlert, darkMode } = useContext(ItemsContext);
  //Cantidad por defecto (1)
  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => {
    //Agrega una cantidad
    quantity < 7 && setQuantity(quantity + 1);
  };
  const lessQuantity = () => {
    //Saca una cantidad
    quantity > 1 && setQuantity(quantity - 1);
  };

  const addProduct = () => {
    //Agrega un producto al carrito
    addToCart(data, quantity); //Agrega el producto utilizando el addToCart() del context
    showAlert(data); //Muestra la alerta con la informacion de la Card
  };

  return (
    <div className={darkMode ? "card-conteiner-dark" : "card-conteiner-light"}>
      <h3 style={darkMode ? { color: "white" } : { color: "black" }}>
        {data.name}
      </h3>

      <Link to={`/detail-page/${data.id}`}>
        <img className="imagen" src={data.img} alt={data.id} />
      </Link>

      <p
        className="card-cantidad-p"
        style={darkMode ? { color: "white" } : { color: "black" }}
      >
        Cantidad
      </p>
      <div className="card-comprar">
        <p
          className="card-precio"
          style={
            darkMode
              ? { backgroundColor: "#dbdbdb", color: "black" }
              : { backgroundColor: "#a3a488", color: "white" }
          }
        >
          ${data.price}
        </p>
        <div className="card-cantidad">
          <button
            className={
              darkMode ? "button-quantity-dark" : "button-quantity-light"
            }
            onClick={lessQuantity}
          >
            -
          </button>
          <p style={darkMode ? { color: "white" } : { color: "black" }}>
            {quantity}
          </p>
          <button
            className={
              darkMode ? "button-quantity-dark" : "button-quantity-light"
            }
            onClick={addQuantity}
          >
            +
          </button>
        </div>

        <button //Boton COMPRAR
          className={darkMode ? "button-buy-dark" : "button-buy-light"}
          onClick={addProduct}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
