import { useContext, useState } from "react";
import "./ShopPage.css";

import CartCard from "../../components/CartCard/CartCard";
import Checkout from "../../components/Checkout/Checkout";

import { ItemsContext } from "../../context/ItemsContext";

const ShopPage = () => {
  const { items, darkMode } = useContext(ItemsContext);
  //Suma la cantidad de productos + la lantidad de un mismo producto agregado
  const cantidadTotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div>
      <h1
        style={
          darkMode
            ? { textAlign: "center", marginTop: "20px", color: "white" }
            : { textAlign: "center", marginTop: "20px", color: "#d1d1d1" }
        }
      >
        Cart
      </h1>
      <div className="shop-conteiner">
        <div className={items.length ? "no-molestar" : "vacio"}>
          {items.length ? null : <p>¡El carrito de compras está vacio!</p>}
        </div>
        {items.map((prod) => {
          return (
            <div style={{ width: "80%" }} key={prod.id}>
              <CartCard data={prod} />
            </div>
          );
        })}
      </div>
      <div className="total-conteiner">
        <div className="total-conteiner-flex">
          <h2>TOTAL</h2>
          <p>${cantidadTotal}</p>
        </div>
      </div>
      <Checkout />
    </div>
  );
};

export default ShopPage;
