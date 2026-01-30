import AuthSlider from "../components/authSlider";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <AuthSlider />

      <div style={{ flex: 1, padding: "3rem" }}>
        <h2>Register</h2>

        <form onSubmit={handleRegister}>
          <input placeholder="Name" />
          <br /><br />
          <input placeholder="Email" />
          <br /><br />
          <input type="password" placeholder="Password" />
          <br /><br />
          <button>Create Account</button>
        </form>

        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
