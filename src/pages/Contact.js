import React, { useState } from 'react';
import { useToast } from '../context/ToastContext';
import '../styles/contact.css';
import '../styles/common.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all required fields', 3000);
      return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address', 3000);
      return;
    }
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    toast.success("Message sent! We'll get back to you as soon as possible.", 4000);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="contact-hero-banner">
        <img src="/images/hero-contact.png" className="contact-banner-image" alt="Contact us" />
        <div className="contact-banner-overlay">
          <div className="contact-banner-content">
            <h1 className="contact-banner-title">Get in Touch</h1>
            <p className="contact-banner-desc">
              Have questions about our products or services? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="slide-in-left">
              <div className="contact-form-container p-6">
                <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="Enter your email address"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="What is this about?"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        className="form-textarea"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>
                    
                    <button 
                      type="submit" 
                      className="submit-button"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="slide-in-right">
              <div className="contact-info-container">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  
                  
                  <ContactInfoItem icon="📞">
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">
                      +91 98765 43210<br />
                      +91 12345 67890
                    </p>
                  </ContactInfoItem>
                  
                  <ContactInfoItem icon="✉️">
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">
                      info@globalexports.com<br />
                      sales@globalexports.com
                    </p>
                  </ContactInfoItem>
                  
                  <ContactInfoItem icon="🕒">
                    <h3 className="font-medium">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                  </ContactInfoItem>
                </div>
                
                <div className="social-links-container">
                  <h3 className="social-links-title">Connect With Us</h3>
                  <div className="social-buttons">
                    <SocialButton 
                      icon={
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      } 
                      href="https://facebook.com" 
                    />
                    <SocialButton 
                      icon={
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                        </svg>
                      } 
                      href="https://instagram.com" 
                    />
                    <SocialButton 
                      icon={
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      } 
                      href="https://twitter.com" 
                    />
                    <SocialButton 
                      icon={
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      } 
                      href="https://linkedin.com" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
     
    </div>
  );
};

// Helper component for contact info items
const ContactInfoItem = ({ icon, children }) => {
  return (
    <div className="contact-info-item">
      <div className="contact-icon">
        {icon}
      </div>
      <div className="contact-details">{children}</div>
    </div>
  );
};

// Helper component for social buttons
const SocialButton = ({ icon, href }) => {
  return (
    <a 
      href={href}
      className="social-button"
    >
      <span>{icon}</span>
    </a>
  );
};

export default Contact;
