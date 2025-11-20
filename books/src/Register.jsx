import React, { useState } from "react";
import axios from "./axiosConfig";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Register() {
  const [username, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axios.post(
        "https://book-ijqy.onrender.com/register/",
        { username, password, email }
      );

      setMsg("Registered successfully!");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setMsg(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="container">
      <h2>Create Account</h2>

      <input
        className="input"
        placeholder="Username"
        onChange={(e) => setUser(e.target.value)}
      />

      <input
        className="input"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="input"
        type="password"
        placeholder="Password"
        onChange={(e) => setPass(e.target.value)}
      />

      <button className="btn" onClick={handleRegister}>
        Register
      </button>

      <div className="message">{msg}</div>
    </div>
  );
}

export default Register;
