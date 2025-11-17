import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { useBuyNow } from '../context/BuyNowContext';
import '../styles/common.css';
import '../styles/checkout.css';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, incrementQuantity, decrementQuantity, removeFromCart, getCartTotal } = useCart();
  const { buyNowItem } = useBuyNow();
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);

  useEffect(() => {
    // Get current user
    if (typeof window !== 'undefined') {
      try {
        const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
        setCurrentUser(user);
        
        if (user && (user.name || user.email)) {
          const username = user.name || user.email;
          const profile = JSON.parse(localStorage.getItem(`userProfile_${username}`) || '{}');
          setUserProfile(profile);
          setEmail(profile.email || user.email || '');
          
          // Try to get address from localStorage (if saved) or use a default
          const savedAddresses = localStorage.getItem(`addresses_${username}`);
          if (savedAddresses) {
            try {
              const addresses = JSON.parse(savedAddresses);
              if (addresses.length > 0) {
                setSelectedAddress(addresses[0]);
              }
            } catch (e) {
              // Use default address if parsing fails
              setSelectedAddress({
                label: 'Home',
                address: profile.address || 'Address not set'
              });
            }
          } else if (profile.address) {
            // Use address from profile if available
            setSelectedAddress({
              label: 'Home',
              address: profile.address
            });
          } else {
            // Default address
            setSelectedAddress({
              label: 'Home',
              address: 'No address saved. Please add an address to continue.'
            });
          }
        }
      } catch (e) {
        // Handle errors silently during build
      }
    }
  }, []);

  const itemsToPurchase = buyNowItem ? [buyNowItem] : cartItems;
  const total = itemsToPurchase.reduce((sum, item) => {
    const price = typeof item.price === 'number' ? item.price : parseFloat(String(item.price).replace(/[^0-9.]/g, '')) || 0;
    const qty = item.quantity || 1;
    return sum + price * qty;
  }, 0);
  const platformFee = 5;
  const totalPayable = total + platformFee;

  // Calculate original total for savings (assuming 50% average discount)
  const originalTotal = itemsToPurchase.reduce((sum, item) => {
    const price = typeof item.price === 'number' ? item.price : parseFloat(String(item.price).replace(/[^0-9.]/g, '')) || 0;
    const qty = item.quantity || 1;
    return sum + (price * 2 * qty); // Assuming 50% discount
  }, 0);
  const savings = originalTotal - total;

  const handleContinue = () => {
    if (!email) {
      toast.error('Please enter your email address', 3000);
      return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address', 3000);
      return;
    }
    
    toast.success('Proceeding to payment...', 2000);
    setTimeout(() => {
      navigate('/payment');
    }, 500);
  };

  const getDeliveryDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 4);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${days[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()}`;
  };

  if (!buyNowItem && cartItems.length === 0) {
    return (
      <div className="checkout-container">
        <div className="empty-checkout">
          <h2>Your cart is empty</h2>
          <p>Add items to your cart to proceed with checkout</p>
          <button className="btn-primary" onClick={() => navigate('/cart')}>Go to Cart</button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <h1>Checkout</h1>
      </div>

      <div className="checkout-grid">
        {/* Left Section */}
        <div className="checkout-left">
          {/* Login Section */}
          <div className="checkout-section completed">
            <div className="section-number">1</div>
            <div className="section-content">
              <div className="section-header">
                <span className="check-icon">✓</span>
                <h3>LOGIN</h3>
              </div>
              <div className="section-body">
                <div className="login-info">
                  <span className="phone-number">
                    {currentUser?.contact || userProfile?.contact || currentUser?.email || 'Not provided'}
                  </span>
                  <button className="change-btn">CHANGE</button>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Address Section */}
          <div className="checkout-section completed">
            <div className="section-number">2</div>
            <div className="section-content">
              <div className="section-header">
                <span className="check-icon">✓</span>
                <h3>DELIVERY ADDRESS</h3>
              </div>
              <div className="section-body">
                <div className="address-info">
                  {selectedAddress ? (
                    <p>{selectedAddress.label && `${selectedAddress.label}: `}{selectedAddress.address}</p>
                  ) : (
                    <p>No address saved. <button className="change-btn" onClick={() => navigate('/account/addresses')}>Add Address</button></p>
                  )}
                  <button className="change-btn">CHANGE</button>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="checkout-section active">
            <div className="section-number">3</div>
            <div className="section-content">
              <div className="section-header active-header">
                <h3>ORDER SUMMARY</h3>
              </div>
              <div className="section-body">
                <div className="order-items">
                  {itemsToPurchase.map((item) => {
                    const price = typeof item.price === 'number' ? item.price : parseFloat(String(item.price).replace(/[^0-9.]/g, '')) || 0;
                    const qty = item.quantity || 1;
                    const originalPrice = price * 2; // Assuming 50% discount
                    const discount = originalPrice - price;
                    const discountPercent = Math.round((discount / originalPrice) * 100);

                    return (
                      <div key={item.id} className="order-item">
                        <div className="item-image">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <div className="item-details">
                          <h4 className="item-title">{item.name}</h4>
                          <div className="item-meta">
                            {item.subCategory && <span>{item.subCategory}</span>}
                            {item.material && <span>{item.material}</span>}
                          </div>
                          <div className="item-seller">Seller: {item.seller || 'Global Exports'}</div>
                          <div className="item-pricing">
                            <span className="original-price">${originalPrice.toFixed(2)}</span>
                            <span className="discounted-price">${price.toFixed(2)}</span>
                            <span className="discount-badge">{discountPercent}% Off</span>
                          </div>
                          <div className="item-actions">
                            {!buyNowItem ? (
                              <>
                                <div className="qty-controls-checkout">
                                  <button 
                                    className="qty-btn" 
                                    onClick={() => decrementQuantity(item.id)}
                                    disabled={qty <= 1}
                                  >
                                    −
                                  </button>
                                  <span className="qty-value">{qty}</span>
                                  <button 
                                    className="qty-btn" 
                                    onClick={() => incrementQuantity(item.id)}
                                  >
                                    +
                                  </button>
                                </div>
                                <button 
                                  className="remove-item-btn" 
                                  onClick={() => {
                                    removeFromCart(item.id);
                                    toast.info(`${item.name} removed from cart`, 2000);
                                  }}
                                >
                                  REMOVE
                                </button>
                              </>
                            ) : (
                              <div className="qty-controls-checkout">
                                <span className="qty-value">Qty: {qty}</span>
                              </div>
                            )}
                          </div>
                          <div className="item-delivery">Delivery by {getDeliveryDate()}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="email-input-section">
                  <label>Order confirmation email will be sent to</label>
                  <input
                    type="email"
                    className="email-input"
                    placeholder="Enter your email ID"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <button className="continue-btn" onClick={handleContinue}>
                  CONTINUE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Price Details */}
        <div className="checkout-right">
          <div className="price-details-card">
            <h3 className="price-details-title">PRICE DETAILS</h3>
            <div className="price-row">
              <span>Price ({itemsToPurchase.length} item{itemsToPurchase.length !== 1 ? 's' : ''})</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="price-row">
              <span>Platform Fee</span>
              <span>${platformFee.toFixed(2)}</span>
            </div>
            <div className="divider"></div>
            <div className="price-row total-row">
              <span>Total Payable</span>
              <span>${totalPayable.toFixed(2)}</span>
            </div>
            <div className="savings-info">
              <span>You will save ${savings.toFixed(2)} on this order</span>
            </div>
          </div>

          <div className="security-info">
            <div className="security-badge">
              <span className="material-symbols-outlined">verified</span>
              <div>
                <p>Safe and Secure Payments. Easy returns. 100% Authentic products.</p>
              </div>
            </div>
            <p className="terms-text">
              By continuing with the order, you confirm that you are above 18 years of age, and you agree to the{' '}
              <button type="button" className="link-button" onClick={(e) => e.preventDefault()}>Terms of Use</button> and{' '}
              <button type="button" className="link-button" onClick={(e) => e.preventDefault()}>Privacy Policy</button>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

