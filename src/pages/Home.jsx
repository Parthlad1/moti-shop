import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import productsData from "../data/products.json";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home({ showToast }) { 

  const message = "Hello! I want a custom moti product. Please help me with the order.";
  const encodedMessage = encodeURIComponent(message); 

  const [items, setItems] = useState([]);
  

  useEffect(() => {
    setItems(productsData.slice(0, 4)); // Best sellers
  }, []);

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
              href={`https://wa.me/919373219062?text=${encodedMessage}`}
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

      {/* Mobile "See More" link */}
<div className={styles.seeMoreMobile}>
  <Link to="/products" className={styles.seeMoreLink}>
    See More →
  </Link>
</div>


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
