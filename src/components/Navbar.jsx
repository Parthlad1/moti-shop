import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const count = cartItems.reduce((s, it) => s + it.qty, 0);

  const [open, setOpen] = useState(false);

  // Lock scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* Header */}
      <header className={styles.header}>
        {/* Logo */}
        <div className={styles.logo}>
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden width="46" height="46">
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0" stopColor="#fff" />
                <stop offset="1" stopColor="#f7f3ec" />
              </linearGradient>
            </defs>
            <circle cx="32" cy="28" r="18" fill="url(#g)" stroke="#D8C4A3" strokeWidth="2" />
            <path d="M20 44c4-4 12-6 24 0" fill="none" stroke="#BFA760" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <div>
            <div className={styles.brand}>MotiCraft Studio</div>
            <div className={styles.logoSub}>Handmade Moti Creations</div>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/products" className={styles.navLink}>Products</Link>
          <button className={styles.cartBtn} onClick={() => navigate("/cart")}>
            View Cart {count > 0 ? `(${count})` : ""}
          </button>
        </nav>
      </header>

      {/* Hamburger fixed outside header */}
      <button
        className={`${styles.hamburger} ${open ? styles.open : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <svg width="22" height="22" viewBox="0 0 24 24">
          <path className={`${styles.line} ${styles.line1}`} d="M3 6h18" stroke="#222" strokeWidth="1.6" strokeLinecap="round" />
          <path className={`${styles.line} ${styles.line2}`} d="M3 12h18" stroke="#222" strokeWidth="1.6" strokeLinecap="round" />
          <path className={`${styles.line} ${styles.line3}`} d="M3 18h18" stroke="#222" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>

      {/* Mobile Cart Button */}
<button
  className={styles.mobileCart}
  onClick={() => navigate("/cart")}
  aria-label="Cart"
>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M6 6h14l-1.5 9h-11L6 6z" stroke="#222" strokeWidth="1.6"/>
    <circle cx="9" cy="20" r="1.6" fill="#222"/>
    <circle cx="17" cy="20" r="1.6" fill="#222"/>
  </svg>

  {/* Badge */}
  {count > 0 && <span className={styles.badge}>{count}</span>}
</button>


      {/* Backdrop overlay */}
      <div
        className={`${styles.mobileBackdrop} ${open ? styles.show : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile drawer */}
      <div id="mobile-menu" className={`${styles.mobileMenu} ${open ? styles.open : ""}`}>
        <div className={styles.mobileMenuInner}>
          <Link to="/" className={styles.mobileLink} onClick={() => setOpen(false)}>Home</Link>
          <Link to="/products" className={styles.mobileLink} onClick={() => setOpen(false)}>Products</Link>
          <button
            className={styles.cartBtn}
            onClick={() => {
              setOpen(false);
              navigate("/cart");
            }}
          >
            View Cart {count > 0 ? `(${count})` : ""}
          </button>
        </div>
      </div>
    </>
  );
}
