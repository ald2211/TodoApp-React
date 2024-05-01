import React, { useEffect, useState } from "react";
import "./todo.css";
import TodoInput from "./AddItem";
import TodoList from "./viewList";
import ToggleButton from "./ToggleButton";

const ToDoApp = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    let savedData = JSON.parse(localStorage.getItem("todolist"));
    if (savedData) {
      setTodos(savedData);
    }

    let completedTask = JSON.parse(localStorage.getItem("completedList"));
    if (completedTask) {
      setCompleted(completedTask);
    }
  }, []);

  const addTask = (newTodoItem) => {
    let updatedTodoArray = [...todos, newTodoItem];
    setTodos(updatedTodoArray);
    localStorage.setItem("todolist", JSON.stringify(updatedTodoArray));
  };

  const deleteItem = (key) => {
    const changedList = todos.filter((item, index) => index !== key);
    setTodos(changedList);
    localStorage.setItem("todolist", JSON.stringify(changedList));
  };

  const completedItem = (key) => {
    let filteredItem = { ...todos[key] };
    let completedItems = [...completed, filteredItem];
    setCompleted(completedItems);
    localStorage.setItem("completedList", JSON.stringify(completedItems));
    deleteItem(key);
  };

  const deleteCompletedItem = (key) => {
    const changedList = completed.filter((item, index) => index !== key);
    setCompleted(changedList);
    localStorage.setItem("completedList", JSON.stringify(changedList));
  };

  return (
    <div>
      <h1>ToDo App</h1>

      <div className="todo-wrapper">
        <TodoInput onAddTask={addTask} />

        <div className="button-area">
          <ToggleButton
            active={!fullScreen}
            onClick={() => setFullScreen(false)}
            label="Todo"
          />
          <ToggleButton
            active={fullScreen}
            onClick={() => setFullScreen(true)}
            label="Completed"
          />
        </div>

        {fullScreen ? (
          <TodoList
            items={completed}
            onDelete={deleteCompletedItem}
            onComplete={false}
          />
        ) : (
          <TodoList
            items={todos}
            onDelete={deleteItem}
            onComplete={completedItem}
          />
        )}
      </div>
    </div>
  );
};

export default ToDoApp;
