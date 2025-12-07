import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import styles from "./Checkout.module.css";

export default function Checkout() {
  const { cartItems, total } = useCart();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
  phone: "",
  pincode: ""
});


  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: "",
    notes: ""
  });

  // Format phone number: 10 digits → 5-5 format
function formatPhone(value) {
  let v = value.replace(/\D/g, ""); // remove non-digits

  if (v.length > 10) v = v.slice(0, 10); // limit to 10 digits

  if (v.length > 5) {
    return v.slice(0, 5) + " " + v.slice(5);
  }
  return v;
}

// Validate + limit pincode to 6 digits
function formatPincode(value) {
  let v = value.replace(/\D/g, ""); // only numbers
  return v.slice(0, 6); // restrict strictly to 6 digits
}


  function update(e) {
  const { name, value } = e.target;

  let v = value;

  // auto-clean phone number
  if (name === "phone") {
    v = v.replace(/\D/g, ""); // digits only
    if (v.length > 10) v = v.slice(0, 10);
  }

  // auto-clean pincode
  if (name === "pincode") {
    v = v.replace(/\D/g, ""); // digits only
    if (v.length > 6) v = v.slice(0, 6);
  }

  setForm(prev => ({ ...prev, [name]: v }));

  // Clear error when typing
  setErrors(prev => ({ ...prev, [name]: "" }));
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

  const newErrors = {};

  // phone validation
  if (form.phone.length !== 10) {
    newErrors.phone = "Phone number must be 10 digits.";
  }

  // pincode validation
  if (form.pincode.length !== 6) {
    newErrors.pincode = "Pincode must be 6 digits.";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) return;

  // Continue if valid
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
                  className={`${styles.input} ${
      errors.phone ? styles.inputError + " " + styles.shake : ""
    }`}
                  name="phone"
                  placeholder=" "
                  value={form.phone}
                  onChange={update}
                  required
                />
                <label className={styles.label}>Phone Number</label>
                {errors.phone && <div className={styles.errorText}>{errors.phone}</div>}
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
                    className={`${styles.input} ${
      errors.pincode ? styles.inputError + " " + styles.shake : ""
    }`}
                    name="pincode"
                    placeholder=" "
                    value={form.pincode}
                    onChange={update}
                    required
                  />
                  <label className={styles.label}>Pincode</label>
                  {errors.pincode && <div className={styles.errorText}>{errors.pincode}</div>}
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
