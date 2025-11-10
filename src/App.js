import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { getCurrentUser } from "./utils/auth";
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
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import BanarasiSilkSaree from "./pages/BanarasiSilkSaree";
import SearchResults from "./pages/SearchResults";
import Wishlist from "./pages/Wishlist";
import OrderConfirmation from "./pages/OrderConfirmation";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { BuyNowProvider } from "./context/BuyNowContext";
import { ToastProvider } from "./context/ToastContext";
import "./styles/toast.css";



function App() {
  const RequireAuth = ({ children }) => {
    const location = useLocation();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      if (typeof window !== 'undefined') {
        try {
          // Use auth utility to validate user is registered
          const currentUser = getCurrentUser();
          setIsAuthenticated(!!currentUser);
        } catch (e) {
          setIsAuthenticated(false);
        }
      }
      setIsLoading(false);
    }, []);

    if (isLoading) {
      return null; // or a loading spinner
    }

    if (!isAuthenticated) {
      return <Navigate to="/login" replace state={{ from: location.pathname }} />;
    }
    return children;
  };
  return (
    <ToastProvider>
      <CartProvider>
        <WishlistProvider>
          <BuyNowProvider>
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
          <Route path="/search" element={<SearchResults />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order/confirmation" element={<OrderConfirmation />} />
          <Route path="/product/banarasi-silk-saree" element={<BanarasiSilkSaree />} />
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
          </BuyNowProvider>
        </WishlistProvider>
      </CartProvider>
    </ToastProvider>
  );
}

export default App;