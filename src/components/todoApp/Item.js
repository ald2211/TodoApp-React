// ToDoItem.js
import React from "react";
import { MdDelete } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";

const ToDoItem = ({ item, index, onDelete, onComplete }) => {
  return (
    <div className="todo_list-item">
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
      <div>
        <MdDelete className="icon" onClick={() => onDelete(index)} />
        {onComplete && (
          <FaRegCircleCheck
            className="check-icon"
            onClick={() => onComplete(index)}
          />
        )}
      </div>
    </div>
  );
};

export default ToDoItem;
