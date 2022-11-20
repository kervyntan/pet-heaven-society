import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
                <div className="container">
      <ul className="nav-list">
        <li className="nav-list-item nav-home">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-list-item nav-adoption">
          <Link to="/adoption">Adoption</Link>
        </li>
        <li className="nav-list-item nav-release">
          <Link to="/release">Release</Link>
        </li>
        <li className="nav-list-item nav-register">
          <Link to="/register">Register</Link>
        </li>
        <li className="nav-list-item nav-login">
          <Link to="/login">Login</Link>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Navbar;
