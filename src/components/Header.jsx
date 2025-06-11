import React from "react";
import "./Header.css";

function Header({ cartCount }) {
  return (
    <header className="header">
      <h1 className="logo">Amazon Clone</h1>
      <div className="cart-info">🛒 {cartCount} items</div>
    </header>
  );
}

export default Header;
