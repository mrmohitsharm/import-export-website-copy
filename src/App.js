import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/common.css";

// Import components
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Textiles from "./pages/Textiles";
import Jewellery from "./pages/Jewellery";


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/textiles" element={<Textiles />} />
          <Route path="/jewellery" element={<Jewellery />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;