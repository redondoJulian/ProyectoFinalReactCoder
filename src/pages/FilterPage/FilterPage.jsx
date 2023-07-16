import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

//Importa el database
import { db } from "../../firebase/firebaseConfig";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";

//Importa la tarjeta para imprimirla
import ItemCard from "../../components/ItemCard/ItemCard";

//Context
import { ItemsContext } from "../../context/ItemsContext";

const FilterPage = () => {
  const { category } = useParams(); //guarda el id del url
  const [producto, setProducto] = useState([]);
  const { items, darkMode } = useContext(ItemsContext);

  useEffect(() => {
    const getProductos = async () => {
      const q = query(
        collection(db, "productos"),
        where("category", "==", category)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      /* console.log(docs); */
      setProducto(docs);
    };
    getProductos(); //ejecuto la funcion
  }, [category]);

  return (
    <div>
      <h1
        style={
          darkMode
            ? { textAlign: "center", marginTop: "20px", color: "white" }
            : { textAlign: "center", marginTop: "20px", color: "#383838" }
        }
      >
        Filtrado por: {category.toUpperCase()}
      </h1>
      <div key={producto.id} className="itemList-conteiner">
        {producto.map((prod) => {
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

export default FilterPage;
