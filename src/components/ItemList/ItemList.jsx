import { useEffect, useState } from "react";
import "./ItemList.css";

//Tarjeta de productos
import ItemCard from "../ItemCard/ItemCard";

//Firebase
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const ItemList = () => {
  //Estado para la lista de los productos provenientes del "firebase"
  const [productos, setProductos] = useState([]);

  //Llamada a todos los productos desde la base de datos de "firebase"
  useEffect(() => {
    const getProducto = async () => {
      const q = query(collection(db, "productos")); //Coleccion "productos" de firebase
      const docs = [];
      const querySnapshot = await getDocs(q); //Para obtener de forma asincrona el documento con la coleccion "productos"

      querySnapshot.forEach((doc) => {
        //Para cada objeto de la coleccion, los agrega a un array
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductos(docs); //Actualiza el estado "productos" con los objetos obtenidos
    };
    getProducto(); //Ejecuta la funcion para obtener los datos
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Inicio</h1>
      <div className="itemList-conteiner">
        {productos.map((prod) => {
          return (
            <div key={prod.id}>
              <ItemCard data={prod} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
