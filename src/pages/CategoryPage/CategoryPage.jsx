import React from "react";
import { ItemsContext } from "../../context/ItemsContext";

const CategoryPage = () => {
  const { darkMode } = useContext(ItemsContext);
  return (
    <div>
      <h1
        style={
          darkMode
            ? { textAlign: "center", marginTop: "20px", color: "white" }
            : { textAlign: "center", marginTop: "20px", color: "#383838" }
        }
      >
        Categorias
      </h1>
    </div>
  );
};

export default CategoryPage;
