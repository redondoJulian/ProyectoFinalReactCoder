import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailPage.css";

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
import DetailCard from "./DetailCard";

const DetailPage = () => {
  const { id } = useParams(); //guarda el id del url
  const [producto, setProducto] = useState([]);

  console.log(producto);

  useEffect(() => {
    const getProductos = async () => {
      const q = query(
        collection(db, "productos"),
        where(documentId(), "==", id) //documentId() = ID del documento de firebase sea igual al {ID} del url
      );
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProducto(docs);
    };
    getProductos(); //ejecuto la funcion
  }, [id]);

  return (
    <div className="conteiner-details">
      <div key={producto.id}>
        {producto.map((prod) => {
          return (
            <div key={prod.id}>
              <DetailCard data={prod} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailPage;
