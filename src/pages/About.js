import React from 'react';
import '../styles/about.css';
import '../styles/common.css';

const About = () => {
  const handleImageError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = 'https://awdheshkumar.in/public/assets/img/placeholder-rect.jpg';
  };

  return (
    <div>
      {/* Hero Section */}
       <section className="contact-hero-banner">
        <img src="/images/raising.png" className="contact-banner-image" alt="Contact us" />
        <div className="contact-banner-overlay">
          <div className="contact-banner-content">
            <h1 className="contact-banner-title">About Us – Global Exports</h1>
            <p className="contact-banner-desc">
             At Global Exports, we celebrate India’s timeless artistry by taking its handicrafts, textiles, and jewellery to the world. Founded on the principles of authenticity and excellence, we specialize in exporting handcrafted treasures that embody culture, craftsmanship, and creativity.

Each product we trade tells a story — of skilled artisans, traditional techniques, and heritage passed through generations. From intricately woven fabrics to handcrafted jewellery and home décor, we ensure that every piece reflects India’s rich artistic legacy and meets global standards of quality and design.

With a strong logistics network, ethical sourcing practices, and a passion for perfection, Global Exports has built enduring relationships with clients across continents. We don’t just export products — we export trust, beauty, and craftsmanship that transcends borders.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To promote India’s rich heritage by connecting global markets with authentic handicrafts, textiles, and jewellery — 
              empowering artisans, preserving traditions, and delivering unmatched quality to our clients worldwide.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To be recognized as a global ambassador of Indian artistry — creating a sustainable platform where tradition meets 
              international demand, and craftsmanship finds its rightful place on the world stage.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">Our Values</h2>
          <ul className="text-muted-foreground max-w-2xl mx-auto space-y-3 text-left">
            <li><b>Authenticity:</b> We preserve the true essence of every craft we trade.</li>
            <li><b>Quality:</b> Excellence is woven into every thread and design we deliver.</li>
            <li><b>Sustainability:</b> We support eco-conscious production and fair trade practices.</li>
            <li><b>Empowerment:</b> We uplift artisan communities by connecting their work to global opportunities.</li>
            <li><b>Commitment:</b> We value long-term partnerships built on trust, transparency, and integrity.</li>
          </ul>
        </div>
      </section>

      {/* Avdesh Bharat / Raising Rajasthan Section */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 border border-primary rounded-lg overflow-hidden shadow-lg">
            <div className="overflow-hidden">
              <img
                src="/images/raising.png"
                alt="Awdhesh Kumar promo"
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                onError={handleImageError}
              />
            </div>
            <div className="p-6 text-muted-foreground">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Awdhesh Kumar in Raising Rajasthan
              </h2>
              <p className="mb-4">
                We are proud to have participated in Rising Rajasthan 2024, where we had the chance to showcase the beautiful craft of block printing. 
                It was a special moment for us to stand alongside my father, Shri Awdhesh Kumar Pandey, and share this traditional art form with the Honorable Prime Minister, Shri Narendra Modi ji.
              </p>
              <p className="mb-4">
                Block printing is more than just a craft — it is a part of our heritage, passed down through generations. 
                My father has dedicated his life to preserving this art, and it was an honor to represent his efforts and the work of skilled artisans who keep this tradition alive.
              </p>
              <p>
                Our aim is to celebrate and promote the rich culture of Rajasthan through our hand block printed designs. 
                This opportunity inspires us to continue sharing this unique art with the world while supporting the talented hands behind it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
