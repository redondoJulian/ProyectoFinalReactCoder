import { useContext, useState } from "react";
import "./App.css";

//Firebase
import { ItemProvider } from "./context/ItemsContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import HomePage from "./pages/HomePage/HomePage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import FilterPage from "./pages/FilterPage/FilterPage";

//Componentes
import Navbar from "./components/Navbar/Navbar";

//Context
import { ItemsContext } from "./context/ItemsContext";

const App = () => {
  return (
    <div>
      <ItemProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ProyectoFinalReactCoder" element={<HomePage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/detail-page/:id" element={<DetailPage />} />
            <Route path="/filter-page/:category" element={<FilterPage />} />
          </Routes>
        </Router>
      </ItemProvider>
    </div>
  );
};

export default App;
