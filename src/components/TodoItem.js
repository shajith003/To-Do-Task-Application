// src/components/TodoItem.js
import React from "react";

const TodoItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <li>
      <span
        onClick={() => toggleTask(task.id)}
        style={{ textDecoration: task.completed ? "line-through" : "none", cursor: "pointer" }}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
