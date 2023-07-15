import { useState, createContext } from "react"; //IMPORTANTE

//toatsify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//crea el contexto
export const ItemsContext = createContext();
const itemsCart = [];

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState(itemsCart);

  //Para eliminar productos del carrito
  const deleteToCart = (data) => {
    const producto = items.findIndex((prod) => prod.id === data.id); //busca el producto seleccionado
    const nuevoArray = [...items]; //copia el array items
    nuevoArray.splice(producto, 1); //elimina el producto gracias al indice encontrado en findIndex
    setItems(nuevoArray); //actualiza el array original
  };
  //Para agregar productos del carrito
  const addToCart = (data, quantity) => {
    const existingItemIndex = items.findIndex((item) => item.id === data.id); //Busca si hay un producto con la id ingresada

    if (existingItemIndex !== -1) {
      //Si existe un indice (un producto en el array)
      const updatedItems = [...items]; //copia el array items
      updatedItems[existingItemIndex].quantity += quantity; //en el array copia busca el indice y le suma una cantidad
      setItems(updatedItems); //actualiza el array original
    } else {
      //Si el indice/producto no existe (-1)
      const newItem = {
        //crea un nuevo objeto con la data ingresada, y le agrega la cantidad ingresada.
        ...data,
        quantity: quantity,
      };
      setItems([...items, newItem]); //actualiza el array original y le agrega el nuevo producto
    }
  };

  //Alerta utilizando "toastify"
  const showAlert = (data) => {
    toast.success(`✅ Agregado: ${data.name}`, {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <ItemsContext.Provider
      value={{ items, addToCart, deleteToCart, setItems, showAlert }} //importa todas las funciones
    >
      <ToastContainer />
      {children}
    </ItemsContext.Provider>
  );
};
