import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { useBuyNow } from '../context/BuyNowContext';
import '../styles/common.css';
import '../styles/payment.css';

const Payment = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { buyNowItem, clearBuyNowItem } = useBuyNow();
  const toast = useToast();
  const [selectedMethod, setSelectedMethod] = useState(null);
  
  const itemsToPurchase = buyNowItem ? [buyNowItem] : cartItems;
  const total = itemsToPurchase.reduce((sum, item) => {
    const price = typeof item.price === 'number' ? item.price : parseFloat(String(item.price).replace(/[^0-9.]/g, '')) || 0;
    const qty = item.quantity || 1;
    return sum + price * qty;
  }, 0);
  const platformFee = 5;
  const totalPayable = total + platformFee;

  const paymentMethods = [
    {
      id: 'credit',
      name: 'Credit Card',
      icon: '💳',
      description: 'Visa, Mastercard, Amex'
    },
    {
      id: 'debit',
      name: 'Debit Card',
      icon: '💳',
      description: 'All major banks'
    },
    {
      id: 'upi',
      name: 'UPI',
      icon: '📱',
      description: 'Google Pay, PhonePe, Paytm'
    },
    {
      id: 'netbanking',
      name: 'Net Banking',
      icon: '🏦',
      description: 'All major banks'
    },
    {
      id: 'wallet',
      name: 'Wallets',
      icon: '👛',
      description: 'Paytm, Mobikwik, Freecharge'
    },
    {
      id: 'cod',
      name: 'Cash on Delivery',
      icon: '💰',
      description: 'Pay when you receive'
    }
  ];

  const handlePayment = () => {
    if (!selectedMethod) {
      toast.warning('Please select a payment method', 3000);
      return;
    }

    const methodName = paymentMethods.find(m => m.id === selectedMethod)?.name;
    
    // Show processing toast
    toast.info(`Processing payment via ${methodName}...`, 2000);
    
    // Simulate payment processing
    setTimeout(() => {
      // Save lightweight confirmation before clearing
      try {
        const orderSummary = {
          items: itemsToPurchase,
          subtotal: total,
          platformFee,
          totalPaid: totalPayable,
          placedAt: new Date().toISOString(),
        };
        localStorage.setItem('orderConfirmation', JSON.stringify(orderSummary));
      } catch {
        // ignore
      }

      // Clear only buy-now selection if present; otherwise clear full cart
      if (buyNowItem) {
        clearBuyNowItem();
      } else {
        clearCart();
      }
      toast.success(`Order placed successfully! Payment processed via ${methodName}.`, 4000);
      setTimeout(() => {
        navigate('/order/confirmation', { replace: true });
      }, 1000);
    }, 2000);
  };

  if (!buyNowItem && cartItems.length === 0) {
    return (
      <div className="payment-container">
        <div className="empty-payment">
          <h2>No items to pay for</h2>
          <p>Your cart is empty</p>
          <button className="btn-primary" onClick={() => navigate('/cart')}>Go to Cart</button>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-container">
      <div className="payment-header">
        <button className="back-btn" onClick={() => navigate('/checkout')}>
          <span className="material-symbols-outlined">arrow_back</span>
          Back
        </button>
        <h1>Select Payment Method</h1>
      </div>

      <div className="payment-grid">
        {/* Left Section - Payment Methods */}
        <div className="payment-left">
          <div className="payment-section">
            <h2>Choose Payment Method</h2>
            <div className="payment-methods">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className={`payment-method-card ${selectedMethod === method.id ? 'selected' : ''}`}
                  onClick={() => setSelectedMethod(method.id)}
                >
                  <div className="method-icon">{method.icon}</div>
                  <div className="method-info">
                    <h3>{method.name}</h3>
                    <p>{method.description}</p>
                  </div>
                  <div className="method-radio">
                    <input
                      type="radio"
                      name="payment"
                      checked={selectedMethod === method.id}
                      onChange={() => setSelectedMethod(method.id)}
                    />
                  </div>
                </div>
              ))}
            </div>

            {selectedMethod && (
              <div className="payment-form">
                <h3>Payment Details</h3>
                {selectedMethod === 'credit' || selectedMethod === 'debit' ? (
                  <div className="form-group">
                    <label>Card Number</label>
                    <input type="text" placeholder="1234 5678 9012 3456" maxLength="19" />
                    <div className="card-details">
                      <input type="text" placeholder="MM/YY" maxLength="5" />
                      <input type="text" placeholder="CVV" maxLength="3" />
                    </div>
                    <label>Cardholder Name</label>
                    <input type="text" placeholder="John Doe" />
                  </div>
                ) : selectedMethod === 'upi' ? (
                  <div className="form-group">
                    <label>UPI ID</label>
                    <input type="text" placeholder="yourname@upi" />
                  </div>
                ) : selectedMethod === 'netbanking' ? (
                  <div className="form-group">
                    <label>Select Bank</label>
                    <select>
                      <option>Select a bank</option>
                      <option>State Bank of India</option>
                      <option>HDFC Bank</option>
                      <option>ICICI Bank</option>
                      <option>Axis Bank</option>
                      <option>Punjab National Bank</option>
                    </select>
                  </div>
                ) : selectedMethod === 'wallet' ? (
                  <div className="form-group">
                    <label>Select Wallet</label>
                    <select>
                      <option>Select a wallet</option>
                      <option>Paytm</option>
                      <option>Mobikwik</option>
                      <option>Freecharge</option>
                    </select>
                  </div>
                ) : selectedMethod === 'cod' ? (
                  <div className="cod-info">
                    <p>You will pay ${totalPayable.toFixed(2)} when you receive your order.</p>
                  </div>
                ) : null}

                <button className="pay-btn" onClick={handlePayment}>
                  Pay ${totalPayable.toFixed(2)}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Section - Order Summary */}
        <div className="payment-right">
          <div className="order-summary-card">
            <h3>Order Summary</h3>
            <div className="summary-items">
              {itemsToPurchase.map((item) => {
                const price = typeof item.price === 'number' ? item.price : parseFloat(String(item.price).replace(/[^0-9.]/g, '')) || 0;
                const qty = item.quantity || 1;
                return (
                  <div key={item.id} className="summary-item">
                    <img src={item.image} alt={item.name} />
                    <div>
                      <p className="summary-item-name">{item.name}</p>
                      <p className="summary-item-qty">Qty: {qty}</p>
                      <p className="summary-item-price">${(price * qty).toFixed(2)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="summary-divider"></div>
            <div className="summary-totals">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Platform Fee</span>
                <span>${platformFee.toFixed(2)}</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-row total-row">
                <span>Total</span>
                <span>${totalPayable.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

