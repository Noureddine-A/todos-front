import React from "react";

import { useState } from "react";

import './TodoContent.css';
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export const TodoContent = () => {

  const [render, setRender] = useState(false);

  function reRender(added) {
    if(render === true) {
      setRender(false)
    } else {
      setRender(true);
    }
  }
 
  return <div className="todo__main-content-container">
    <div className="todo__main-content-background-img-container"/>
    <div className="todo__main-content-content-container">
        <h1>T O D O</h1>
        <TodoInput render={reRender}/>
        <TodoList render={render}/>
    </div>
  </div>;
};
