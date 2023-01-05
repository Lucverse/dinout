import React from 'react'

let initData = {};

const ProductReducer = (state =initData , action) => {
  
     if(action.type ==="DATA"){
        state = {
        setState : action.data.setState,
        data : action.data.d
      }
     }

    return state;
}

export default ProductReducer