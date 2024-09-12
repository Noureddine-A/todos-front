import React from "react";

import { Form } from "react-router-dom";

import "./AuthForm.css";

const AuthForm = ({ title, error, errorMsg }) => {
  let usernameInput = "todo__form-input-container-user-input";
  let passwordInput = "todo__form-input-container-password-input";

  if (errorMsg?.includes("password") && errorMsg?.includes("username")) {
    usernameInput = "todo__form-input-container-input-username-error";
    passwordInput = "todo__form-input-container-input-password-error";
  } else if (errorMsg?.includes("username")) {
    usernameInput = "todo__form-input-container-input-username-error";
  } else if (errorMsg?.includes("password")) {
    passwordInput = "todo__form-input-container-input-password-error";
  }

  return (
    <Form method="post" className="todo__form-container">
      <h1>{title}</h1>
      {error && <p>{errorMsg}</p>}
      <div className="todo__form-input-wrapper">
        <div className="todo__form-input-container">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className={usernameInput}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={passwordInput}
          />
          <div className="todo__form-button-container">
            <button>{title}</button>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default AuthForm;
