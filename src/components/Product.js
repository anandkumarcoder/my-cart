import React from "react";

export default function Product(props) {
  //console.log(props)
  return (
    <div className="row">
      <div className="col-5">
        <h2>
          {props.product.name}
          <span class="badge bg-secondary">₹{props.product.price}</span>
        </h2>
        {/* since props has prodct name object which has our property inside it so we use product.name */}
      </div>

      <div className="col-3">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" class="btn btn-danger">
            -
          </button>
          <button type="button" class="btn btn-warning">
            {props.product.quantity}
          </button>
          <button type="button" class="btn btn-success">
            +
          </button>
        </div>
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
