
import Navbar from "./components/functionComponents/Navbar";

import Footer from "./components/functionComponents/Footer";
import {CartContextProvider} from "./Contexts/CartContext";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import NotFound from "./Pages/NotFound";
import Description from "./Pages/Description";
import ProductsContextProvider from "./Contexts/ProductsContext";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import  CartItemsProvider  from "./Contexts/CartItemsContext";

const App = () => {
  return (
    <>
    <CartItemsProvider>
      <CartContextProvider>
        <ProductsContextProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="store" element={<Store />}/>
          <Route path="store/:id/:quantity" element={<Description />}/>
          <Route path="login" element={<Login />}/>
          <Route path="Cart" element={<Cart />}/>
          <Route path="*" element={<NotFound />}/>

        </Routes>
      
        <Footer />
        </ProductsContextProvider>
        
      </CartContextProvider>

    </CartItemsProvider>
      
    </>
  );
};
export default App;

