import React from "react";

import "./Login.css";
import AuthForm from "./util/AuthForm";

const Login = () => {
  return <div className="todo__login-container">
    <AuthForm title="Login" />
  </div>;
};

export default Login;
