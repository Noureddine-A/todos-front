import React from "react";

import "./SignUp.css";

import AuthForm from "./util/AuthForm";
import { redirect, useActionData } from "react-router-dom";

const SignUp = () => {
  const actionData = useActionData();

  return (
    <div className="todo__sign-up-container">
      <AuthForm
        title="Sign Up"
        action="signup"
        error={actionData?.isError}
        errorMsg={actionData?.message}
      />
    </div>
  );
};

export default SignUp;

export async function action({ request, params }) {
  const data = await request.formData();

  const username = data.get("username");
  const password = data.get("password");

  const checkedInput = validateInput(username, password);

  if (checkedInput.isError === true) {
    return { isError: true, message: checkedInput.message };
  }

  const response = await fetch("http://localhost:8080/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  const resData = await response.json();

  if (response.status !== 200) {
    return { isError: true, message: resData.error };
  }

  if (!response.ok) {
    return { isError: true, message: "Didn't work" };
  }

  return redirect("/auth/login");
}

export function validateInput(username, password) {
  let error = {};

  if (password.trim().length < 5 && username.trim().length < 5) {
    error = {
      isError: true,
      message:
        "Both the password and username needs to be at least 6 characters long."
    };
  } else if (password.trim().length < 5) {
    error = {
      isError: true,
      message:
        "The password needs to be at least 6 characters to be deemed valid.",
    }
  } else if( username.trim().length < 5) {
    error = {
      isError: true,
      message: "The username needs to be at least 6 characters to be deemed valid."
    }
  } else {
    error = {
      isError: false
    }
  }

  return error;
}
