import React from "react";
import { Link } from "react-router-dom";
import "../../styles/common.css";
import "../../styles/account.css";

const ProfilePage = () => {
  const current = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const name = current.name || current.email || "username";

  return (
    <div className="container" style={{ maxWidth: 560, padding: 20 }}>
      <h1 className="section-title" style={{ fontSize: "1.75rem", marginTop: 10 }}>Hello, {name}</h1>

      <div className="space-y-4" style={{ marginTop: 14 }}>
        <div className="card" style={{ padding: 16 }}>
          <h2 style={{ marginTop: 0 }}>MY ORDERS</h2>
          <Link to="/track-order" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span className="material-symbols-outlined">local_mall</span>
            Track Order
          </Link>
        </div>

        <div className="card" style={{ padding: 16 }}>
          <h2 style={{ marginTop: 0 }}>ACCOUNT SETTINGS</h2>
          <div className="space-y-2">
            <Link to="/account/profile" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span className="material-symbols-outlined">account_circle</span>
              Profile Information
            </Link>
            <Link to="/account/addresses" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span className="material-symbols-outlined">location_on</span>
              Manage Addresses
            </Link>
            <Link to="/account/pan" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span className="material-symbols-outlined">badge</span>
              PAN Card Information
            </Link>
          </div>
        </div>

        <div className="card" style={{ padding: 16 }}>
          <h2 style={{ marginTop: 0 }}>PAYMENTS</h2>
          <div className="space-y-2">
            <Link to="/gift-cards" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span className="material-symbols-outlined">card_giftcard</span>
              Gift Cards ₹0
            </Link>
            <Link to="/saved-upi" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span className="material-symbols-outlined">payments</span>
              Saved UPI
            </Link>
            <Link to="/saved-cards" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span className="material-symbols-outlined">credit_card</span>
              Saved Cards
            </Link>
          </div>
        </div>

        <Link to="/logout" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <span className="material-symbols-outlined">logout</span>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;


