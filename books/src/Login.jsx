import React, { useState } from "react";
import axios from "./axiosConfig";
import "./styles.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await axios.post(
        "https://book-ijqy.onrender.com/login/",
        { username, password }
      );

      navigate("/home");
    } catch (err) {
      setMsg("Invalid username or password");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <input
        className="input"
        placeholder="Username"
        onChange={(e) => setUser(e.target.value)}
      />

      <input
        className="input"
        type="password"
        placeholder="Password"
        onChange={(e) => setPass(e.target.value)}
      />

      <button className="btn" onClick={handleLogin}>
        Login
      </button>

      <div className="message">{msg}</div>
    </div>
  );
}

export default Login;
