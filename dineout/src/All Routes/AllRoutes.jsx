import { Routes, Route } from "react-router-dom";
import Checkout from "../Components/Checkout/Checkout";
import Home from "../Components/Home/home";
import Navbar from "../Components/Navbar/Navbar";
import Product from "../Components/ProductPages/Product";
import Login from "../Components/LoginSignup/Login";
import { useState } from 'react';


function AllRoutes() {

  const [login,setLogin] = useState(true)


  return (
    <div>
      <Navbar setLogin={setLogin}/>
      {login && <Login setLogin={setLogin} />}
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
