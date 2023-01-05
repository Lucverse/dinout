import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../../Store";

const ProductDetails = ({ productDetails }) => {
  let index = useParams();
  let data = useSelector((store) => {
    return store.data;
  });
  console.log("data:", data[index.e]);
  return (
    <div>
      <h1>PRODUCT DETAILS PAGE</h1>
    </div>
  );
};

export default ProductDetails;
