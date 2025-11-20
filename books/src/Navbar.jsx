import React from "react";
import { Link } from "react-router-dom";
import "./Styles.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">📚 BookApp</div>

      <div className="navbar-links">
        <Link to="/home" className="nav-item">Home</Link>
        <Link to="/favorites" className="nav-item">Favorites</Link>
        <Link to="/login" className="nav-item">Login</Link> 
      </div>
    </nav>
  );
}

export default Navbar;
