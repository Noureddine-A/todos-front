import React from "react"

import { useQuery} from "@tanstack/react-query";

import {useState, useEffect} from 'react';

import "./TodoList.css";
import TodoItem from "./TodoItem";
import { retrieveAllTodos } from "../util/http";

const TodoList = ({render}) => {
  const { data, refetch } = useQuery({
    queryKey: ["todos"],
    queryFn: retrieveAllTodos,
  });

  const [reEvaluate, setReevaluate] = useState(false);

  function onItemUpdated() {
    reEvaluateTodoList();
  }

  useEffect(() => {
   reEvaluateTodoList();
  }, [render]);

  function reEvaluateTodoList() {
    if(reEvaluate === false) {
      refetch()
      setReevaluate(true)
    } else {
      refetch()
      setReevaluate(false)
    }
  }

  return (
    <div className="todo__list-container">
      {data &&
        data.map((d) => {
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
