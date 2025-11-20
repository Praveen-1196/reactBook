import React, { useState } from "react";
import axios from "./axiosConfig";
import "./Styles.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "", email: "" });

  const handleRegister = () => {
    axios
      .post("https://book-ijqy.onrender.com/register/", form)
      .then(() => navigate("/login"));
  };

  return (
    <div className="form-wrapper">
      <div className="form-card">
        <h2 className="form-title">Create Account</h2>

        <input
          className="input-field"
          type="text"
          placeholder="Username"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <input
          className="input-field"
          type="email"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="input-field"
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="btn" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
