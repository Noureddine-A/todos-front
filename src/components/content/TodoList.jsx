import React from "react";

import { useQuery } from "@tanstack/react-query";

import { useState, useEffect } from "react";

import "./TodoList.css";
import TodoItem from "./TodoItem";
import { retrieveAllTodos } from "../util/http";

const TodoList = ({ render, filter, setAmount }) => {
  const { data, refetch } = useQuery({
    queryKey: ["todos"],
    queryFn: retrieveAllTodos,
  });

  const [reEvaluate, setReevaluate] = useState(false);

  let filteredList = data;

  if (filter !== "all") {
    filteredList = data.filter((todo) => {
      if (filter === "active") {
        return todo.completed === false;
      }

      return todo.completed === true;
    });
  }

  function countUncompletedTasks() {
    if(data) {
      let uncompletedTasks = data.filter(todo => {
        return todo.completed === false;
      })
      return uncompletedTasks.length;
    }
  }

  setAmount(countUncompletedTasks);

  function onItemUpdated() {
    reEvaluateTodoList();
  }

  useEffect(() => {
    reEvaluateTodoList();
  }, [render]);

  function reEvaluateTodoList() {
    if (reEvaluate === false) {
      refetch();
      setReevaluate(true);
    } else {
      refetch();
      setReevaluate(false);
    }
  }

  return (
    <div className="todo__list-container">
      {data &&
        filteredList.map((d) => {
          return (
            <TodoItem
              key={d._id}
              name={d.name}
              completed={d.completed}
              id={d._id}
              render={onItemUpdated}
            />
          );
        })}
    </div>
  );
};

export default TodoList;
