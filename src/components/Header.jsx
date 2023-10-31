import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container header">
        <Link className="link" to="/">
          <img
            className="logo"
            src="../car Quest-logos_transparent.png"
            alt=""
          />
        </Link>

        <nav>
          <NavLink className="link" to="/about">
            About
          </NavLink>
          <NavLink className="link" to="/cars">
            Cars
          </NavLink>
          <NavLink className="link" to="/account">
            Account
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
