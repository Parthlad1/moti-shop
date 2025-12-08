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
      
      {/* CLICKABLE LINK AREA */}
      <Link to={`/product/${product.id}`} className={styles.clickArea}>
        <img src={product.images[0]} alt={product.name} />
        <h3>{product.name}</h3>

        <div className={styles.priceBox}>
          <div className={styles.price}>₹{product.price}</div>
          <div className={styles.category}>
            {product.category}
          </div>
        </div>
      </Link>

      {/* ACTION BUTTONS — not clickable area */}
      <div className={styles.actions}>
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
  );
}
