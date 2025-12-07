import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import productsData from "../data/products.json";
import styles from "./Products.module.css"; // import the CSS module

const categories = ["all","spiritual","rangoli", "bracelets", "necklaces", "earrings", "rakhis", "gifts"];

export default function Products({ showToast }) {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState("all");

  useEffect(() => {
    setItems(productsData);
  }, []);

  const filtered = items.filter(p => active === "all" ? true : p.category.toLowerCase() === active);

  return (
    <div className={styles.container}>
      <div className={styles["category-filter"]}>
        {categories.map(cat => (
          <button
            key={cat}
            className={`btn ${active === cat ? "active" : "ghost"}`}
            onClick={() => setActive(cat)}
            style={{ textTransform: "capitalize" }}
          >
            {cat}
          </button>
        ))}
      </div>

      <section className={styles["products-grid"]}>
        {filtered.map(p => <ProductCard key={p.id} product={p} showToast={showToast}/>)}
      </section>
    </div>
  );
}
