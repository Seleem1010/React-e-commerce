//#########################################################
//#########################################################
//#########################################################
//##################### using function ######################
//#########################################################

import Navbar from "./components/functionComponents/Navbar";

import Footer from "./components/functionComponents/Footer";
import Aboutimg from "./components/functionComponents/Aboutimg";
import Newfooter from "./components/functionComponents/Newfooter";

import Imgsection from "./components/functionComponents/ImgSection";
// import { useState } from "react";
import CartContextProvider from "./Contexts/CartContext";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import NotFound from "./Pages/NotFound";
import Description from "./Pages/Description";
import ProductsContextProvider from "./Contexts/ProductsContext";
import Login from "./Pages/Login";
import "./app.css";
import ImgSection from "./components/functionComponents/ImgSection";
const App = () => {
  return (
    <div
      style={{
        height: "inherit",
      }}
    >
      <CartContextProvider>
        <ProductsContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="store" element={<Store />} />
            <Route path="store/:id/:quantity" element={<Description />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ImgSection/>
          <Aboutimg/>
          <Newfooter/>
        </ProductsContextProvider>
      </CartContextProvider>
    </div>
  );
};
export default App;
