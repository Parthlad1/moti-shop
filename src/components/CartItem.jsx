import React from "react";
import { useCart } from "../context/CartContext";
import styles from "./CartItem.module.css";
import { Trash2 } from "lucide-react";

export default function CartItem({ item }) {
  const { updateQty, removeFromCart } = useCart();

  return (
    <div className={styles.item}>
      <img src={item.images[0]} alt={item.name} className={styles.image} />

      <div className={styles.info}>
        {/* TITLE + PRICE */}
        <div className={styles.topRow}>
          <div>
            <div className={styles.name}>{item.name}</div>
            <div className={styles.meta}>₹{item.price} • {item.category}</div>
          </div>

          <div className={styles.totalPrice}>₹{item.price * item.qty}</div>
        </div>

        {/* QTY CONTROLS */}
        <div className={styles.qtyRow}>
          <button
            className={styles.qtyBtn}
            onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}
          >
            -
          </button>

          <input
            type="number"
            min="1"
            value={item.qty}
            onChange={(e) =>
              updateQty(item.id, Math.max(1, Number(e.target.value) || 1))
            }
            className={styles.qtyInput}
          />

          <button
            className={styles.qtyBtn}
            onClick={() => updateQty(item.id, item.qty + 1)}
          >
            +
          </button>

          <button
            className={`btn ghost ${styles.removeBtn}`}
            onClick={() => removeFromCart(item.id)}
            title="Remove item"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
