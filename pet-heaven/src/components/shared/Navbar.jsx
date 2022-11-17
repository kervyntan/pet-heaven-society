import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <ul className="nav-list">
        <li className="nav-list-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/adoption">Adoption</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/release">Release</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/register">Register</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
