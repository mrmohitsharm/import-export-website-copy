import React, { useState } from "react";
import { useToast } from "../../context/ToastContext";
import "../../styles/common.css";
import "../../styles/account.css";

const PANCardInformation = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [panNumber, setPanNumber] = useState("ABCDE1234F");
  const [error, setError] = useState("");
  const toast = useToast();

  const handleSave = () => {
    const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!panPattern.test(panNumber)) {
      const errorMsg = "Please enter a valid PAN number.";
      setError(errorMsg);
      toast.error(errorMsg, 3000);
      return;
    }
    setError("");
    setIsEditing(false);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem("userPAN", panNumber);
        toast.success('PAN card information saved successfully!', 3000);
      } catch (e) {
        toast.error('Failed to save PAN information', 3000);
      }
    }
  };

  return (
    <div className="container" style={{ maxWidth: 560, margin: "30px auto", padding: 16 }}>
      <div className="card" style={{ padding: 24, border: "1px solid #eee", borderRadius: 12, boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
        <h2 style={{ marginTop: 0 }}>PAN Card Information</h2>
        {!isEditing ? (
          <>
            <p className="text-muted-foreground">Your PAN Number:</p>
            <div style={{ fontWeight: 600 }}>{panNumber}</div>
            <button className="btn-outline" style={{ width: "100%", marginTop: 12 }} onClick={() => setIsEditing(true)}>Update PAN</button>
          </>
        ) : (
          <>
            <label htmlFor="pan" className="text-sm">PAN Number</label>
            <input id="pan" className={`form-input ${error ? "input-error" : ""}`} value={panNumber} onChange={(e) => setPanNumber(e.target.value.toUpperCase())} placeholder="ABCDE1234F" maxLength={10} />
            {error && <p style={{ color: "#dc2626" }}>{error}</p>}
            <div style={{ display: "flex", gap: 8 }}>
              <button className="btn-primary" style={{ width: "100%" }} onClick={handleSave}>Save</button>
              <button className="btn-outline" style={{ width: "100%" }} onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PANCardInformation;


