import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/common.css';
import '../styles/textiles.css';

const Jewellery = () => {
  // All product image paths are corrected to public-root relative URLs
  const allProducts = [
    { id: 1, name: 'Six Pack Ring', category: 'Textiles', subCategory: 'Ring', price: 500, material: 'Gold', image: '/images/jewellery section/sixpackring.png' },
    { id: 2, name: '925 Silver Valentina Earrings', category: 'Textiles', subCategory: 'Earrings', price: 350, material: 'Platinum', image: '/images/jewellery section/925SilverValentinaEarrings.png' },
    { id: 3, name: 'VALLEY OF JEWELLERY', category: 'Textiles', subCategory: 'Earrings', price: 185, material: 'Silver', image: '/images/jewellery section/VALLEYOFJEWELLERY.png' },
    { id: 4, name: 'Diamond Pearl Curved Zircon Korean Earrings', category: 'Textiles', subCategory: 'Earrings', price: 400, material: 'Silver', image: '/images/jewellery section/DiamondPearlCurvedZirconKoreanEarrings.png' },
    { id: 5, name: 'Diamond Necklace Sets ', category: 'Textiles', subCategory: 'Necklace', price: 1000, material: 'Diamonds', image: '/images/jewellery section/DiamondNecklaceSets.png' },
    { id: 6, name: 'Beautiful antique Bridal Necklace Sets', category: 'Textiles', subCategory: 'Necklace', price: 705, material: 'Gold', image: '/images/jewellery section/BeautifulantiqueBridalNecklaceSets.png' },
    { id: 7, name: 'Sterling Silver Ladies Necklace', category: 'Textiles', subCategory: 'Necklace', price: 490, material: 'Silver', image: '/images/jewellery section/SterlingSilverLadiesNecklace.png' },
    { id: 9, name: 'Orlando Platinum Band', category: 'Textiles', subCategory: 'HandBand', price: 520, material: 'Platinum', image: '/images/jewellery section/OrlandoPlatinumBand.png' },
    { id: 11, name: 'Gold Ring', category: 'Textiles', subCategory: 'Ring', price: 545, material: 'Gold', image: '/images/jewellery section/GoldRing.png' },
    { id: 12, name: 'Earrings with Beads for Women', category: 'Textiles', subCategory: 'Earrings', price: 100, material: 'Gold', image: '/images/jewellery section/EarringswithBeadsforWomen.png' },
    { id: 13, name: 'Gold Chain For Men', category: 'Textiles', subCategory: 'Chain', price: 240, material: 'Gold', image: '/images/jewellery section/GoldChainForMen.png' },
    { id: 14, name: 'Gold Polished Chain', category: 'Textiles', subCategory: 'Chain', price: 100, material: 'Gold', image: '/images/jewellery section/PolishedByGold.png' },
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
