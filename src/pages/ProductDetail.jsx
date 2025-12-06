import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/products.json";
import { useCart } from "../context/CartContext";
import styles from "./ProductDetail.module.css";

export default function ProductDetail({ showToast }) {   // ⬅ receive toast
  const { id } = useParams();
  const prod = productsData.find(p => String(p.id) === id);
  const { addToCart } = useCart();

  if (!prod) return <div>Product not found</div>;

  // Add-to-cart handler with toast
  const handleAdd = () => {
    addToCart(prod);
    if (showToast) showToast(`${prod.name} added to cart!`);
  };

  return (
    <div className={styles.container}>
      <div className={styles["image-wrapper"]}>
        <img src={prod.images[0]} alt={prod.name} />
      </div>

      <div className={styles.details}>
        <h2>{prod.name}</h2>
        <div className="price">₹{prod.price}</div>
        <p>{prod.description}</p>

        {/* Updated button */}
        <button className="btn" onClick={handleAdd}>
          Add to Cart
        </button>

        <div className={styles.info}>
          <div className="small">
            <strong>Category:</strong> {prod.category}
          </div>
          <div className="small">
            <strong>Customizable:</strong> {prod.customizable ? "Yes" : "No"}
          </div>
        </div>
      </div>
    </div>
  );
}
