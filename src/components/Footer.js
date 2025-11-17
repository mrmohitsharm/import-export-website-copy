import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';
import '../styles/common.css';

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Info */}
        <div className="footer-section">
          <h3>Global Exports</h3>
          <p>Premium handcrafted treasures from India to the world.</p>
          <div className="social-links">
            <button type="button" className="social-link" aria-label="Facebook" onClick={(e) => e.preventDefault()}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073C24 5.446 18.627.073 12 .073S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47H13.874v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </button>
            <button type="button" className="social-link" aria-label="Instagram" onClick={(e) => e.preventDefault()}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.263 3.608-1.325C8.416 2.175 8.796 2.163 12 2.163zm0 1.837c-3.16 0-3.532.012-4.777.069-1.026.047-1.584.218-1.954.363-.492.191-.843.418-1.212.787-.369.369-.596.72-.787 1.212-.145.37-.316.928-.363 1.954-.057 1.245-.069 1.617-.069 4.777s.012 3.532.069 4.777c.047 1.026.218 1.584.363 1.954.191.492.418.843.787 1.212.369.369.72.596 1.212.787.37.145.928.316 1.954.363 1.245.057 1.617.069 4.777.069s3.532-.012 4.777-.069c1.026-.047 1.584-.218 1.954-.363.492-.191.843-.418 1.212-.787.369-.369.596-.72.787-1.212.145-.37.316-.928.363-1.954.057-1.245.069-1.617.069-4.777s-.012-3.532-.069-4.777c-.047-1.026-.218-1.584-.363-1.954-.191-.492-.418-.843-.787-1.212-.369-.369-.72-.596-1.212-.787-.37-.145-.928-.316-1.954-.363-1.245-.057-1.617-.069-4.777-.069zm0 3.89a5.947 5.947 0 110 11.894A5.947 5.947 0 0112 7.89zm0 1.837a4.11 4.11 0 100 8.221 4.11 4.11 0 000-8.22zm6.406-2.193a1.386 1.386 0 11-2.772 0 1.386 1.386 0 012.772 0z"/></svg>
            </button>
            <button type="button" className="social-link" aria-label="Twitter" onClick={(e) => e.preventDefault()}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </button>
            <button type="button" className="social-link" aria-label="LinkedIn" onClick={(e) => e.preventDefault()}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
           
          </ul>
        </div>

        {/* Product Categories */}
        <div className="footer-section">
          <h3>Products</h3>
          <ul className="footer-links">
            <li><Link to="/textiles">Textiles</Link></li>
            <li><Link to="/jewellery">Jewellery</Link></li>
          
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Subscribe to receive updates on new arrivals and special offers.</p>
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input 
              type="email" 
              placeholder="Your email" 
              required 
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()}  Global Exports. All rights reserved, "Developed by ⁓ Goklyn Pvt. Ltd"</p>
      </div>
    </footer>
  );
};

export default Footer;


