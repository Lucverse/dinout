import { Routes, Route } from "react-router-dom";
import Checkout from "../Components/Checkout/Checkout";
import Home from "../Components/Home/home";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import Product from "../Components/ProductPages/Product";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products/:e" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
