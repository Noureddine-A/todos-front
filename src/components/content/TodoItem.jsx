import React from 'react';

import './TodoItem.css';
import { useMutation } from '@tanstack/react-query';
import { updateTodo } from '../util/http';

const TodoItem = ({name, completed, id, render}) => {
  const {mutate} = useMutation({
    mutationFn: () => updateTodo(id),
    onSuccess: () => render()
  })

  function onButtonClicked() {
    mutate(id);
  }

  return (
    <div className="todo__list-item-container">
        <div className="todo__list-item-completed-container">
            <button onClick={onButtonClicked} className={completed ? "button-completed" : null}/>
        </div>
        <div className="todo__list-item-text-container">
            <p className={completed ? "item-completed" : "todo__list-item-text-text"}>{name}</p>
        </div>
    </div>
  )
}

export default TodoItem