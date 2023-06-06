import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import NotFound from "./Pages/NotFound";
import CarDescription from "./Pages/CarDescription";
import Login from "./Pages/Login";
import CarFooter from "./components/functionComponents/CarFooter";
import CarNavbar from "./components/functionComponents/CarNavbar";
import { useDispatch } from "react-redux";
import { getAllProducts } from "./Redux/slices/ProductSlice";
import { useEffect } from "react";
import Cart from "./Pages/Cart";
import "./app.css";
import Aboutimg from "./components/functionComponents/Aboutimg";






const App = () => {
  const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getAllProducts())
      });
  return (
    <>

      <CarNavbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="cars" element={<Store />}/>
        <Route path="cars/:id/:quantity" element={<CarDescription />}/>
        <Route path="about" element={<Login />}/>
        <Route path="Cart" element={<Cart />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Aboutimg/>
      <CarFooter />
      
      
    </>
  );
};
export default App;

