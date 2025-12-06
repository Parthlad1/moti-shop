import React from "react";
import styles from "./Toast.module.css";

export default function Toast({ message, show }) {
  if (!show) return null;

  return (
    <div className={styles.toast}>
      {/* Gold animated check */}
      <svg 
        className={styles.icon} 
        viewBox="0 0 24 24" 
        fill="none" 
      >
        <path d="M5 13l4 4L19 7" />
      </svg>

      {message}
    </div>
  );
}
