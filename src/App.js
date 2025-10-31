import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
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
import Logout from "./pages/auth/Logout";
import ProfilePage from "./pages/account/ProfilePage";
import ProfileInformation from "./pages/account/ProfileInformation";
import ManageAddresses from "./pages/account/ManageAddresses";
import PANCardInformation from "./pages/account/PANCardInformation";
import Cart from "./pages/Cart";



function App() {
  const RequireAuth = ({ children }) => {
    const location = useLocation();
    let currentUser = null;
    try {
      currentUser = JSON.parse(localStorage.getItem("currentUser"));
    } catch (e) {
      currentUser = null;
    }
    if (!currentUser) {
      return <Navigate to="/login" replace state={{ from: location.pathname }} />;
    }
    return children;
  };
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
          <Route path="/logout" element={<Logout />} />
          {/* Protected account routes */}
          <Route path="/profile" element={<RequireAuth><ProfilePage /></RequireAuth>} />
          <Route path="/account" element={<RequireAuth><ProfilePage /></RequireAuth>} />
          <Route path="/account/profile" element={<RequireAuth><ProfileInformation /></RequireAuth>} />
          <Route path="/account/addresses" element={<RequireAuth><ManageAddresses /></RequireAuth>} />
          <Route path="/account/pan" element={<RequireAuth><PANCardInformation /></RequireAuth>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;