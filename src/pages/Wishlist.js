import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import "../styles/common.css";
import "../styles/cart.css";

const Wishlist = () => {
  const navigate = useNavigate();
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const toast = useToast();

  const moveToCart = (item) => {
    addToCart(item);
    removeFromWishlist(item.id);
    toast.success(`${item.name} moved to cart`, 2500);
  };

  return (
    <div className="container cart-container">
      <div className="cart-header">
        <h1>Wishlist</h1>
        {wishlistItems.length > 0 && (
          <button className="btn-outline" onClick={() => { clearWishlist(); toast.info('Wishlist cleared', 2000); }}>
            Clear All
          </button>
        )}
      </div>
      {wishlistItems.length === 0 ? (
        <div className="empty-cart">
          <p className="empty-sub">Your wishlist is empty.</p>
          <Link className="btn-primary continue-btn" to="/">
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="cart-grid">
          <div className="space-y-3 cart-card">
            {wishlistItems.map((it) => (
              <div key={it.id} className="cart-item">
                <img src={it.image} alt={it.name} />
                <div>
                  <p className="cart-item-title">{it.name}</p>
                  <p className="cart-item-price">{typeof it.price === "number" ? `$${it.price}` : it.price}</p>
                  <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                    <button className="btn-primary" onClick={() => moveToCart(it)}>Move to Cart</button>
                    <button className="btn-outline" onClick={() => { removeFromWishlist(it.id); toast.info(`${it.name} removed`, 2000); }}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-card summary-card">
            <h2 style={{ marginTop: 0 }}>Next steps</h2>
            <p className="text-muted-foreground" style={{ marginBottom: 16 }}>Move items to cart to proceed to checkout.</p>
            <button className="btn-primary checkout-btn" onClick={() => navigate('/cart')}>Go to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;


