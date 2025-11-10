import React, { useState, useEffect } from "react";
import { useToast } from "../../context/ToastContext";
import "../../styles/common.css";
import "../../styles/account.css";

const ManageAddresses = () => {
  const toast = useToast();
  const [addresses, setAddresses] = useState([]);
  const [form, setForm] = useState({ label: "", address: "" });
  const [editId, setEditId] = useState(null);

  // Load addresses from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
        const username = currentUser.name || currentUser.email || "User";
        const savedAddresses = localStorage.getItem(`addresses_${username}`);
        if (savedAddresses) {
          setAddresses(JSON.parse(savedAddresses));
        } else {
          // Default address if none exists
          setAddresses([{ id: 1, label: "Home", address: "123 Main St, New Delhi, India" }]);
        }
      } catch (e) {
        setAddresses([{ id: 1, label: "Home", address: "123 Main St, New Delhi, India" }]);
      }
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddOrEdit = () => {
    if (!form.label.trim() || !form.address.trim()) {
      toast.error('Please fill in both label and address', 3000);
      return;
    }
    
    if (editId !== null) {
      setAddresses((prev) => {
        const updated = prev.map((item) => (item.id === editId ? { ...item, ...form } : item));
        saveAddresses(updated);
        return updated;
      });
      setEditId(null);
      toast.success('Address updated successfully!', 2500);
    } else {
      const newAddress = { id: Date.now(), label: form.label.trim(), address: form.address.trim() };
      const updated = [...addresses, newAddress];
      setAddresses(updated);
      saveAddresses(updated);
      toast.success('Address added successfully!', 2500);
    }
    setForm({ label: "", address: "" });
  };

  const saveAddresses = (addressList) => {
    if (typeof window !== 'undefined') {
      try {
        const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
        const username = currentUser.name || currentUser.email || "User";
        localStorage.setItem(`addresses_${username}`, JSON.stringify(addressList));
      } catch (e) {
        console.error('Error saving addresses:', e);
      }
    }
  };

  const handleEdit = (id) => {
    const addr = addresses.find((a) => a.id === id);
    if (addr) {
      setForm({ label: addr.label, address: addr.address });
      setEditId(id);
      toast.info('Editing address...', 1500);
    }
  };

  const handleDelete = (id) => {
    const address = addresses.find((a) => a.id === id);
    const updated = addresses.filter((a) => a.id !== id);
    setAddresses(updated);
    saveAddresses(updated);
    toast.info(`${address?.label || 'Address'} deleted`, 2000);
    if (editId === id) {
      setForm({ label: "", address: "" });
      setEditId(null);
    }
  };

  return (
    <div className="container" style={{ maxWidth: 720, margin: "30px auto", padding: 16 }}>
      <div className="card" style={{ padding: 24, border: "1px solid #eee", borderRadius: 12, boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
        <h2 style={{ marginTop: 0 }}>Manage Addresses</h2>
        <div className="space-y-3">
          {addresses.length === 0 ? (
            <p className="text-muted-foreground">You have no addresses. Add a new one below.</p>
          ) : (
            addresses.map((item) => (
              <div key={item.id} className="card" style={{ padding: 12, border: "1px solid #eee", borderRadius: 10, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <p className="font-medium" style={{ margin: 0 }}>{item.label}</p>
                  <p className="text-muted-foreground" style={{ margin: 0 }}>{item.address}</p>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button className="btn-outline" onClick={() => handleEdit(item.id)}><span className="material-symbols-outlined">edit</span></button>
                  <button className="btn-outline" onClick={() => handleDelete(item.id)}><span className="material-symbols-outlined">delete</span></button>
                </div>
              </div>
            ))
          )}

          <div style={{ borderTop: "1px solid #eee", paddingTop: 16, marginTop: 16 }} className="space-y-2">
            <h3 style={{ margin: 0 }}>{editId ? "Edit Address" : "Add New Address"}</h3>
            <input className="form-input" placeholder="Label (e.g. Home, Office)" name="label" value={form.label} onChange={handleChange} />
            <textarea className="form-textarea" placeholder="Full Address" name="address" value={form.address} onChange={handleChange} />
            <button className="btn-primary" onClick={handleAddOrEdit}>{editId ? "Update Address" : "Add Address"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAddresses;


