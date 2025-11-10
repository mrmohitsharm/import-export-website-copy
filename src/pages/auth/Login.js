import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { authenticateUser, setCurrentUser } from "../../utils/auth";
import { useToast } from "../../context/ToastContext";
import "../../styles/common.css";
import "../../styles/auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    
    // Validate fields
    if (!email.trim() || !password) {
      setError("Both email and password are required.");
      return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    
    setLoading(true);
    
    // Authenticate the user
    const result = authenticateUser(email, password);
    
    setTimeout(() => {
      setLoading(false);
      
      if (result.success) {
        // Set current user and redirect
        setCurrentUser(result.user);
        toast.success(`Welcome back, ${result.user.name || result.user.email}!`, 3000);
        const redirectTo = (location.state && location.state.from) ? location.state.from : "/account/profile";
        setTimeout(() => {
          navigate(redirectTo, { replace: true });
        }, 500);
      } else {
        const errorMsg = result.error || "Login failed. Please check your credentials.";
        setError(errorMsg);
        toast.error(errorMsg, 4000);
      }
    }, 800);
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-container">
        <div className="card">
          <h1 className="auth-title">Sign In</h1>
          <p className="auth-subtitle">Enter your credentials to continue</p>
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <input 
                id="email" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email"
                required 
                className="form-input" 
              />
            </div>
            <div className="form-group password-group">
              <input 
                id="password" 
                type={showPassword ? "text" : "password"}
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password"
                required 
                className="form-input" 
              />
              <span 
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                <span className="material-symbols-outlined">
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </span>
            </div>
            {error && <div className="error-message">{error}</div>}
            <div className="auth-options">
              <label className="remember-me">
                <input 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember me</span>
              </label>
              <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
            </div>
            <button type="submit" className="btn-signin" disabled={loading}>
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
          <p className="auth-footer">
            Don't have an account? <Link to="/signup" className="auth-link">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;


