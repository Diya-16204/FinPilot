import { Link, useNavigate } from "react-router-dom";
import FinPilotLogo from "../../assets/Images/FinPilotLogo.png";
import "./navbar.css";
import { useState } from "react";

const Navbar = ({ onLogin, onRegister, onGuest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // ✅ Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("guest");
    alert("You have been logged out.");
    navigate("/");
  };

  // ✅ Check login/guest state
  const token = localStorage.getItem("token");
  const guest = localStorage.getItem("guest");
  const isAuthenticated = token || guest;

  return (
    <header>
      <nav className="navbar navbar-expand-lg finpilot-navbar fixed-top">
        <div className="container">
          {/* Brand Logo */}
          <Link
            className="navbar-brand text-white d-flex align-items-center"
            to="/"
            onClick={handleClose}
          >
            <img
              src={FinPilotLogo}
              alt="FinPilot Logo"
              style={{ height: "40px", marginRight: "10px" }}
            />
          </Link>

          {/* Toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Menu */}
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="nvbCollapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={handleClose}>
                  <i className="fa fa-home fa-fw me-1"></i>Home
                </Link>
              </li>

              {/* ✅ Dashboard only if logged in/guest */}
              {isAuthenticated && (
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard" onClick={handleClose}>
                    <i className="fa fa-th-list fa-fw me-1"></i>Dashboard
                  </Link>
                </li>
              )}

              {/* Reports page */}
              {isAuthenticated && (
                <li className="nav-item">
                  <Link className="nav-link" to="/view-expenses" onClick={handleClose}>
                    <i className="fa fa-info-circle fa-fw me-1"></i>Reports
                  </Link>
                </li>
              )}

              {/* Export Reports */}
              {isAuthenticated && (
                <li className="nav-item">
                  <Link className="nav-link" to="/export-reports" onClick={handleClose}>
                    <i className="fa fa-download fa-fw me-1"></i>Export Reports
                  </Link>
                </li>
              )}

              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={handleClose}>
                  <i className="fa fa-phone fa-fw me-1"></i>Contact
                </Link>
              </li>

              {/* ✅ Auth buttons */}
              {!isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register" onClick={handleClose}>
                      <i className="fa fa-user-plus fa-fw me-1"></i>Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login" onClick={handleClose}>
                      <i className="fa fa-sign-in fa-fw me-1"></i>Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link btn btn-link" onClick={onGuest}>
                      <i className="fa fa-user fa-fw me-1"></i>Enter as Guest
                    </button>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={handleLogout}>
                    <i className="fa fa-sign-out fa-fw me-1"></i>Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
