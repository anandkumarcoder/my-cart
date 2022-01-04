import React from 'react'
import Product from "./Product.js"

const ProductList = (props) => {

    // console.log(props)
    return (
        props.productList.length > 0?
        props.productList.map((product, i)=>{
            return <Product product={product} key={i} incrementQuantity={props.incrementQuantity} index={i} decrementQuantity={props.decrementQuantity}  removeItem={props.removeItem}/>
            // passing map function which will iterate over each item and return new component product
          
        })
        : <h1>Please add products in the cart</h1>
    )
}

export default ProductList
