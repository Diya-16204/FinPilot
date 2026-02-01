import { useNavigate, Link } from "react-router-dom";
import "./auth.css";

function Register() {
  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <form className="auth-form" onSubmit={handleRegister}>
      <h2>Register</h2>
      <input name="name" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />
      <input name="confirmPassword" type="password" placeholder="Confirm Password" required />
      <div className="terms-line">
        <input type="checkbox" id="terms" required />
        <label htmlFor="terms">Accept Terms & Conditions</label>
      </div>


      <button type="submit">Create Account</button>
      <p>
        Already have an account? <div><Link to="#" onClick={() => navigate("/")}>Login</Link></div>
      </p>
    </form>
  );
}

export default Register;
