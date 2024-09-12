import React from "react";

import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="todo__navbar-container">
      <ul>
        <NavLink
          to="auth/signup"
          className={({ isActive }) => [
            isActive
              ? "todo__navbar-list-item-active"
              : "todo__navbar-list-item",
          ]}
        >
          Sign Up
        </NavLink>
        <NavLink
          to="auth/login"
          className={({ isActive }) => [
            isActive
              ? "todo__navbar-list-item-active"
              : "todo__navbar-list-item",
          ]}
        >
          Log In
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
