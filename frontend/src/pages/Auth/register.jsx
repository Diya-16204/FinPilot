import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./auth.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    // ✅ Confirm password check
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Registration successful! Please login.");
        navigate("/login"); // ✅ redirect to login page
      } else {
        setMessage(data.error || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong");
    }
  }

  return (
    <form className="auth-form" onSubmit={handleRegister}>
      <h2>Register</h2>
      <input
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <div className="terms-line">
        <input type="checkbox" id="terms" required />
        <label htmlFor="terms">Accept Terms & Conditions</label>
      </div>

      <button type="submit">Create Account</button>
      {message && <p className="error-msg">{message}</p>}
      <p>
        Already have an account?{" "}
        <div>
          <Link to="/login">Login</Link>
        </div>
      </p>
    </form>
  );
}

export default Register;
