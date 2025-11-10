import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useToast } from '../context/ToastContext';
import { useBuyNow } from '../context/BuyNowContext';
import { searchProducts } from '../data/products';
import '../styles/common.css';
import '../styles/textiles.css';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const { setBuyNowItem } = useBuyNow();
  const toast = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    navigate('/checkout');
  };

  useEffect(() => {
    // Get search term from URL query parameter
    const params = new URLSearchParams(location.search);
    const query = params.get('q') || '';
    setSearchTerm(query);
    
    if (query) {
      setIsLoading(true);
      // Simulate a small delay for better UX
      setTimeout(() => {
        const searchResults = searchProducts(query);
        setResults(searchResults);
        setIsLoading(false);
      }, 100);
    } else {
      setResults([]);
    }
  }, [location.search]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      toast.info(`Searching for "${searchTerm.trim()}"...`, 1500);
    } else {
      toast.warning('Please enter a search term', 2000);
    }
  };

  if (isLoading) {
    return (
      <div className="container" style={{ padding: '60px 20px', textAlign: 'center' }}>
        <p>Searching...</p>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      {/* Search Header */}
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '20px', color: '#1a1a1a' }}>
          Search Results
        </h1>
        
        {/* Search Bar */}
        <form onSubmit={handleSearch} style={{ display: 'flex', gap: '10px', maxWidth: '600px', marginBottom: '20px' }}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            style={{
              flex: 1,
              padding: '12px 16px',
              border: '1px solid #ddd',
              borderRadius: '25px',
              fontSize: '16px',
              outline: 'none'
            }}
          />
          <button
            type="submit"
            className="btn-primary"
            style={{ padding: '12px 24px', borderRadius: '25px' }}
          >
            Search
          </button>
        </form>

        {searchTerm && (
          <p style={{ color: '#666', fontSize: '14px' }}>
            {results.length > 0 
              ? `Found ${results.length} result${results.length !== 1 ? 's' : ''} for "${searchTerm}"`
              : `No results found for "${searchTerm}"`
            }
          </p>
        )}
      </div>

      {/* Search Results */}
      {results.length > 0 ? (
        <div className="products-grid" style={{ marginTop: '30px' }}>
          {results.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrap">
                <img src={product.image} alt={product.name} />
                <span className="price-badge price-badge--sm">${product.price}</span>
              </div>
              <div className="product-info">
                <div>
                  <p className="card-category">{product.subCategory || product.category}</p>
                  <p className="card-title">{product.name}</p>
                  <p className="card-sub">{product.material}</p>
                </div>
                <div className="product-actions">
                  <Link 
                    to={`/product/banarasi-silk-saree`} 
                    className="btn-outline" 
                    onClick={(e) => e.stopPropagation()}
                  >
                    Details
                  </Link>
                  <button
                    className="btn-primary add-cart-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                  >
                    <span className="material-symbols-outlined">shopping_cart</span>
                    Add to Cart
                  </button>
                  <button
                    className="btn-outline"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBuyNow(product);
                    }}
                  >
                    Buy Now
                  </button>
                  <button
                    className="btn-outline"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWishlist(product);
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
      ) : searchTerm ? (
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '20px' }}>
            No products found matching your search.
          </p>
          <p style={{ color: '#999', marginBottom: '30px' }}>
            Try searching for different keywords like "saree", "jewellery", "gold", "silk", etc.
          </p>
          <Link to="/" className="btn-primary">
            Browse All Products
          </Link>
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '20px' }}>
            Enter a search term to find products.
          </p>
          <Link to="/" className="btn-primary">
            Browse All Products
          </Link>
        </div>
      )}
    </div>
  );
};

export default SearchResults;

