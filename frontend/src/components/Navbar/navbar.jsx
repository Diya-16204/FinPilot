import { Link } from "react-router-dom";
import FinPilotLogo from "../../assets/Images/FinPilotLogo.png";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

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
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard" onClick={handleClose}>
                  <i className="fa fa-th-list fa-fw me-1"></i>Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reports" onClick={handleClose}>
                  <i className="fa fa-info-circle fa-fw me-1"></i>Reports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={handleClose}>
                  <i className="fa fa-phone fa-fw me-1"></i>Contact
                </Link>
              </li>
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
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
