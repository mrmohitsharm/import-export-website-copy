import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "../context/ToastContext";
import "../styles/footer.css";
import "../styles/common.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const [fbName, setFbName] = useState("");
  const [fbEmail, setFbEmail] = useState("");
  const [fbMessage, setFbMessage] = useState("");

  const toast = useToast();

  // SUBSCRIBE
  const handleSubscribe = (e) => {
    e.preventDefault();

    const storedEmails =
      JSON.parse(localStorage.getItem("newsletterEmails")) || [];

    if (storedEmails.includes(email)) {
      toast.info("Already subscribed!");
      return setEmail("");
    }

    storedEmails.push(email);
    localStorage.setItem("newsletterEmails", JSON.stringify(storedEmails));

    toast.success("Subscribed successfully!");
    setEmail("");
  };

  // FEEDBACK
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      name: fbName,
      email: fbEmail,
      message: fbMessage,
      date: new Date().toLocaleString(),
    };

    const storedFeedback =
      JSON.parse(localStorage.getItem("userFeedback")) || [];

    storedFeedback.push(newFeedback);
    localStorage.setItem("userFeedback", JSON.stringify(storedFeedback));

    toast.success("Feedback submitted!");

    setFbName("");
    setFbEmail("");
    setFbMessage("");
  };

  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Company Info */}
        <div className="footer-section">
          <h3>Global Exports</h3>
          <p>Premium handcrafted treasures from India to the world.</p>
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

        {/* Categories */}
        <div className="footer-section">
          <h3>Products</h3>
          <ul className="footer-links">
            <li><Link to="/textiles">Textiles</Link></li>
            <li><Link to="/jewellery">Jewellery</Link></li>
          </ul>
        </div>

        {/* Newsletter + Feedback SIDE BY SIDE */}
        <div className="footer-side-container">

          {/* NEWSLETTER */}
          <div className="footer-section newsletter-box">
            <h3>Newsletter</h3>
            <p>Subscribe for updates & offers.</p>

            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                placeholder="Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          </div>

          {/* FEEDBACK BESIDE NEWSLETTER */}
          <div className="footer-section feedback-box">
            <h3>Feedback</h3>
            <p>Your suggestions help us improve!</p>

            <form onSubmit={handleFeedbackSubmit} className="feedback-form">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={fbName}
                onChange={(e) => setFbName(e.target.value)}
                className="feedback-input"
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                value={fbEmail}
                onChange={(e) => setFbEmail(e.target.value)}
                className="feedback-input"
              />

              <textarea
                placeholder="Your Message"
                required
                rows="3"
                value={fbMessage}
                onChange={(e) => setFbMessage(e.target.value)}
                className="feedback-textarea"
              ></textarea>

              <button type="submit" className="feedback-button">
                Send
              </button>
            </form>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Global Exports • Developed by Goklyn Pvt. Ltd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
