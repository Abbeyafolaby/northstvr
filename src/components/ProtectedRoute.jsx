import { Navigate } from "react-router-dom";
import { User } from "../context/UserContext";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const { user } = User();

  if (!user) {
    toast.warn("oops! You've not logged in, sign up");
    return <Navigate to="/register"  />;
  }
  return children;
};

export default ProtectedRoute;