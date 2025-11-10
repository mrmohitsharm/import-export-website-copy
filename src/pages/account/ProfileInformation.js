import React, { useEffect, useState } from "react";
import { useToast } from "../../context/ToastContext";
import "../../styles/common.css";
import "../../styles/account.css";

const ProfileInformation = () => {
  const [currentUser, setCurrentUser] = useState("");
  const [profile, setProfile] = useState({ name: "", email: "", contact: "" });
  const toast = useToast();

  const loadUserProfile = (username) => {
    if (typeof window !== 'undefined') {
      try {
        const data = localStorage.getItem(`userProfile_${username}`);
        if (data) {
          const parsed = JSON.parse(data);
          setProfile({ ...parsed, name: username });
        } else {
          setProfile({ name: username, email: "", contact: "" });
        }
      } catch (e) {
        setProfile({ name: username, email: "", contact: "" });
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem("currentUser");
        const initialName = saved ? (JSON.parse(saved).name || JSON.parse(saved).email || "User") : "";
        setCurrentUser(initialName);
        loadUserProfile(initialName);
      } catch (e) {
        setCurrentUser("User");
      }
    }
  }, []);

  const handleUserChange = (e) => {
    const username = e.target.value;
    setCurrentUser(username);
    loadUserProfile(username);
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!profile.name.trim() || !profile.email.trim()) {
      toast.error('Please fill in all required fields', 3000);
      return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(profile.email)) {
      toast.error('Please enter a valid email address', 3000);
      return;
    }
    
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(`userProfile_${profile.name}`, JSON.stringify(profile));
        toast.success('Profile information saved successfully!', 3000);
      } catch (e) {
        toast.error('Failed to save profile information', 3000);
      }
    }
  };

  return (
    <div className="container" style={{ maxWidth: 720, margin: "30px auto", padding: 16 }}>
      <div className="card" style={{ border: "1px solid #e5e5e5", borderRadius: 12, boxShadow: "0 8px 22px rgba(0,0,0,0.06)" }}>
        <div style={{ padding: 20, borderBottom: "1px solid #eee", background: "#fafafa" }}>
          <label className="text-sm">Switch User</label>
          <input className="form-input" placeholder="Type user name" value={currentUser} onChange={handleUserChange} />
        </div>

        <div style={{ padding: 24 }}>
          <div className="space-y-4">
            <div>
              <label className="text-sm">Email</label>
              <input className="form-input" name="email" value={profile.email} onChange={handleChange} type="email" placeholder="Enter your email" />
            </div>
            <div>
              <label className="text-sm">Contact Number</label>
              <input className="form-input" name="contact" value={profile.contact} onChange={handleChange} type="tel" placeholder="Enter your contact number" />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button className="btn-primary" onClick={handleSave}>Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;


