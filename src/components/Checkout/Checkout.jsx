import { useContext, useState } from "react";
import "./Checkout.css";
import { CircularProgress } from "@mui/material";

//Assets
import img from "../../assets/img/metodos-de-pago.png";

//Toatsify
import { ToastContainer, toast } from "../../../node_modules/react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

//Context
import { ItemsContext } from "../../context/ItemsContext";

//Estados iniciales para el form
const initialState = {
  name: "",
  email: "",
  reemail: "",
  city: "",
};

const Checkout = () => {
  const { items, setItems } = useContext(ItemsContext);

  //values = input | purchaseID = ID generado por el firebase
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState(null);

  //Si está cargando... se utiliza el CircularProgress de MUI
  const [isLoading, setIsLoading] = useState(false);

  //Cuando se introduzca algo al input del form
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
    setEmailCheck(false);
    setCamposVacios(false);
  };

  //Cuando se presione el boton de "comprar"
  const onSubmit = async (e) => {
    if (
      //Verifica si algunos de los values están vacios
      values.name === "" ||
      values.city === "" ||
      values.email === "" ||
      values.reemail === ""
    ) {
      e.preventDefault();
      toast.error("❌ ¡Casillas vacias!", {
        //Lanza una alerta de error
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (values.email !== values.reemail) {
      //Si están todas llenas las casillas pero los emails no coinciden...
      e.preventDefault();
      toast.error("❌ ¡Los emails no coinciden!", {
        //Lanza una alerta de error
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      //Si todas las comprobaciones son exitosas... :)
      e.preventDefault();
      setIsLoading(true); //Permite que se vea el CircularProgress gracias al "conditional rendering"
      setValues(initialState); //Se actualiza el estado "values" con los datos ingresados en los inputs
      // Para agregar a la coleccion todo lo que compró el cliente y sus datos
      const docRef = await addDoc(collection(db, "purchasesCollection"), {
        values,
        items,
      });
      setPurchaseID(docRef.id); //Se actualiza el estado PurchaseID
      setIsLoading(false); //Se elimina el circulo de carga
      setItems([]); //Se vacia el carrito

      toast.success(`✅ Purchase ID: ${docRef.id}!`, {
        //Se lanza una alerta exitosa con el ID de la compra
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className={items.length ? "form-conteiner" : "no-mostrar"}>
        <div className="form-checkout">
          <h2>Checkout</h2>
          <p>Datos del cliente</p>
        </div>
        <form onSubmit={onSubmit}>
          <div className="form-style">
            <p>Nombre: </p>
            <input
              type="text"
              name="name"
              placeholder="Introduzca su nombre"
              value={values.name}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-style">
            <p style={{ color: "gray" }}>Email: </p>
            <input
              type="email"
              name="email"
              placeholder="Introduzca su email"
              value={values.email}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-style">
            <p style={{ color: "gray" }}>Vuelva a ingresar el Email: </p>
            <input
              type="email"
              name="reemail"
              placeholder="Vuelva a introducir su email"
              value={values.reemail}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-style">
            <p>Ciudad: </p>
            <input
              type="text"
              name="city"
              placeholder="Ciudad del cliente"
              value={values.city}
              onChange={handleOnChange}
            />
          </div>
          {isLoading ? (
            <CircularProgress
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "16px auto",
              }}
            />
          ) : null}
          <button className="form-button" onClick={onSubmit}>
            Comprar
          </button>
          <img className="img-methods" src={img} alt="Metodos de pago" />
        </form>
      </div>
    </div>
  );
};

export default Checkout;
