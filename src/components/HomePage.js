import React, { useState, useEffect } from "react";
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
  }, []);

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
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
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
                <a href="/products">Explore Collection</a>
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
    </>
  );
};

export default HomePage;
