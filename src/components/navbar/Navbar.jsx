import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="app__navbar">
      <h1 className="nav-mainheader font-head">NewsApp</h1>
      <Link to="/" className="signup-btn link font-head">
        Signup
      </Link>
      <Link to="/login" className="login-btn link font-head">
        Login
      </Link>
    </div>
  );
};

export default Navbar;
