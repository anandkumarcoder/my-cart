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
  // this is hook created

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity++;
    setProductList(newProductList);
  }

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity > 0? newProductList[index].quantity-- : newProductList[index].quantity=0;
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
        <Footer/>
      </main>
    </>
  );
}

export default App;
