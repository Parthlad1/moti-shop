import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product, showToast }) {
  const { addToCart } = useCart();

const handleAdd = () => {
  addToCart(product);
  if (showToast) showToast(`${product.name} added to cart!`);
};


  return (
    <div className={styles.card}>
      {/* CLICKABLE IMAGE */}
      <Link to={`/product/${product.id}`}>
        <img src={product.images[0]} alt={product.name} />
      </Link>
      <h3>{product.name}</h3>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div className={styles.price}>₹{product.price}</div>
          <div className="small" style={{ textTransform: "capitalize" }}>
            {product.category}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <button className="btn" onClick={handleAdd}>
            Add to Cart
          </button>

          <Link to={`/product/${product.id}`}>
            <button className="btn ghost" style={{ width: "100%" }}>
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
