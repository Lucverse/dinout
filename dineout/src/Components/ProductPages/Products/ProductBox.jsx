import React, { useEffect, useState } from "react";
import "./productBox.css";
import ProductAction from "../StoreContent/ProductAction";
import { useDispatch, useSelector } from "react-redux";
// import store from '../../../Store';
import DivProduct from "./DivProduct";
import { Link } from "react-router-dom";
// import { Select } from '@chakra-ui/react';

const ProductBox = () => {
  // var data = useSelector((store)=>store)
  // console.log(data);
  let [state, setState] = useState([]);
  let [page, setPage] = useState(1);
  // console.log(state);

  const change = (id) => {
    setPage(id);
  };

  let arr = [];
  for (let i = 1; i <= 10; i++) {
    arr.push(
      <button onClick={() => change(i)} key={i}>
        {i}
      </button>
    );
  }

  let dispatch = useDispatch();

  useEffect(() => {
    fetchhh();
    //  dataUpdate();
  }, []);

  const fetchhh = async () => {
    await fetch(`https://dineoutclone-foc1.onrender.com/products`)
      .then((res) => res.json())
      .then((d) => {
        dispatch(ProductAction({ d, setState }));
        console.log(d);
        setState(d);
      });
  };

  return (
    <div className="a-productBox-container">
      <nav className="a-productBox-nav">
        <div>
          <h2>
            Best Restaurants Near Me in Delhi <span>({state.length})</span>
          </h2>
        </div>

        <div>
          <span>Sort by</span>
          <select>
            <option value="Rating">Rating</option>
            <option value="Popularity">Popularity</option>
            <option value="Low to High">Price: Low to High</option>
            <option value="High to Low">Price: High to Low</option>
          </select>
        </div>
      </nav>

      <div className="a-gridBox">
        {state.map((e, i) => (
          <Link
            to={`/products/${i}`}
            style={{ textDecoration: "none" }}
            key={i + 1}
          >
            <DivProduct e={e} />{" "}
          </Link>
        ))}
      </div>

      <div>
        {page}
        {arr}
      </div>
    </div>
  );
};

export default ProductBox;

// `/products/${i}?data=${JSON.stringify(e)}`;
