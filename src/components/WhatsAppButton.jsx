import React from "react";

export default function WhatsAppButton({ phone, message }) {
  // phone: international without +, message: encoded or raw
  const phoneStr = phone || "YOUR_PHONE_NUMBER";
  const msg = encodeURIComponent(message || "");
  const href = `https://wa.me/${phoneStr}?text=${msg}`;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="btn" style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M21 12.1C21 17.1 16.97 21 12 21a8.9 8.9 0 0 1-4.6-1.2L3 20l1.4-5.3A8.9 8.9 0 0 1 3 12.1C3 7.1 7.03 3 12 3s9 4.1 9 9.1z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      WhatsApp
    </a>
  );
}
