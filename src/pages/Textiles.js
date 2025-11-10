import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useToast } from '../context/ToastContext';
import { useBuyNow } from '../context/BuyNowContext';
import { getProductsByCategory } from '../data/products';
import '../styles/common.css';
import '../styles/textiles.css';

const Textiles = () => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const { setBuyNowItem } = useBuyNow();
  const toast = useToast();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, 2500);
  };
  const handleWishlist = (product) => {
    addToWishlist(product);
    toast.info(`${product.name} saved to wishlist`, 2500);
  };
  const handleBuyNow = (product) => {
    const item = { ...product, quantity: 1 };
    setBuyNowItem(item);
    toast.success(`Proceeding to checkout with ${product.name}`, 2000);
    window.location.href = '/checkout';
  };
  
  // Get textiles products from centralized data
  const textilesProducts = getProductsByCategory('Textiles');
  const categoryInfo = {
    title: 'Textiles',
    description:
      'Discover our exquisite collection of handcrafted textiles from skilled artisans across India. From luxurious silk sarees to intricate embroidered fabrics, each piece tells a story of traditional craftsmanship and cultural heritage.',
    image: '/images/txtttt.png',
    subcategories: [
      { name: 'Sarees', image: '/images/Saree.png' },
      { name: 'Scarves', image: '/images/Scarves.png' },
      { name: 'Fabrics', image: '/images/Fabrics.png' },
      { name: 'Dupattas', image: '/images/Dupattas.png' },
      { name: 'Shawls', image: '/images/Shawls.png' },
    ],
  };

  return (
    <div>
      {/* Category Banner */}
      <section className="textiles-banner">
        {categoryInfo.image ? (
          <img src={categoryInfo.image} className="banner-image" alt={categoryInfo.title} />
        ) : (
          <div className="banner-fallback" />
        )}
        <div className="banner-overlay">
          <div className="banner-content">
            <h1 className="banner-title">{categoryInfo.title}</h1>
            {categoryInfo.description && <p className="banner-desc">{categoryInfo.description}</p>}
          </div>
        </div>
      </section>

      {/* Subcategories */}
      <section className="textiles-subcats">
        <div className="textiles-container">
          <div className="subcats-head">
            <h2>Browse {categoryInfo.title}</h2>
            <p className="textiles-muted">Explore our range of {categoryInfo.title.toLowerCase()} subcategories</p>
          </div>

          <div className="subcats-grid">
            {categoryInfo.subcategories.map((subcat) => (
              <Link key={subcat.name} to={`/products/textiles/${subcat.name.toLowerCase()}`} className="subcat-card">
                <div className="subcat-thumb">
                  <img src={subcat.image} alt={subcat.name} />
                </div>
                <div className="subcat-title">{subcat.name}</div>
              </Link>
            ))}
          </div>

          <div className="textiles-center">
            <Link to="/products/textiles" className="textiles-secondary-btn">View All {categoryInfo.title}</Link>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="textiles-featured">
        <div className="textiles-container">
          <h2>All {categoryInfo.title}</h2>
          <p className="textiles-muted">Browse our curated selection of textiles</p>
          <div className="products-grid">
            {textilesProducts.map((p) => (
              <div key={p.id} className="product-card">
                <div className="product-image-wrap">
                  <img src={p.image} alt={p.name} />
                  <span className="price-badge price-badge--sm">${p.price}</span>
                </div>
                <div className="product-info">
                  <div>
                    <p className="card-category">{p.subCategory || 'Textiles'}</p>
                    <p className="card-title">{p.name}</p>
                    <p className="card-sub">{p.material}</p>
                  </div>
                  <div className="product-actions">
                    <Link to="/product/banarasi-silk-saree" className="btn-outline" onClick={(e) => e.stopPropagation()}>Details</Link>
                    <button 
                      className="btn-primary add-cart-btn" 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(p);
                      }}
                    >
                      <span className="material-symbols-outlined">shopping_cart</span>
                      Add to Cart
                    </button>
                    <button 
                      className="btn-outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBuyNow(p);
                      }}
                    >
                      Buy Now
                    </button>
                    <button 
                      className="btn-outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleWishlist(p);
                      }}
                    >
                      <span className="material-symbols-outlined">favorite</span>
                      Wishlist
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="textiles-cta">
        <div className="textiles-cta-inner">
          <h3>Looking for Something Special?</h3>
          <p>We offer custom orders and wholesale opportunities. Contact our team to discuss your specific requirements.</p>
          <Link to="/contact" className="textiles-cta-button">Contact Us</Link>
        </div>
      </section>
    </div>
  );
};

export default Textiles;
