import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ProductList from "./components/ProductList.js"

function App() {

  const productList = [
    {
      price:99999,
      name:"IPhone 10S Max",
      quantity:0
    },
    {
      price:12000,
      name:"Redmi 10S Max",
      quantity:0,
    },
  ]
  return (
    <>
    <NavBar />
    <main className='container mt-5'>
    <ProductList productList={productList} />
    </main>
    </>
  );
}

export default App;
