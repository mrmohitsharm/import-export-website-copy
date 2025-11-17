import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { allProducts } from "../data/products";
import "../styles/homepage.css";
import "../styles/common.css";
import { useToast } from "../context/ToastContext";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const toast = useToast();

  // Featured products
  const featuredProducts = allProducts.slice(0, 10);

  const heroSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
      title: "Discover Luxury Exports",
      subtitle: "Premium Textiles, Jewellery & Accessories",
    },
    {
      image:
        "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
      title: "Handcrafted Jewellery",
      subtitle: "Exquisite Designs for Every Occasion",
    },
    {
      image: "/images/text.png",
      title: "Premium Textiles",
      subtitle: "Traditional Craftsmanship Meets Modern Design",
    },
  ];

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // Testimonials
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fashion Retailer",
      image:
        "https://physicaleducationandwellness.mit.edu/wp-content/uploads/Untitled-1.png",
      quote:
        "The quality of textiles and the attention to detail in every piece is exceptional. Our customers love the authentic craftsmanship.",
    },
    {
      name: "Michael Chen",
      role: "Boutique Owner",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      quote:
        "Working with Luxe Exports has transformed our jewelry collection. Their designs are unique and the service is impeccable.",
    },
    {
      name: "Emma Thompson",
      role: "Interior Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      quote:
        "The accessories range has added a perfect touch of elegance to our interior projects. Highly recommended!",
    },
  ];

  // -------------------------------
  // NEWSLETTER SUBSCRIBE HANDLER
  // -------------------------------
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();

    const email = newsletterEmail.trim();
    if (!email) return;

    const storedEmails =
      JSON.parse(localStorage.getItem("newsletterEmails")) || [];

    if (storedEmails.includes(email)) {
      toast.info("You are already subscribed!", 2000);
      setNewsletterEmail("");
      return;
    }

    storedEmails.push(email);
    localStorage.setItem("newsletterEmails", JSON.stringify(storedEmails));

    toast.success("Subscribed successfully!", 2000);
    setNewsletterEmail("");
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})`,
            }}
          >
            <div className="hero-content">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <button className="hero-cta">
                <a href="/textiles">Explore Collection</a>
              </button>
            </div>
          </div>
        ))}

        <button className="hero-nav prev" onClick={prevSlide}>
          <span className="material-symbols-outlined">chevron_left</span>
        </button>

        <button className="hero-nav next" onClick={nextSlide}>
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </section>

      {/* NEW ARRIVALS */}
      <section className="products-section">
        <div className="container">
          <h2 className="section-title">New Arrivals</h2>
          <div className="products-grid">
            {featuredProducts.map((p) => (
              <div key={p.id} className="product-card">
                <div className="product-image-wrap">
                  <img src={p.image} alt={p.name} />
                  <span className="price-badge">${p.price}</span>
                </div>

                <div className="product-info">
                  <p className="product-name">{p.name}</p>

                  <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                    <Link
                      to={`/product/${p.id}`}
                      className="btn-outline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="benefits-section">
        <div className="container benefits-grid">
          <div className="benefit-item">
            <span className="material-symbols-outlined benefit-icon">
              local_shipping
            </span>
            <div>
              <p className="benefit-title">Fast Worldwide Shipping</p>
              <p className="benefit-sub">Tracked, reliable delivery</p>
            </div>
          </div>

          <div className="benefit-item">
            <span className="material-symbols-outlined benefit-icon">
              verified_user
            </span>
            <div>
              <p className="benefit-title">Secure Payments</p>
              <p className="benefit-sub">128-bit SSL encryption</p>
            </div>
          </div>

          <div className="benefit-item">
            <span className="material-symbols-outlined benefit-icon">
              support_agent
            </span>
            <div>
              <p className="benefit-title">24/7 Support</p>
              <p className="benefit-sub">We're here to help</p>
            </div>
          </div>

          <div className="benefit-item">
            <span className="material-symbols-outlined benefit-icon">
              restart_alt
            </span>
            <div>
              <p className="benefit-title">Easy Returns</p>
              <p className="benefit-sub">Hassle-free process</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>

          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-author">
                    <img src={t.image} alt={t.name} />
                    <div className="author-info">
                      <p className="author-name">{t.name}</p>
                      <p className="author-role">{t.role}</p>
                    </div>
                  </div>

                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, idx) => (
                      <span key={idx} className="material-symbols-outlined">
                        star
                      </span>
                    ))}
                  </div>
                </div>

                <p className="testimonial-quote">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER - UPDATED */}
      <section className="newsletter-section">
        <div className="container newsletter-wrap">
          <div className="newsletter-copy">
            <h3 className="newsletter-title">Join Our Newsletter</h3>
            <p className="newsletter-sub">
              Get new arrivals, deals and inspirations.
            </p>
          </div>

          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input
              className="newsletter-input"
              type="email"
              placeholder="Enter your email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
            />

            <button className="newsletter-button" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default HomePage;
