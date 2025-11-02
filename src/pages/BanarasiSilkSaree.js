import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/common.css';
import '../styles/banarasi-saree.css';

const BanarasiSilkSaree = () => {
  const [selectedSize, setSelectedSize] = useState('Standard');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  // Product data
  const product = {
    id: 1,
    name: 'Banarasi Silk Saree',
    price: 250,
    originalPrice: 320,
    discount: 22,
    rating: 4.5,
    totalReviews: 127,
    inStock: true,
    image: '/images/Banarasi-saare.png',
    description: `Experience the timeless elegance of our handcrafted Banarasi Silk Saree, a masterpiece that embodies the rich cultural heritage of Varanasi. Each saree is meticulously woven by skilled artisans using traditional techniques passed down through generations.

Crafted from the finest pure silk threads, this exquisite piece features intricate zari work (metallic thread embroidery) that creates stunning motifs and patterns. The saree boasts a luxurious drape that flows gracefully, making it perfect for weddings, festivals, and special occasions.

The rich color palette and intricate border design make this a statement piece that will be cherished for years to come. Every Banarasi saree tells a story of craftsmanship, tradition, and unparalleled beauty.`,
    specifications: {
      fabric: 'Pure Silk',
      length: '5.5 meters',
      width: '1.1 meters',
      weight: '800-900 grams',
      border: 'Intricate Zari Work',
      pallu: 'Heavy Zari Embroidered',
      care: 'Dry Clean Only',
      origin: 'Varanasi, Uttar Pradesh'
    },
    features: [
      'Handcrafted by skilled artisans',
      '100% Pure Silk',
      'Traditional Zari work',
      'Elegant drape and flow',
      'Premium quality threads',
      'Authentic Banarasi craftsmanship'
    ]
  };

  // Reviews data
  const reviews = [
    {
      id: 1,
      name: 'Priya Sharma',
      rating: 5,
      date: 'March 15, 2025',
      verified: true,
      comment: 'Absolutely stunning saree! The quality is exceptional and the zari work is breathtaking. Received many compliments at my sister\'s wedding. Highly recommend!',
      helpful: 23
    },
    {
      id: 2,
      name: 'Ananya Patel',
      rating: 4,
      date: 'March 10, 2025',
      verified: true,
      comment: 'Beautiful saree with excellent craftsmanship. The silk is soft and the drape is perfect. The color is exactly as shown in the pictures. Very satisfied with my purchase.',
      helpful: 15
    },
    {
      id: 3,
      name: 'Meera Kapoor',
      rating: 5,
      date: 'March 5, 2025',
      verified: false,
      comment: 'This is my second Banarasi saree from this brand. The quality is consistently amazing. The packaging was also excellent. Will definitely order again!',
      helpful: 8
    },
    {
      id: 4,
      name: 'Riya Gupta',
      rating: 4,
      date: 'February 28, 2025',
      verified: true,
      comment: 'The saree is gorgeous and the attention to detail is remarkable. The border work is intricate and the pallu is stunning. Worth every penny!',
      helpful: 12
    },
    {
      id: 5,
      name: 'Sneha Reddy',
      rating: 5,
      date: 'February 20, 2025',
      verified: true,
      comment: 'Perfect for my wedding ceremony! The saree looked elegant and felt comfortable throughout the day. The quality exceeded my expectations.',
      helpful: 19
    }
  ];

  // Calculate average rating
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  // Star rating component
  const StarRating = ({ rating, size = 'medium' }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className={`star-rating star-rating-${size}`}>
        {[...Array(fullStars)].map((_, i) => (
          <span key={i} className="star star-full">★</span>
        ))}
        {hasHalfStar && <span className="star star-half">★</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={i} className="star star-empty">☆</span>
        ))}
        <span className="rating-text">{rating.toFixed(1)}</span>
      </div>
    );
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${product.name} to cart!`);
  };

  return (
    <div className="banarasi-product-page">
      {/* Breadcrumb */}
      <div className="breadcrumb-container">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/textiles">Textiles</Link>
            <span>/</span>
            <Link to="/textiles/sarees">Sarees</Link>
            <span>/</span>
            <span>{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <section className="product-section">
        <div className="container">
          <div className="product-layout">
            {/* Product Image */}
            <div className="product-images">
              <div className="main-image-container">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="main-image"
                />
                {product.discount > 0 && (
                  <span className="discount-badge">-{product.discount}%</span>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info">
              <h1 className="product-title">{product.name}</h1>
              
              <div className="product-rating-summary">
                <StarRating rating={product.rating} size="large" />
                <span className="review-count">({product.totalReviews} reviews)</span>
                {product.inStock && <span className="in-stock-badge">In Stock</span>}
              </div>

              <div className="product-price">
                <span className="current-price">${product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="original-price">${product.originalPrice}</span>
                    <span className="discount-amount">Save ${product.originalPrice - product.price}</span>
                  </>
                )}
              </div>

              <div className="product-description-short">
                <p>Experience the timeless elegance of our handcrafted Banarasi Silk Saree, meticulously woven by skilled artisans using traditional techniques. Features intricate zari work and luxurious pure silk.</p>
              </div>

              {/* Specifications */}
              <div className="product-specs">
                <h3>Key Specifications</h3>
                <ul>
                  <li><strong>Fabric:</strong> {product.specifications.fabric}</li>
                  <li><strong>Length:</strong> {product.specifications.length}</li>
                  <li><strong>Border:</strong> {product.specifications.border}</li>
                  <li><strong>Origin:</strong> {product.specifications.origin}</li>
                </ul>
              </div>

              {/* Size Selection */}
              <div className="size-selection">
                <label>Size:</label>
                <div className="size-options">
                  {['Standard', 'Custom'].map((size) => (
                    <button
                      key={size}
                      className={`size-option ${selectedSize === size ? 'active' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="quantity-selection">
                <label>Quantity:</label>
                <div className="quantity-controls">
                  <button 
                    className="qty-btn"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >-</button>
                  <input 
                    type="number" 
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    min="1"
                    className="qty-input"
                  />
                  <button 
                    className="qty-btn"
                    onClick={() => setQuantity(quantity + 1)}
                  >+</button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="product-actions">
                <button className="btn-add-to-cart" onClick={handleAddToCart}>
                  <span className="material-symbols-outlined">shopping_cart</span>
                  Add to Cart
                </button>
                <button className="btn-buy-now">
                  Buy Now
                </button>
                <button className="btn-wishlist">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>

              {/* Features */}
              <div className="product-features">
                <h4>Key Features:</h4>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>
                      <span className="material-symbols-outlined">check_circle</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="product-tabs-section">
        <div className="container">
          <div className="product-tabs">
            <button 
              className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button 
              className={`tab-btn ${activeTab === 'specifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('specifications')}
            >
              Specifications
            </button>
            <button 
              className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews ({reviews.length})
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'description' && (
              <div className="tab-pane">
                <div className="description-content">
                  <p>{product.description}</p>
                  <h4>Care Instructions:</h4>
                  <ul>
                    <li>Dry clean only for best results</li>
                    <li>Store in a cool, dry place</li>
                    <li>Wrap in muslin cloth when storing</li>
                    <li>Avoid direct sunlight</li>
                    <li>Handle with clean hands to preserve the zari work</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="tab-pane">
                <div className="specifications-table">
                  <table>
                    <tbody>
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <tr key={key}>
                          <td><strong>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:</strong></td>
                          <td>{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="tab-pane">
                <div className="reviews-section">
                  <div className="reviews-summary">
                    <div className="overall-rating">
                      <div className="rating-circle">
                        <span className="rating-number">{averageRating.toFixed(1)}</span>
                        <StarRating rating={averageRating} />
                      </div>
                      <p className="rating-description">Based on {reviews.length} reviews</p>
                    </div>
                    
                    <div className="rating-breakdown">
                      {[5, 4, 3, 2, 1].map((stars) => {
                        const count = reviews.filter(r => Math.floor(r.rating) === stars).length;
                        const percentage = (count / reviews.length) * 100;
                        return (
                          <div key={stars} className="rating-bar-item">
                            <span className="rating-stars">{stars} ★</span>
                            <div className="rating-bar">
                              <div className="rating-bar-fill" style={{ width: `${percentage}%` }}></div>
                            </div>
                            <span className="rating-count">{count}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="reviews-list">
                    {reviews.map((review) => (
                      <div key={review.id} className="review-card">
                        <div className="review-header">
                          <div className="reviewer-info">
                            <div className="reviewer-name">
                              {review.name}
                              {review.verified && (
                                <span className="verified-badge">
                                  <span className="material-symbols-outlined">verified</span>
                                  Verified Purchase
                                </span>
                              )}
                            </div>
                            <StarRating rating={review.rating} size="small" />
                          </div>
                          <span className="review-date">{review.date}</span>
                        </div>
                        <p className="review-comment">{review.comment}</p>
                        <div className="review-footer">
                          <button className="helpful-btn">
                            <span className="material-symbols-outlined">thumb_up</span>
                            Helpful ({review.helpful})
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="write-review-section">
                    <h3>Write a Review</h3>
                    <form className="review-form">
                      <div className="form-group">
                        <label>Your Rating</label>
                        <div className="rating-input">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button key={star} type="button" className="star-btn">★</button>
                          ))}
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Your Name</label>
                        <input type="text" placeholder="Enter your name" />
                      </div>
                      <div className="form-group">
                        <label>Your Review</label>
                        <textarea rows="5" placeholder="Share your experience with this product..."></textarea>
                      </div>
                      <button type="submit" className="submit-review-btn">Submit Review</button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BanarasiSilkSaree;

