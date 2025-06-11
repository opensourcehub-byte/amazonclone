import React from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

function ProductList({ products, addToCart }) {
  return (
    <section className="product-list">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;