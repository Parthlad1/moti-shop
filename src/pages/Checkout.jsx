import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import styles from "./Checkout.module.css";

export default function Checkout() {
  const { cartItems, total } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: "",
    notes: ""
  });

  function update(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function buildMessage() {
    const items = cartItems
      .map(it => `- ${it.name} (Qty: ${it.qty}) • ₹${it.price * it.qty}`)
      .join("\n");

    return `New Handmade Moti Product Order

Customer Details:
Name: ${form.name}
Phone: ${form.phone}
Address: ${form.address}
Pincode: ${form.pincode}

Order Items:
${items}

Total Amount: ₹${total}

Customization Notes: ${form.notes || "N/A"}

Please confirm my order.`;
  }

  function sendWhatsApp(e) {
    e.preventDefault();

    if (!form.name || !form.phone || !form.address || !form.pincode) {
      alert("Please fill all required fields.");
      return;
    }

    const msg = encodeURIComponent(buildMessage());
    const wa = "919373219062";
    window.open(`https://wa.me/${wa}?text=${msg}`, "_blank");

    navigate("/");
  }

  return (
    <div className={`container ${styles.wrapper}`}>
      <h2 className={styles.title}>Checkout</h2>

      {cartItems.length === 0 ? (
        <div className={styles.card}>Your cart is empty. Add items first.</div>
      ) : (
        <div className={styles.card}>
          <div className={styles.columns}>

            {/* LEFT — FORM */}
            <form onSubmit={sendWhatsApp} style={{ display: "grid", gap: 24 }}>
              <h3 className={styles.subtitle}>Shipping Details</h3>

              <div className={styles.inputGroup}>
                <input
                  className={styles.input}
                  name="name"
                  placeholder=" "
                  value={form.name}
                  onChange={update}
                  required
                />
                <label className={styles.label}>Full Name</label>
              </div>

              <div className={styles.inputGroup}>
                <input
                  className={styles.input}
                  name="phone"
                  placeholder=" "
                  value={form.phone}
                  onChange={update}
                  required
                />
                <label className={styles.label}>Phone Number</label>
              </div>

              <div className={styles.inputGroup}>
                <input
                  className={styles.input}
                  name="address"
                  placeholder=" "
                  value={form.address}
                  onChange={update}
                  required
                />
                <label className={styles.label}>Full Delivery Address</label>
              </div>

              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <input
                    className={styles.input}
                    name="pincode"
                    placeholder=" "
                    value={form.pincode}
                    onChange={update}
                    required
                  />
                  <label className={styles.label}>Pincode</label>
                </div>

                <div className={styles.inputGroup}>
                  <input
                    className={styles.input}
                    name="notes"
                    placeholder=" "
                    value={form.notes}
                    onChange={update}
                  />
                  <label className={styles.label}>Customization Notes</label>
                </div>
              </div>

              <div className={styles.btnRow}>
                <button className={styles.btnPrimary} type="submit">
                  Send Order on WhatsApp
                </button>
                <button
                  type="button"
                  className={styles.btnGhost}
                  onClick={() => navigate("/cart")}
                >
                  Back to Cart
                </button>
              </div>
            </form>

            {/* RIGHT — ORDER SUMMARY */}
            <div>
              <h3 className={styles.subtitle}>Order Summary</h3>

              <div className={styles.itemList}>
                {cartItems.map(it => (
                  <div key={it.id} className={styles.itemRow}>
                    <span>{it.name} × {it.qty}</span>
                    <span>₹{it.qty * it.price}</span>
                  </div>
                ))}
              </div>

              <div className={styles.totalCard}>
                <div className={styles.totalLabel}>Total Amount</div>
                <div className={styles.totalValue}>₹{total}</div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
