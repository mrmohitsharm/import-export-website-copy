import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { registerUser, setCurrentUser } from "../../utils/auth";
import { useToast } from "../../context/ToastContext";
import "../../styles/common.css";
import "../../styles/auth.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    
    // Validate all fields are filled
    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      setError("Please fill all fields.");
      return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    
    // Validate password match
    if (password !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }
    
    // Validate password length
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    
    setLoading(true);
    
    // Register the user
    const result = registerUser(name, email, password);
    
    setTimeout(() => {
      setLoading(false);
      
      if (result.success) {
        // Set current user and redirect
        setCurrentUser({ name: result.user.name, email: result.user.email });
        setSuccess(true);
        toast.success(`Account created successfully! Welcome, ${result.user.name}!`, 3000);
        const redirectTo = (location.state && location.state.from) ? location.state.from : "/account/profile";
        setTimeout(() => {
          navigate(redirectTo, { replace: true });
        }, 500);
      } else {
        const errorMsg = result.error || "Registration failed. Please try again.";
        setError(errorMsg);
        toast.error(errorMsg, 4000);
      }
    }, 800);
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-container">
        <div className="card">
          <h1 className="auth-title">Sign Up</h1>
          <p className="auth-subtitle">Create your account to get started</p>
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <input 
                id="name" 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Name"
                required 
                className="form-input" 
              />
            </div>
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
            <div className="form-group password-group">
              <input 
                id="confirmPassword" 
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                placeholder="Confirm Password"
                required 
                className="form-input" 
              />
              <span 
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <span className="material-symbols-outlined">
                  {showConfirmPassword ? "visibility_off" : "visibility"}
                </span>
              </span>
            </div>
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">Account created successfully! Redirecting...</div>}
            <button type="submit" className="btn-signin" disabled={loading}>
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
          <p className="auth-footer">
            Already have an account? <Link to="/login" className="auth-link">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;


