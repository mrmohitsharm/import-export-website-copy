import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { logoutUser } from "../../utils/auth";
import { useToast } from "../../context/ToastContext";

const Logout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();

  useEffect(() => {
    logoutUser();
    toast.info('Logged out successfully', 2000);
    const redirectTo = (location.state && location.state.from) ? location.state.from : "/";
    setTimeout(() => {
      navigate(redirectTo, { replace: true });
    }, 500);
  }, [navigate, location, toast]);

  return null;
};

export default Logout;


