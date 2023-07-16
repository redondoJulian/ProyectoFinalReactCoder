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
            : { textAlign: "center", marginTop: "20px", color: "#d1d1d1" }
        }
      >
        Categorias
      </h1>
    </div>
  );
};

export default CategoryPage;
