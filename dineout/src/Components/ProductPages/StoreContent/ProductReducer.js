import React from 'react'

let initData = [];

const ProductReducer = (state =initData , action) => {
  
     if(action.type ==="DATA"){
        state = action.data
     }

    return state;
}

export default ProductReducer