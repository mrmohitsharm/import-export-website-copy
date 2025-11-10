import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useToast } from '../context/ToastContext';
import { useBuyNow } from '../context/BuyNowContext';
import { getProductsByCategory } from '../data/products';
import '../styles/common.css';
import '../styles/textiles.css';
import '../styles/jewellery.css';

const Jewellery = () => {
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
  
  // Get jewellery products from centralized data
  const jewelleryProducts = getProductsByCategory('Jewellery');

  // Filters state
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [material, setMaterial] = useState('all');
  const [type, setType] = useState('all');
  const [sort, setSort] = useState('featured');

  // Build filter options
  const materials = useMemo(() => {
    const set = new Set(jewelleryProducts.map(p => (p.material || '').toString()));
    return ['all', ...Array.from(set).filter(Boolean)];
  }, [jewelleryProducts]);

  const types = useMemo(() => {
    const set = new Set(jewelleryProducts.map(p => (p.subCategory || '').toString()));
    return ['all', ...Array.from(set).filter(Boolean)];
  }, [jewelleryProducts]);

  // Apply filters + sorting
  const filteredProducts = useMemo(() => {
    let list = [...jewelleryProducts];
    const min = minPrice ? parseFloat(minPrice) : null;
    const max = maxPrice ? parseFloat(maxPrice) : null;
    if (min !== null && !Number.isNaN(min)) {
      list = list.filter(p => (typeof p.price === 'number' ? p.price : parseFloat(String(p.price).replace(/[^0-9.]/g, '')) || 0) >= min);
    }
    if (max !== null && !Number.isNaN(max)) {
      list = list.filter(p => (typeof p.price === 'number' ? p.price : parseFloat(String(p.price).replace(/[^0-9.]/g, '')) || 0) <= max);
    }
    if (material !== 'all') {
      list = list.filter(p => (p.material || '').toString().toLowerCase() === material.toLowerCase());
    }
    if (type !== 'all') {
      list = list.filter(p => (p.subCategory || '').toString().toLowerCase() === type.toLowerCase());
    }
    switch (sort) {
      case 'price-asc':
        list.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case 'price-desc':
        list.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case 'name-asc':
        list.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
        break;
      default:
        break;
    }
    return list;
  }, [jewelleryProducts, minPrice, maxPrice, material, type, sort]);

  const categoryInfo = {
    title: 'Jewellery',
    description:
      'Discover our exquisite collection of handcrafted jewellery from skilled artisans across India. From luxurious gold necklaces to intricately designed silver earrings, each piece tells a story of traditional craftsmanship and timeless elegance.',
    image: '/images/jewellaryHono.png',
    subcategories: [
      { name: 'Bridal Gold Jewellery Designs', image: '/images/BridalGoldJewelleryDesigns.png' },
      { name: 'Diamond Jewellery Set', image: '/images/DiamondJewellerySet.png' },
      { name: 'Indian Bridal Diamond Jewellery', image: '/images/IndianBridalDiamondJewellery.png' },
      { name: 'Artificial Jewellery Set for Wedding', image: '/images/ArtificialJewellerySetforWedding.png' },
      { name: 'Jewellery Brand', image: '/images/JewelleryBrand.png' },
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
      <section className="textiles-featured jewellery-featured">
        <div className="textiles-container">
          <div className="jewel-head">
            <h2>All {categoryInfo.title}</h2>
            <p className="textiles-muted">Browse our curated selection of {categoryInfo.title.toLowerCase()}</p>
          </div>

          {/* Filter Bar */}
          <div className="jewel-filters">
            <div className="filter-group">
              <label>Price</label>
              <div className="price-inputs">
                <input
                  type="number"
                  placeholder="Min"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                <span className="price-sep">—</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="filter-group">
              <label>Material</label>
              <select value={material} onChange={(e) => setMaterial(e.target.value)}>
                {materials.map(m => <option key={m} value={m}>{m === 'all' ? 'All' : m}</option>)}
              </select>
            </div>
            <div className="filter-group">
              <label>Type</label>
              <select value={type} onChange={(e) => setType(e.target.value)}>
                {types.map(t => <option key={t} value={t}>{t === 'all' ? 'All' : t}</option>)}
              </select>
            </div>
            <div className="filter-group">
              <label>Sort</label>
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
              </select>
            </div>
          </div>

          <div className="products-grid jewellery-grid">
            {filteredProducts.map((p) => (
              <div key={p.id} className="product-card">
                <div className="product-image-wrap">
                  <img src={p.image} alt={p.name} />
                  <span className="price-badge price-badge--sm jewel-price">${p.price}</span>
                </div>
                <div className="product-info">
                  <div>
                    <p className="card-category jewel-category">{p.subCategory || categoryInfo.title}</p>
                    <p className="card-title jewel-title">{p.name}</p>
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

      {/* CTA Section */}
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

export default Jewellery;
