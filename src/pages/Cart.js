import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/common.css";
import "../styles/cart.css";

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("cartItems") || "[]");
      setItems(Array.isArray(saved) ? saved : []);
    } catch (e) {
      setItems([]);
    }
  }, []);

  const saveItems = (next) => {
    setItems(next);
    localStorage.setItem("cartItems", JSON.stringify(next));
  };

  const increment = (id) => {
    const next = items.map((it) => it.id === id ? { ...it, quantity: (it.quantity || 1) + 1 } : it);
    saveItems(next);
  };

  const decrement = (id) => {
    const next = items.map((it) => it.id === id ? { ...it, quantity: Math.max(1, (it.quantity || 1) - 1) } : it);
    saveItems(next);
  };

  const removeItem = (id) => {
    const next = items.filter((it) => it.id !== id);
    saveItems(next);
  };

  const total = items.reduce((sum, it) => {
    const price = typeof it.price === "number" ? it.price : parseFloat(String(it.price).replace(/[^0-9.]/g, "")) || 0;
    const qty = it.quantity || 1;
    return sum + price * qty;
  }, 0);

  return (
    <div className="container cart-container">
      <div className="cart-header">
        <h1>Shopping  Cart</h1>
      </div>
      {items.length === 0 ? (
        <div className="empty-cart">
          <p className="empty-sub">Your cart is empty.</p>
          <Link className="btn-primary continue-btn" to="/">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-grid">
          <div className="space-y-3 cart-card">
            {items.map((it) => (
              <div key={it.id} className="cart-item">
                <img src={it.image} alt={it.name} />
                <div>
                  <p className="cart-item-title">{it.name}</p>
                  <p className="cart-item-price">{typeof it.price === "number" ? `$${it.price}` : it.price}</p>
                  <div className="qty-controls">
                    <button className="btn-outline" onClick={() => decrement(it.id)}>-</button>
                    <span>{it.quantity || 1}</span>
                    <button className="btn-outline" onClick={() => increment(it.id)}>+</button>
                  </div>
                </div>
                <button className="btn-outline remove-btn" onClick={() => removeItem(it.id)}>Remove</button>
              </div>
            ))}
          </div>

          <div className="cart-card summary-card">
            <h2 style={{ marginTop: 0 }}>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <strong>${total.toFixed(2)}</strong>
            </div>
            <div className="divider"></div>
            <button className="btn-primary checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;


