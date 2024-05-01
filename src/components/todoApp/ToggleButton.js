// ToggleButton.js
import React from "react";

const ToggleButton = ({ active, onClick, label }) => {
  return (
    <button
      className={`secondaryButton ${active ? "active" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
export default ToggleButton;
