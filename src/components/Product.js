import React from "react";

export default function Product(props) {
  //console.log(props)
  return (
    <div className="row">
      <div className="col-5">
        <h2>
          {props.product.name}
          <span className="badge bg-secondary">₹{props.product.price}</span>
        </h2>
        {/* since props has product name object which has our property inside it so we use product.name */}
      </div>

      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>
          <button type="button" className="btn btn-warning">
            {props.product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-4">
        {props.product.quantity * props.product.price}
      </div>
    </div>
  );
}

// import React from 'react'

// export const Product = (props) => {
//     return (
//         <div className='row'>
//             <div className='col-6'>
//                 <h2>{props.name}</h2>

//             </div>

//         </div>
//     )
// }
