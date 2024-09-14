import React from "react";

import "./Login.css";
import AuthForm from "./util/AuthForm";

import { redirect, useActionData } from "react-router-dom";

const Login = () => {
  const actionData = useActionData();

  return (
    <div className="todo__login-container">
      <AuthForm
        title="Login"
        error={actionData?.isError}
        errorMsg={actionData?.message}
      />
    </div>
  );
};

export default Login;

export async function action({ request, params }) {
  const data = await request.formData();
  const username = data.get("username");
  const password = data.get("password");

  const response = await fetch("http://localhost:8080/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username, password: password }),
  });

  const resData = await response.json();

  if (response.status !== 200) {
    return { isError: true, message: resData.error };
  }

  localStorage.setItem('token', resData.token);

  return redirect("/");
}
