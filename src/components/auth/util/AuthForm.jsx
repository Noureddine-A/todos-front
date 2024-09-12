import React from 'react';

import { Form } from "react-router-dom";

import './AuthForm.css';

const AuthForm = ({title, error, errorMsg}) => {
  return (
    <Form method="post" className="todo__form-container">
        <h1>{title}</h1>
        {error && <p>{errorMsg}</p>}
        <div className="todo__form-input-wrapper">
          <div className="todo__form-input-container">
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <div className="todo__form-button-container">
                <button>{title}</button>
            </div>
          </div>
        </div>
      </Form>
  )
}

export default AuthForm