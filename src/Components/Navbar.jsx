import React from "react";
import { Link } from "react-router-dom";

const navComponents = [
  "MoodBoard", "Code"
]

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/Code">Code</Link>
        </li>
        <li className="nav-item">
          <Link to="/MoodBoard">Mood Board</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;