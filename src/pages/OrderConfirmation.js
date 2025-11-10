import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/common.css";

const OrderConfirmation = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("orderConfirmation");
        if (saved) {
          setOrder(JSON.parse(saved));
          // Clear it after loading so refresh doesn't persist indefinitely
          localStorage.removeItem("orderConfirmation");
        }
      } catch {
        setOrder(null);
      }
    }
  }, []);

  return (
    <div className="container" style={{ maxWidth: 720, margin: "40px auto", padding: 16, textAlign: "center" }}>
      <div className="card" style={{ padding: 28, border: "1px solid #eee", borderRadius: 14, boxShadow: "0 10px 26px rgba(0,0,0,0.06)" }}>
        <h1 style={{ marginTop: 0, marginBottom: 8 }}>Confirm Order</h1>
        <p className="text-muted-foreground" style={{ marginBottom: 24 }}>Thank you for your purchase!</p>

        {order && order.items?.length > 0 ? (
          <>
            <div style={{ textAlign: "left", margin: "0 auto", maxWidth: 520 }}>
              <h3 style={{ marginTop: 0 }}>Order Summary</h3>
              <div className="divider" style={{ height: 1, background: "#eee", margin: "10px 0 16px" }}></div>
              {order.items.map((item) => {
                const price = typeof item.price === "number" ? item.price : parseFloat(String(item.price).replace(/[^0-9.]/g, "")) || 0;
                const qty = item.quantity || 1;
                return (
                  <div key={item.id} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <img src={item.image} alt={item.name} style={{ width: 56, height: 56, objectFit: "cover", borderRadius: 8, border: "1px solid #eee" }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600 }}>{item.name}</div>
                      <div className="text-muted-foreground" style={{ fontSize: 13 }}>Qty: {qty}</div>
                    </div>
                    <div style={{ fontWeight: 700 }}>${(price * qty).toFixed(2)}</div>
                  </div>
                );
              })}
              <div className="divider" style={{ height: 1, background: "#eee", margin: "10px 0 12px" }}></div>
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700 }}>
                <span>Total Paid</span>
                <span>${order.totalPaid.toFixed(2)}</span>
              </div>
            </div>
          </>
        ) : (
          <p className="text-muted-foreground" style={{ marginBottom: 16 }}>Your order has been placed.</p>
        )}

        <div style={{ marginTop: 28, display: "flex", justifyContent: "center", gap: 12 }}>
          <Link to="/" className="btn-primary">Continue Shopping</Link>
          <Link to="/account/orders" className="btn-outline">View Orders</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;


