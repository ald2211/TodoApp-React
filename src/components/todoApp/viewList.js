// TodoList
import React from "react";
import ToDoItem from "./Item";

const TodoList = ({ items, onDelete, onComplete, checkBox }) => {
  return (
    <div className="todo_list-area">
      {items.map((item, index) => (
        <ToDoItem
          key={index}
          item={item}
          index={index}
          onDelete={onDelete}
          onComplete={onComplete}
          checkBox={checkBox}
        />
      ))}
    </div>
  );
};
export default TodoList;
