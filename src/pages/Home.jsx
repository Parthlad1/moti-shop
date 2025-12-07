import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import productsData from "../data/products.json";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home({ showToast }) {   // ⬅ accept toast

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(productsData.slice(0, 4)); // Best sellers
  }, []);

  const heroImage =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="720" height="480">
        <rect rx="20" width="100%" height="100%" fill="#FFF7F9"/>
        <g transform="translate(40,40)">
          <circle cx="120" cy="120" r="100" fill="#F7DDE2" />
          <circle cx="200" cy="80" r="56" fill="#FAFAF7" stroke="#D8C4A3" stroke-width="4"/>
          <rect x="280" y="30" width="220" height="300" rx="18" fill="#FFF"/>
        </g>
      </svg>`
    );

  return (
    <div>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Handmade Moti Creations Crafted With Love</h1>
          <p>
            Premium pearl jewelry — bracelets, necklaces, earrings & custom
            designs. Order via WhatsApp for a personal touch.
          </p>

          <div className={styles.heroButtons}>
            <Link to="/products">
              <button className={styles.heroBtn}>Shop Now</button>
            </Link>

            <a
              href="https://wa.me/919373219062"
              target="_blank"
              rel="noreferrer"
              className={styles.heroBtnGhost}
            >
              WhatsApp for Custom Orders
            </a>
          </div>
        </div>

        <img src="/Home.jpg" alt="hero" className={styles.heroImg} />
      </section>

      {/* BEST SELLERS */}
      <h2 className={styles.sectionTitle}>Best Sellers</h2>
      <section className={styles.grid} aria-live="polite">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} showToast={showToast} /> 
        ))}
      </section>

      {/* WHY CHOOSE US */}
      <h2 className={styles.sectionTitle}>Why Choose Us</h2>
      <div className={styles.whyGrid}>
        <div className={styles.whyCard}>
          <div className={styles.whyTag}>Handmade</div>
          <h3>Carefully Crafted</h3>
          <p>Each piece is handcrafted with precision and care.</p>
        </div>

        <div className={styles.whyCard}>
          <div className={styles.whyTag}>Premium Moti</div>
          <h3>High Quality Materials</h3>
          <p>Long-lasting pearls and durable threads that shine.</p>
        </div>

        <div className={styles.whyCard}>
          <div className={styles.whyTag}>Custom Orders</div>
          <h3>Personalized Designs</h3>
          <p>Your ideas crafted into beautiful handmade accessories.</p>
        </div>
      </div>
    </div>
  );
}
