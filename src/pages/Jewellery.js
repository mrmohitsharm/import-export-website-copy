import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/common.css';
import '../styles/textiles.css';

const Jewellery = () => {
  // All product image paths are corrected to public-root relative URLs
  const allProducts = [
    { id: 1, name: 'Banarasi Silk Saree', category: 'Textiles', subCategory: 'Sarees', price: 250, material: 'Silk', image: '/images/Banarasi-saare.png' },
    { id: 2, name: 'Bridal Elegance Lehenga', category: 'Textiles', subCategory: 'Lehenga', price: 350, material: 'Cotton', image: '/images/0.png' },
    { id: 3, name: 'Lightweight Party Saree', category: 'Textiles', subCategory: 'Saree', price: 85, material: 'Silk', image: '/images/Party.png' },
    { id: 4, name: 'Pashmina Shawl', category: 'Textiles', subCategory: 'Shawls', price: 180, material: 'Pashmina Wool', image: '/images/Pashmina-Shawl.png' },
    { id: 5, name: 'Textured Beige Kurta Set', category: 'Textiles', subCategory: 'Kurta', price: 75, material: 'Cotton', image: '/images/Kurta.png' },
    { id: 6, name: 'Phulkari Dupatta', category: 'Textiles', subCategory: 'Dupattas', price: 95, material: 'Cotton', image: '/images/Phulkari-Dupatta.png' },
    { id: 7, name: 'Painted Boho Pants', category: 'Textiles', subCategory: 'Pants', price: 40, material: 'Silk', image: '/images/Pants.png' },
    { id: 9, name: 'Chanderi Cotton Fabric', category: 'Textiles', subCategory: 'Fabrics', price: 120, material: 'Cotton', image: '/images/Chanderi-Cotton-Fabric.png' },
    { id: 11, name: 'Hand Block Printed Scarf', category: 'Textiles', subCategory: 'Scarves', price: 45, material: 'Cotton', image: '/images/Hand-Block-Printed-Scarf.png' },
    { id: 12, name: 'Rani Pink Mirror Work Kurti', category: 'Textiles', subCategory: 'Kurti', price: 160, material: 'Silk', image: '/images/Rani.png' },
  ];

  const textilesProducts = allProducts.filter(p => p.category === 'Textiles');

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
      <section className="textiles-featured">
        <div className="textiles-container">
          <h2>All {categoryInfo.title}</h2>
          <p className="textiles-muted">Browse our curated selection of textiles</p>
          <div className="products-grid">
            {textilesProducts.map((p) => (
              <a key={p.id} href="#" className="product-card">
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
                  <button className="btn-outline">Details</button>
                </div>
              </a>
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
