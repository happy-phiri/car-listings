import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AccountLayout = () => {
  return (
    <div className="account container">
      <nav>
        <NavLink to="." end className="btn btn-outline-warning btn-small">
          Dashboard
        </NavLink>
        <NavLink to="cars" className="btn btn-outline-warning btn-small">
          Cars
        </NavLink>
        <NavLink to="listing" className="btn btn-outline-warning btn-small">
          List Car
        </NavLink>
        <NavLink to="reviews" className="btn btn-outline-warning btn-small">
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default AccountLayout;
