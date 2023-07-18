import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import "./task.css";

const Task = ({ task, deleteTask, editTask }) => {
  return (
    <div className="task-container" key={task.id}>
      <ul>
        <li>
          <p>Title: {task.title}</p>
        </li>
        <li>
          <p>Description: {task.description}</p>
        </li>
        <li>
          <p>ID: {task.id}</p>
        </li>
      </ul>
      <div className="btns-container">
        <button
          className="btn delete-btn"
          title="Delete task"
          onClick={() => deleteTask(task.id)}
        >
          <FaTrash />
        </button>
        <button
          className="btn edit-btn"
          title="Edit task"
          onClick={() => editTask(task.id)}
        >
          <FaEdit />
        </button>
      </div>
    </div>
  );
};

export default Task;
