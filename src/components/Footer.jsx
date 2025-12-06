import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Brand + tagline */}
        <div className={styles.brandBlock}>
          <div className={styles.brand}>MotiCraft Studio</div>
          <div className={styles.tag}>Handmade Moti Jewellery & Gift Creations</div>

          {/* Social Icons */}
          <div className={styles.socials}>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className={styles.icon}
            >
              <svg width="22" height="22" fill="none" stroke="#BFA760" strokeWidth="1.6">
                <rect x="3" y="3" width="18" height="18" rx="5"></rect>
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M17.5 6.5h.01"></path>
              </svg>
            </a>

            <a
              href="https://wa.me/919373219062"
              target="_blank"
              rel="noreferrer"
              className={styles.icon}
            >
              <svg width="22" height="22" viewBox="0 0 32 32" fill="#25D366">
              <path d="M16.027 3.2c-7.14 0-12.93 5.79-12.93 12.93 0 2.28.6 4.47 1.72 6.41L3 29l6.63-1.78c1.84.99 3.93 1.51 6.17 1.51h.01c7.14 0 12.93-5.79 12.93-12.93 0-7.14-5.79-12.93-12.93-12.93zm7.58 18.6c-.32.9-1.87 1.76-2.59 1.88-.66.1-1.51.14-2.45-.15-.56-.18-1.27-.41-2.19-.8-3.86-1.67-6.36-5.55-6.55-5.81-.19-.26-1.56-2.07-1.56-3.96 0-1.88.98-2.8 1.33-3.18.35-.38.77-.48 1.02-.48.26 0 .51.01.73.01.24 0 .55-.09.85.65.32.77 1.09 2.67 1.18 2.86.1.19.16.41.03.66-.13.26-.19.41-.38.64-.19.22-.4.49-.57.66-.19.19-.39.39-.17.76.22.38 1.01 1.67 2.18 2.71 1.5 1.33 2.76 1.74 3.14 1.93.38.19.6.16.83-.1.22-.26.96-1.12 1.21-1.51.26-.38.51-.32.85-.19.35.13 2.22 1.05 2.6 1.24.38.19.64.29.73.45.1.14.1.83-.22 1.73z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.bottom}>
          &copy; {new Date().getFullYear()} <strong>MotiCraft Studio</strong> — Crafted with ❤  
        </div>
      </div>
    </footer>
  );
}
