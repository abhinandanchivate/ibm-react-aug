import React from "react";
import { Link } from "react-router-dom";

const Header = ({ appName }) => {
  return (
    <div>
      {" "}
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/">
            <i className="fas fa-code"></i> {appName}
          </Link>
        </h1>
        <ul>
          <li>
            <a href="profiles.html">Developers</a>
          </li>
          <li>
            <Link to="/auth/register">Register</Link>
          </li>
          <li>
            <Link to="/auth/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
