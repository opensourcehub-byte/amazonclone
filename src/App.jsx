import React, { useState } from "react";
import Header from "./components/Header.jsx";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart";
import "./App.css";

const productsData = [
  { id: 1, name: "Amazon Echo Dot", price: 49.99, image: "https://m.media-amazon.com/images/I/81lGxS2ZisL._SY450_.jpg" },
  { id: 2, name: "Fire TV Stick", price: 39.99, image: "https://m.media-amazon.com/images/I/41X3b+uMQGL._SY450_.jpg" },
  { id: 3, name: "Kindle Paperwhite", price: 129.99, image: "https://m.media-amazon.com/images/I/61nmCTbSCoL._SX679_.jpg" },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <Header cartCount={cart.length} />
      <main>
        <ProductList products={productsData} addToCart={addToCart} />
        <Cart cart={cart} />
      </main>
    </div>
  );
}

export default App;