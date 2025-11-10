import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/homepage.css";
import "../styles/common.css";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
      title: "Discover Luxury Exports",
      subtitle: "Premium Textiles, Jewellery & Accessories",
    },
    {
      image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
      title: "Handcrafted Jewellery",
      subtitle: "Exquisite Designs for Every Occasion",
    },
    {
      image: "/images/text.png",
      title: "Premium Textiles",
      subtitle: "Traditional Craftsmanship Meets Modern Design",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };


  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fashion Retailer",
      image: "https://physicaleducationandwellness.mit.edu/wp-content/uploads/Untitled-1.png",
      quote: "The quality of textiles and the attention to detail in every piece is exceptional. Our customers love the authentic craftsmanship."
    },
    {
      name: "Michael Chen",
      role: "Boutique Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      quote: "Working with Luxe Exports has transformed our jewelry collection. Their designs are unique and the service is impeccable."
    },
    {
      name: "Emma Thompson",
      role: "Interior Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      quote: "The accessories range has added a perfect touch of elegance to our interior projects. Highly recommended!"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        {heroSlides.map((slide, index) => (
          <div 
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})` }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <button className="hero-cta">
                <a href="/textiles">Explore Collection</a>
              </button>
            </div>
          </div>
        ))}
        
        {/* Navigation Buttons */}
        <button className="hero-nav prev" onClick={prevSlide}>
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button className="hero-nav next" onClick={nextSlide}>
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </section>

      {/* New Arrivals */}
      <section className="products-section">
        <div className="container">
          <h2 className="section-title">New Arrivals</h2>
          <div className="products-grid">
            {[
              { id: 1, name: "Banarasi Silk Saree", price: "$250", image: "https://i.etsystatic.com/22698705/r/il/3ee0e4/2782061663/il_fullxfull.2782061663_3131.jpg" },
              { id: 2, name: "Oxidized Anklet", price: "$85", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1400&auto=format&fit=crop" },
              { id: 3, name: "Kundan Necklace Set", price: "$320", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1400&auto=format&fit=crop" },
              { id: 4, name: "Embroidered Clutch", price: "$120", image: "/images/EmbroideredClutch.png" },
              { id: 5, name: "Pashmina Shawl", price: "$180", image: "/images/Pashmina-Shawl.png" },
              { id: 6, name: "Bridal Lehenga", price: "$350", image: "/images/0.png" },
              { id: 7, name: "Gold Chain For Men", price: "$240", image: "/images/jewellery section/GoldChainForMen.png" },
              { id: 8, name: "Chanderi Cotton Fabric", price: "$120", image: "/images/Chanderi-Cotton-Fabric.png" },
              { id: 9, name: "Bridal Necklace Sets", price: "$705", image: "/images/jewellery section/BeautifulantiqueBridalNecklaceSets.png" },
              { id: 10, name: "Hand Block Scarf", price: "$45", image: "/images/Hand-Block-Printed-Scarf.png" },
            ].map((p) => (
              <div key={p.id} className="product-card">
                <div className="product-image-wrap">
                  <img src={p.image} alt={p.name} />
                  <span className="price-badge">{p.price}</span>
                </div>
                <div className="product-info">
                  <p className="product-name">{p.name}</p>
                  <Link to="/product/banarasi-silk-saree" className="btn-outline" onClick={(e) => e.stopPropagation()}>View details</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-author">
                    <img src={testimonial.image} alt={testimonial.name} />
                    <div className="author-info">
                      <p className="author-name">{testimonial.name}</p>
                      <p className="author-role">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined">star</span>
                    ))}
                  </div>
                </div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits / Trust Strip */}
      <section className="benefits-section">
        <div className="container benefits-grid">
          <div className="benefit-item">
            <span className="material-symbols-outlined benefit-icon">local_shipping</span>
            <div>
              <p className="benefit-title">Fast Worldwide Shipping</p>
              <p className="benefit-sub">Tracked, reliable delivery</p>
            </div>
          </div>
          <div className="benefit-item">
            <span className="material-symbols-outlined benefit-icon">verified_user</span>
            <div>
              <p className="benefit-title">Secure Payments</p>
              <p className="benefit-sub">128-bit SSL encryption</p>
            </div>
          </div>
          <div className="benefit-item">
            <span className="material-symbols-outlined benefit-icon">support_agent</span>
            <div>
              <p className="benefit-title">24/7 Support</p>
              <p className="benefit-sub">We're here to help</p>
            </div>
          </div>
          <div className="benefit-item">
            <span className="material-symbols-outlined benefit-icon">restart_alt</span>
            <div>
              <p className="benefit-title">Easy Returns</p>
              <p className="benefit-sub">Hassle-free process</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="newsletter-section">
        <div className="container newsletter-wrap">
          <div className="newsletter-copy">
            <h3 className="newsletter-title">Join Our Newsletter</h3>
            <p className="newsletter-sub">Get new arrivals, deals and inspirations.</p>
          </div>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input className="newsletter-input" type="email" placeholder="Enter your email" required />
            <button className="newsletter-button" type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default HomePage;
