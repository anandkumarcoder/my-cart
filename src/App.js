import "./App.css";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList.js";
import React, { useState } from "react";
import Footer from "./components/Footer.js"

function App() {
  const products = [
    {
      price: 99999,
      name: "IPhone 10S Max",
      quantity: 0,
    },
    {
      price: 12000,
      name: "Redmi 10S Max",
      quantity: 0,
    },
  ];
  let [productList, setProductList] = useState(products);
  let[totalAmount , setTotalAmount] = useState(0);
  // this is hook created

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount += newProductList[index].price
    newProductList[index].quantity++;
    setTotalAmount(newTotalAmount)
    setProductList(newProductList);
  }

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if(newProductList[index].quantity > 0)
    {
      newProductList[index].quantity-- ;
      newTotalAmount -= newProductList[index].price

    }

    
    setTotalAmount(newTotalAmount)
    setProductList(newProductList);
  }
  return (
    <>
      <NavBar />
      <main className="container mt-5">
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}
        />
        <Footer totalAmount={totalAmount} />
      </main>
    </>
  );
}

export default App;
