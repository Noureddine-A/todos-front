import React from "react";

import "./Root.css";

import Navbar from "./Navbar";

import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="todo__app-container">
      <Navbar />
      <div className="todo__content-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
