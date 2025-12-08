import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import styles from "./Cart.module.css";

export default function CartPage() {
  const { cartItems, total, clearCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className={styles.emptyCart}>
          Your cart is empty. <Link to="/products">Shop now</Link>.
        </div>
      ) : (
        <div className={styles.cartGrid}>
          {cartItems.map(it => <CartItem key={it.id} item={it} />)}

          <div className={styles.cartSummary}>
            <div className={styles.cartSummaryRow}>
              <div className="small">Total</div>
              <div style={{ fontWeight: 700 }}>₹{total}</div>
            </div>

            <div className={styles.cartButtons}>
              <button className={styles.btn} onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
              <button className="btn ghost" onClick={() => clearCart()}>Clear Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
