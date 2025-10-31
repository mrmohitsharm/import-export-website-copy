import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    try {
      localStorage.removeItem("currentUser");
    } catch (e) {}
    const redirectTo = (location.state && location.state.from) ? location.state.from : "/";
    navigate(redirectTo, { replace: true });
  }, [navigate, location]);

  return null;
};

export default Logout;


