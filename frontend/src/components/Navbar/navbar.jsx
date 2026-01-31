import { Link } from "react-router-dom";
import FinPilotLogo from "../assets/Images/FinPilotLogo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg finpilot-navbar">
        <div className="container">
          {/* Brand Logo */}
          <Link
            className="navbar-brand text-white d-flex align-items-center"
            to="/"
          >
            <img
              src={FinPilotLogo}
              alt="FinPilot Logo"
              style={{ height: "40px", marginRight: "10px" }}
            />
            {/* <span>FinPilot</span> */}
          </Link>

          {/* Toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nvbCollapse"
            aria-controls="nvbCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Menu */}
          <div className="collapse navbar-collapse" id="nvbCollapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="fa fa-home fa-fw me-1"></i>Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  <i className="fa fa-th-list fa-fw me-1"></i>Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reports">
                  <i className="fa fa-info-circle fa-fw me-1"></i>Reports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  <i className="fa fa-phone fa-fw me-1"></i>Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  <i className="fa fa-user-plus fa-fw me-1"></i>Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
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
