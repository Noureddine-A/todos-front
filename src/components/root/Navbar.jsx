import React from "react";

import { Form, NavLink, useRouteLoaderData } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const loaderData = useRouteLoaderData("root");

  console.log(loaderData);

  return (
    <nav className="todo__navbar-container">
      <ul>
        {!loaderData && (
          <>
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
          </>
        )}
        {loaderData && (
          <Form method="post" action="auth/logout">
            <button className="todo__logout-button">Logout</button>
          </Form>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
