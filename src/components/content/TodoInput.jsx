import React from "react";

import { useQueryClient } from "@tanstack/react-query";

import { useRef } from "react";

import { addTodo } from "../util/http";

import "./TodoInput.css";

const TodoInput = ({render}) => {
  const todoRef = useRef();

  const queryClient = useQueryClient();

  function onEnterPressed(event) {
    if (event.key === "Enter") {
      const added = addTodo({
        todo: todoRef.current.value,
        completed: false,
      });

      if(added) {
        queryClient.invalidateQueries(["todos"]);
        render(added);
        event.target.value = "";
      }
      
    }
  }

  function onCompletedClicked() {
    const added = addTodo({
      todo: todoRef.current.value,
      completed: true,
    });
    if(added) {
      queryClient.invalidateQueries(["todos"]);
      render(added);
      todoRef.current.value = "";
    }
  }

  return (
    <div method="post" className="todo__input-container">
      <div className="todo__input-complete-button-container">
        <button onClick={onCompletedClicked} />
      </div>
      <div className="todo__input-input-container">
        <input
          ref={todoRef}
          onKeyDown={onEnterPressed}
          type="text"
          name="todo"
          placeholder="Create a new todo.."
        />
      </div>
    </div>
  );
};

export default TodoInput;
