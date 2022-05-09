import React from "react";
import "./DropDownMenu.css";
export const DropDownMenu = ({ dropDownMenu }) => {
  return (
    <div className="drop-down-menu">
      {dropDownMenu.map((tag) => (
        <div>{tag}</div>
      ))}
    </div>
  );
};
