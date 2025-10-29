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
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import ProfilePage from "./pages/account/ProfilePage";
import ProfileInformation from "./pages/account/ProfileInformation";
import ManageAddresses from "./pages/account/ManageAddresses";
import PANCardInformation from "./pages/account/PANCardInformation";
import Cart from "./pages/Cart";


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
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Alias for profile to support /profile path */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/profile" element={<ProfileInformation />} />
          <Route path="/account/addresses" element={<ManageAddresses />} />
          <Route path="/account/pan" element={<PANCardInformation />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;