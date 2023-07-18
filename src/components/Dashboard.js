import React, { useEffect, useState } from "react";
import "./dashboard.css";
import Form from "./Form";
import Task from "./Task";
import { getTasksFromLocalStorage, handleDownload } from "../utils";

const Dashboard = () => {
  const [tasks, setTasks] = useState(getTasksFromLocalStorage);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
  });

  const { id, title, description } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      // Editing an existing task
      const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, title, description } : task
      );
      setTasks(updatedTasks);
      setFormData({ id: "", title: "", description: "" });
    } else {
      // Adding a new task
      const newTask = {
        id: new Date().getTime().toString(),
        title,
        description,
      };
      if (title && description) {
        setTasks([...tasks, newTask]);
        setFormData({ id: "", title: "", description: "" });
      } else {
        alert("Please provide title and description!");
      }
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const editTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setFormData({
      id: taskToEdit.id,
      title: taskToEdit.title,
      description: taskToEdit.description,
    });
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <div className="dashboard">
        <div className="form-container">
          <Form
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            title={title}
            description={description}
            id={id}
          />
        </div>
        <div className="list-container">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <Task task={task} editTask={editTask} deleteTask={deleteTask} />
            ))
          ) : (
            <h1>You have no tasks added yet.</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
