import AuthSlider from "../components/blogSlider";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    localStorage.setItem("finpilot-auth", "true");
    navigate("/dashboard");
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <AuthSlider />

      <div style={{ flex: 1, padding: "3rem" }}>
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <input placeholder="Email" />
          <br /><br />
          <input type="password" placeholder="Password" />
          <br /><br />
          <button>Login</button>
        </form>

        <p>
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
