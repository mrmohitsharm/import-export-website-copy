import React, { createContext, useContext, useEffect, useState } from 'react';

const BuyNowContext = createContext();

export const useBuyNow = () => {
  const ctx = useContext(BuyNowContext);
  if (!ctx) throw new Error('useBuyNow must be used within a BuyNowProvider');
  return ctx;
};

export const BuyNowProvider = ({ children }) => {
  const [buyNowItem, setBuyNowItemState] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('buyNowItem');
        if (saved) {
          setBuyNowItemState(JSON.parse(saved));
        }
      } catch {
        setBuyNowItemState(null);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        if (buyNowItem) {
          localStorage.setItem('buyNowItem', JSON.stringify(buyNowItem));
        } else {
          localStorage.removeItem('buyNowItem');
        }
      } catch {
        // ignore
      }
    }
  }, [buyNowItem]);

  const setBuyNowItem = (item) => setBuyNowItemState(item);
  const clearBuyNowItem = () => setBuyNowItemState(null);
  const getBuyNowItem = () => buyNowItem;

  const value = { buyNowItem, setBuyNowItem, clearBuyNowItem, getBuyNowItem };
  return <BuyNowContext.Provider value={value}>{children}</BuyNowContext.Provider>;
};


