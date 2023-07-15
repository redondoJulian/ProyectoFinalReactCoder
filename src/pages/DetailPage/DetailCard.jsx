import { useState, useContext } from "react";
import "./DetailCard.css";

//Assets
import img from "../../assets/img/metodos-de-pago.png";

//Context
import { ItemsContext } from "../../context/ItemsContext";

const DetailCard = ({ data }) => {
  const { items, addToCart, showAlert } = useContext(ItemsContext);

  //Cantidad por defecto (1)
  const [quantity, setQuantity] = useState(1);

  //Agrega una cantidad
  const addQuantity = () => {
    quantity < 7 && setQuantity(quantity + 1);
  };

  //Saca una cantidad
  const lessQuantity = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  //Agrega un producto al carrito
  const addProduct = () => {
    addToCart(data, quantity); //Agrega el producto utilizando el addToCart() del context
    showAlert(data); //Muestra la alerta con la informacion de la Card
  };

  return (
    <div className="card-conteiner-detail">
      <div className="main-conteiner-detail">
        <h3>{data.name}</h3>
        <img className="imagen" src={data.img} alt={data.id} />
        <h4>{data.desc}</h4>
      </div>
      <div className="secondary-conteiner-detail">
        <img className="conteiner-methods" src={img} alt="" />
        <div className="card-comprar-detail">
          <p className="card-precio-detail">${data.price}</p>
          <div className="card-cantidad-detail">
            <button onClick={lessQuantity}>-</button> <p>{quantity}</p>
            <button onClick={addQuantity}>+</button>
          </div>
          <button onClick={addProduct}>Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
