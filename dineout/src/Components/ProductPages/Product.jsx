import React from 'react'
import ProductBox from './Products/ProductBox'
import Sidenav from './Sidenav/Sidenav';
import "./product.css"

const Product = () => {
  return (
    <div className='a-container'>
        <Sidenav/>
        <ProductBox/>
    </div>
  )
}

export default Product;