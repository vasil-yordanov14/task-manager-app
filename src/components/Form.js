import React from "react";
import "./form.css";
import { handleDownload } from "../utils";

const Form = ({ handleSubmit, handleInputChange, title, description, id }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        name="title"
        value={title}
        onChange={handleInputChange}
      />
      <label htmlFor="description">Description</label>
      <input
        id="description"
        type="text"
        name="description"
        value={description}
        onChange={handleInputChange}
      />
      <button className="submit-btn" type="submit">
        {id ? "Edit Task" : "Add Task"}
      </button>
      <button
        className="download-btn"
        title="Download unfinished tasks."
        type="button"
        onClick={handleDownload}
      >
        Download
      </button>
    </form>
  );
};

export default Form;
