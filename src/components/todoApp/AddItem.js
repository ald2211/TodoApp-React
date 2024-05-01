// addItem.js
import React, { useState } from "react";

const TodoInput = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = () => {
    if (title.trim() === "" || description.trim() === "") {
      return alert("Please fill each field");
    }
    onAddTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="todo-input">
      <div className="todo-input-item">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
        />
      </div>
      <div className="todo-input-item">
        <label>Description</label>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="todo-input-item">
        <button type="button" onClick={handleAddTask} className="primaryButton">
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
