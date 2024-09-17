import React from "react";
import { useState } from "react";

import "./TodoFilter.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeCompletedTodos } from "../util/http";

const TodoFilter = ({ filterBy, amount }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: removeCompletedTodos,
    onSuccess: queryClient.invalidateQueries(["todos"]),
  });
  const [filter, setFilter] = useState("all");

  function showOpenTasks() {
    filterBy("active");
    setFilter("active");
  }

  function showCompletedTasks() {
    filterBy("completed");
    setFilter("completed");
  }

  function showAllTasks() {
    filterBy("all");
    setFilter("all");
  }

  function removeCompletedTasks() {
    mutate();
  }

  return (
    <div className="todo__filter-container">
      <div className="todo__items-left-container">
        <p>{amount} items left</p>
      </div>
      <div className="todo__filter-buttons-container">
        <button
          className={filter === "all" ? "filter-buttonactive" : "filter-button"}
          onClick={showAllTasks}
        >
          All
        </button>
        <button
          className={
            filter === "active" ? "filter-buttonactive" : "filter-button"
          }
          onClick={showOpenTasks}
        >
          Active
        </button>
        <button
          className={
            filter === "completed" ? "filter-buttonactive" : "filter-button"
          }
          onClick={showCompletedTasks}
        >
          Completed
        </button>
      </div>
      <div className="todo__filter-clear-container">
        <button onClick={removeCompletedTasks}>Clear completed</button>
      </div>
    </div>
  );
};

export default TodoFilter;
