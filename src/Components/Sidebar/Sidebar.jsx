import React from "react";
import "./Sidebar.css";
import { BsSearch } from "react-icons/bs";
import { BiArchiveIn, BiNote } from "react-icons/bi";
import { GoHome } from "react-icons/go";
import { VscTrash } from "react-icons/vsc";
export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="search">
        <BsSearch />
        <input className="search-input" placeholder="Search" />
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <GoHome size={22} />
          Home
        </li>
        <li className="sidebar-list-item">
          <BiNote size={22} />
          Add Notes
        </li>
        <li className="sidebar-list-item">
          <BiArchiveIn size={22} />
          Archive
        </li>
        <li className="sidebar-list-item">
          <VscTrash size={22} />
          Trash
        </li>
      </ul>

      <div className="filter-container">
        <div className="filter-heading">Filter By :</div>
        <label className="filter-item">
          <input type="checkbox" />
          Sort by Date
        </label>
        <div className="filter-heading">Priority :</div>
        <label className="filter-item">
          <input type="checkbox" />
          Low
        </label>
        <label className="filter-item">
          <input type="checkbox" />
          Medium
        </label>
        <label className="filter-item">
          <input type="checkbox" />
          High
        </label>
        <div className="filter-heading">Tags :</div>
        <label className="filter-item">
          <input type="checkbox" />
          Personal
        </label>
        <label className="filter-item">
          <input type="checkbox" />
          Office
        </label>
        <label className="filter-item">
          <input type="checkbox" />
          Team
        </label>
        <label className="filter-item">
          <input type="checkbox" />
          Project
        </label>
      </div>
    </div>
  );
};
