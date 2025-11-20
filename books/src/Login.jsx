import React, { useState } from "react";
import axios from "./axiosConfig";
import "./Styles.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleLogin = () => {
    axios
      .post("https://book-ijqy.onrender.com/login/", form, {
        withCredentials: true,
      })
      .then(() => navigate("/home"));
  };

  return (
    <div className="form-wrapper">
      <div className="form-card">
        <h2 className="form-title">Login</h2>

        <input
          className="input-field"
          type="text"
          placeholder="Username"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <input
          className="input-field"
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
