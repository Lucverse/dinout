import React, { useEffect, useState } from 'react';
import "./productBox.css"
import ProductAction from '../StoreContent/ProductAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import store from '../../../Store';

const ProductBox = () => {
  const data = useSelector((store)=>store)  
  console.log(data);
  let [state,setState]= useState(data);
 
  
  

// setState(data);


//  setState(data);

  let dispatch = useDispatch();

useEffect(()=>{

 fetchhh();
//  dataUpdate();
},[])


const fetchhh = async()=>{
await fetch('http://localhost:1000/products')
.then((res)=>res.json())
.then((d)=>{
  dispatch(ProductAction(d));
})
}




  return (
    <div className='a-productBox-container'>Box</div>
  )
}

export default ProductBox;