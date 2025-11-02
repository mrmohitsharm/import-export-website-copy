import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { useCart } from '../context/CartContext';
import '../styles/header.css';
import '../styles/footer.css';
import '../styles/common.css';

const Layout = ({ children }) => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <>
      {/* Announcement Bar */}
     

      {/* Header */}
      <header className="main-header">
        <div className="header-container">
          <div className="logo_container">
            <Link to="/" className="logo-link">
              Global Exports
            </Link>
          </div>
          
          <nav className="nav_bar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/textiles" className="nav-link">Textiles</Link>
            <Link to="/jewellery" className="nav-link">Jewellery</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>
          
          <div className="search_bar">
            <span className="material-symbols-outlined search_icon">search</span>
            <input className="search_input" placeholder="Search " />
          </div>
          
          <div className="header-actions">
            <Link to="/profile" className="action-link">
              <span className="material-symbols-outlined">person</span>
            </Link>
            <Link to="/cart" className="action-link cart-link">
              <span className="material-symbols-outlined">shopping_cart</span>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Layout;
