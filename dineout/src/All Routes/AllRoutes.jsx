import { Routes, Route } from "react-router-dom";
import Checkout from "../Components/Checkout/Checkout";
import Home from "../Components/Home/home";
import Product from "../Components/ProductPages/Product";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
