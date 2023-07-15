import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./ItemCard.css";

//Context
import { ItemsContext } from "../../context/ItemsContext";

const ItemCard = ({ data }) => {
  const { items, addToCart, showAlert } = useContext(ItemsContext);
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
    <div className="card-conteiner">
      <h3>{data.name}</h3>

      <Link to={`/detail-page/${data.id}`}>
        <img className="imagen" src={data.img} alt={data.id} />
      </Link>

      <p className="card-cantidad-p">Cantidad</p>
      <div className="card-comprar">
        <p className="card-precio">${data.price}</p>
        <div className="card-cantidad">
          <button onClick={lessQuantity}>-</button>
          <p>{quantity}</p>
          <button onClick={addQuantity}>+</button>
        </div>
        <button onClick={addProduct}>Agregar</button>
      </div>
    </div>
  );
};

export default ItemCard;
