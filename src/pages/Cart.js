import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/common.css";
import "../styles/cart.css";

const Cart = () => {
  const { cartItems, incrementQuantity, decrementQuantity, removeFromCart, getCartTotal } = useCart();
  const total = getCartTotal();

  return (
    <div className="container cart-container">
      <div className="cart-header">
        <h1>Shopping  Cart</h1>
      </div>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p className="empty-sub">Your cart is empty.</p>
          <Link className="btn-primary continue-btn" to="/">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-grid">
          <div className="space-y-3 cart-card">
            {cartItems.map((it) => (
              <div key={it.id} className="cart-item">
                <img src={it.image} alt={it.name} />
                <div>
                  <p className="cart-item-title">{it.name}</p>
                  <p className="cart-item-price">{typeof it.price === "number" ? `$${it.price}` : it.price}</p>
                  <div className="qty-controls">
                    <button className="btn-outline" onClick={() => decrementQuantity(it.id)}>-</button>
                    <span>{it.quantity || 1}</span>
                    <button className="btn-outline" onClick={() => incrementQuantity(it.id)}>+</button>
                  </div>
                </div>
                <button className="btn-outline remove-btn" onClick={() => removeFromCart(it.id)}>Remove</button>
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


