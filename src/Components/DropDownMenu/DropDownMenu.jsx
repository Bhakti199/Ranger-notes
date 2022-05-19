import React from "react";
import "./DropDownMenu.css";
import { useFilter } from "../../Context";
export const DropDownMenu = ({ dropDownMenu }) => {
  const { setFilterArray, filterArray } = useFilter();
  return (
    <select className="drop-down-menu">
      {dropDownMenu.map((typeOfNote, index) => (
        <option>{typeOfNote}</option>
      ))}
    </select>
  );
};
