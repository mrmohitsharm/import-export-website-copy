import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/common.css";
import "../../styles/auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("currentUser", JSON.stringify({ email }));
      setLoading(false);
      navigate("/account/profile");
    }, 800);
  };

  return (
    <div className="container auth-container">
      <div className="card" style={{ padding: 24 }}>
        <h1 style={{ marginTop: 0, textAlign: "center" }}>Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="form-input" />
          </div>
          {error && <div style={{ color: "#dc2626", textAlign: "center" }}>{error}</div>}
          <button type="submit" className="btn-primary" disabled={loading} style={{ width: "100%" }}>
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>
        <p style={{ textAlign: "center", marginTop: 12 }}>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;


