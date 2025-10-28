import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/common.css';
import '../styles/textiles.css';

const Textiles = () => {
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

      {/* Featured Placeholder */}
      <section className="textiles-featured">
        <div className="textiles-container">
          <h2>Featured {categoryInfo.title}</h2>
          <p className="textiles-muted">Our most popular and best-selling {categoryInfo.title.toLowerCase()}</p>
          <div className="textiles-empty">Product listings specific to {categoryInfo.title} would be displayed here</div>
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
