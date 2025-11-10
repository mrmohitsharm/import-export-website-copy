import React, { createContext, useContext, useEffect, useState } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error('useWishlist must be used within a WishlistProvider');
  return ctx;
};

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = JSON.parse(localStorage.getItem('wishlistItems') || '[]');
        setWishlistItems(Array.isArray(saved) ? saved : []);
      } catch (e) {
        setWishlistItems([]);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
      } catch {
        // ignore
      }
    }
  }, [wishlistItems]);

  const addToWishlist = (product) => {
    setWishlistItems((prev) => {
      if (prev.find((p) => p.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((p) => p.id !== id));
  };

  const clearWishlist = () => setWishlistItems([]);
  const getWishlistCount = () => wishlistItems.length;

  const value = {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
    getWishlistCount,
  };

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};


