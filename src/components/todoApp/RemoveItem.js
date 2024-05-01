// DeleteButton.js
import React from "react";
import { MdDelete } from "react-icons/md";

const DeleteButton = ({ onClick }) => {
  return <MdDelete className="icon" onClick={onClick} />;
};

export default DeleteButton;
