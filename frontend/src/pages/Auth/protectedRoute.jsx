import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const guest = localStorage.getItem("guest");

  // ✅ Agar na login hai na guest → block access
  if (!token && !guest) {
    alert("You are not logged in. Please login or enter as guest.");
    return <Navigate to="/" replace />;
  }

  // ✅ Agar login/guest hai → allow access
  return children;
};

export default ProtectedRoute;
