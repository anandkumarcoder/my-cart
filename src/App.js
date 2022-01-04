import "./App.css";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList.js";
import React, { useState } from "react";
import Footer from "./components/Footer.js"
import AddItem from "./components/Additem.js"

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

  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((products)=>{
      products.quantity = 0;
    })
    setProductList(newProductList)
    setTotalAmount(0)
  }

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductList[index].quantity * newProductList[index].price
    newProductList.splice(index, 1)
    console.log(newProductList)
    setProductList(newProductList)
    setTotalAmount(newTotalAmount)
  }
  const addItem = (name,price) =>{
    let newProductList = [...productList];
    newProductList.push({
      price:price,
      name:name,
      quantity:0
    })
    setProductList(newProductList)
  }
  return (
    <>
      <NavBar />
      <main className="container mt-5">
        <AddItem addItem={addItem} />
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
        <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
      </main>
    </>
  );
}

export default App;
