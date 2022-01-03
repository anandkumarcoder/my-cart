import React from 'react'
import Product from "./Product.js"

const ProductList = (props) => {

    // console.log(props)
    return (
        props.productList.map((product, i)=>{
            return <Product product={product} key={i} incrementQuantity={props.incrementQuantity} index={i} decrementQuantity={props.decrementQuantity} />
            // passing map function which will iterate over each item and return new component product
          
        }
        )
    )
}

export default ProductList
