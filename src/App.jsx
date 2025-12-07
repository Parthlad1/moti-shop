import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Toast from "./components/Toast";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [toast, setToast] = useState({ show: false, message: "" });

  // global toast trigger
  const showToast = (msg) => {
    setToast({ show: true, message: msg });

    // auto-hide after 2 sec
    setTimeout(() => {
      setToast({ show: false, message: "" });
    }, 2000);
  };

  return (
    <div className="app-root">
      <ScrollToTop />   {/* 👈 FIX for scroll reset */}
      {/* 🔔 Toast Notification */}
      <Toast
        message={toast.message}
        show={toast.show}
        onClose={() => setToast({ show: false, message: "" })}
      />

      <Navbar />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home showToast={showToast} />} />
          <Route path="/products" element={<Products showToast={showToast} />} />
          <Route path="/product/:id" element={<ProductDetail showToast={showToast} />} />
          <Route path="/cart" element={<CartPage showToast={showToast} />} />
          <Route path="/checkout" element={<Checkout showToast={showToast} />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
