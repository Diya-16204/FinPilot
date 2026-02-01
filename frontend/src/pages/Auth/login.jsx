import { useNavigate, Link } from "react-router-dom";
import "./auth.css";

function Login() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    localStorage.setItem("finpilot-auth", "true");
    navigate("/dashboard");
  }

  return (
    <form className="auth-form" onSubmit={handleLogin}>
      <h2>Login</h2>
      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
      <p>
        Don’t have an account? <div><Link to="#" onClick={() => navigate("/")}>Register Now</Link></div>
      </p>
    </form>
  );
}

export default Login;
