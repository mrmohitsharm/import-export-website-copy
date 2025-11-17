import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { logoutUser } from "../../utils/auth";
import { useToast } from "../../context/ToastContext";

const Logout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();
  const executedRef = useRef(false); // Prevent double execution

  useEffect(() => {
    // Prevent running twice in React Strict Mode
    if (executedRef.current) return;
    executedRef.current = true;

    // logout
    logoutUser();
    toast.info("Logged out successfully", 2000);

    // redirect
    const redirectTo = location.state?.from || "/";
    setTimeout(() => {
      navigate(redirectTo, { replace: true });
    }, 500);
  },[] );

  return null;
};

export default Logout;
