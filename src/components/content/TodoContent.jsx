import React from "react";

import { useState } from "react";

import "./TodoContent.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import { getAuthToken } from "../auth/util/auth";

export const TodoContent = () => {
  const [render, setRender] = useState(false);
  const [filter, setFilter] = useState("all");
  const [amount, setAmount] = useState();

  function reRender() {
    if (render === true) {
      setRender(false);
    } else {
      setRender(true);
    }
  }

  let content = false;

  let authToken = getAuthToken();

  if (authToken === null) {
    content = true;
  }

  function onFilterList(filterBy) {
    setFilter(filterBy);
  }

  function setUncompletedAmount(amount) {
    setAmount(amount);
  }

  return (
    <div className="todo__main-content-container">
      <div className="todo__main-content-background-img-container" />
      <div className="todo__main-content-content-container">
        <h1>T O D O</h1>
        {content ? (
          <h2>Log in to make use of this application's features.</h2>
        ) : (
          <>
            <TodoInput render={reRender} />
            <TodoList
              render={render}
              filter={filter}
              setAmount={setUncompletedAmount}
            />
            <TodoFilter filterBy={onFilterList} amount={amount} />
          </>
        )}
      </div>
    </div>
  );
};
