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
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6 text-primary">About Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At <b>Awdhesh Kumar</b>, we celebrate the timeless beauty of Indian hand block printing. 
              With generations of craftsmanship behind us, our mission is to blend heritage with modern design 
              and share the soul of Indian textiles with the world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-muted-foreground">
                  Our mission is to preserve India’s traditional hand block printing techniques while adapting 
                  them to contemporary fashion and lifestyle. We strive to create opportunities for artisans, 
                  promote sustainable production, and deliver high-quality handcrafted products that connect 
                  culture, creativity, and consciousness.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="text-muted-foreground">
                  To be recognized globally as a leading brand for authentic Indian craftsmanship — one that 
                  uplifts artisans, empowers rural communities, and inspires the world to value slow, 
                  sustainable fashion rooted in tradition and integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avdesh Bharat / Raising Rajasthan Section */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 border border-primary rounded-lg overflow-hidden shadow-lg">
            
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src="/images/raising.png"
                alt="Awdhesh Kumar at Raising Rajasthan"
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                onError={handleImageError}
              />
            </div>

            {/* Text */}
            <div className="p-6 text-muted-foreground">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Awdhesh Kumar in Avdesh Bharat & Raising Rajasthan
              </h2>
              <p className="mb-4">
                We were honored to represent our brand and the heritage of Indian block printing at the 
                <b> Raising Rajasthan 2024</b> event. The participation symbolized our ongoing efforts to 
                promote handcrafted art on national and international platforms.
              </p>
              <p className="mb-4">
                Guided by <b>Shri Awdhesh Kumar Pandey</b>, a fourth-generation master artisan, our brand 
                stands for the preservation of traditional techniques and the upliftment of artisan 
                communities through creativity, innovation, and sustainable practices.
              </p>
              <p>
                This recognition reinforces our commitment to promoting the art of hand block printing 
                as an integral part of India’s cultural identity and sharing its beauty with the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story, Team, and Founders */}
      <section className="mb-8 px-4 md:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto bg-white p-4 sm:p-6 md:p-10 rounded-2xl shadow-md">

          {/* Our Story */}
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-center">Our Story</h2>
            <hr className="my-3 border-gray-300" />
            <p className="text-justify text-base sm:text-lg leading-relaxed">
              The art of Sanganeri block printing has been part of our family heritage since the 1940s, 
              when <b>Shri Harnath ji</b> and <b>Shri Balchand ji Pandey</b> began their journey as block printers. 
              Over generations, our family expanded this craft through innovation and dedication — from local 
              markets to national and global platforms. Today, under the brand <b>“Awdhesh Kumar”</b>, we carry 
              forward this legacy with modern design thinking and a deep respect for tradition.
            </p>
          </div>

          {/* Our Team */}
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-center">Our Team</h2>
            <hr className="my-3 border-gray-300" />
            <p className="text-justify text-base sm:text-lg leading-relaxed">
              Our strength lies in our artisans — the skilled hands behind every creation. With a team of 
              100+ craftspeople, designers, and experts, we ensure that each fabric tells a story of heritage, 
              sustainability, and craftsmanship. We provide fair-trade opportunities, a safe workspace, 
              and continuous skill development to empower our community.
            </p>
          </div>

          {/* About Founders */}
          <div className="mb-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center">About Founders</h2>
            <hr className="my-3" />
            <p className="text-justify text-base sm:text-lg leading-relaxed">
              <b>Shri Awdhesh Pandey</b> — a fourth-generation master artisan — is known for his expertise in 
              natural dyeing and hand block printing. With decades of experience, he has trained over 2000 
              students globally and taught at leading design institutes including NIFT Delhi, IICD Jaipur, 
              and Pearl Academy. His numerous awards, including the <b>National Award (2009)</b> and 
              <b> State Award (1986)</b>, reflect his contribution to Indian crafts.
            </p>

            <p className="text-justify text-base sm:text-lg leading-relaxed mt-4">
              <b>Khushiram Pandey</b> — the Creative Director and fifth-generation artisan — continues the 
              family’s legacy by integrating traditional printing with modern aesthetics. A graduate of 
              IICD Jaipur, he leads <b>“Awdhesh Kumar”</b> with a focus on design innovation, sustainability, 
              and global outreach.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
