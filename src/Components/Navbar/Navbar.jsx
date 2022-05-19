import "./Navbar.css";
import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { BsSearch, BsPerson } from "react-icons/bs";
import { useMainContext, useFilter } from "../../Context";
import { BiArchiveIn, BiNote } from "react-icons/bi";
import { VscTrash } from "react-icons/vsc";
import { GiNotebook } from "react-icons/gi";

export const Navbar = () => {
  const location = useLocation();
  const { setFilterByObj, filterByObj, tags, setTags } = useFilter();
  const [showTags, setShowTags] = useState(false);
  const [showPriority, setShowPriority] = useState(false);
  return (
    <div className="navbar">
      <Link to="/">
        <img
          className="navbar-logo"
          src="https://res.cloudinary.com/bhakti1801/image/upload/v1649919109/R_ezqx3h.png"
          alt="icon"
        />
      </Link>
      {location.pathname === "/note-taking-page" && (
        <>
          <select
            onChange={(event) =>
              setFilterByObj((prevObj) => ({
                ...prevObj,
                tag: event.target.value,
              }))
            }
          >
            {tags.map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </select>

          <select
            onChange={(event) =>
              setFilterByObj((prevObj) => ({
                ...prevObj,
                priority: event.target.value,
              }))
            }
          >
            {["All priority", "low", "medium", "high"].map(
              (priority, index) => (
                <option key={index}>{priority}</option>
              )
            )}
          </select>
        </>
      )}
      {location.pathname != "/" &&
        location.pathname != "/login" &&
        location.pathname != "/sign-up" && (
          <div className="search">
            <BsSearch />
            <input className="search-input" placeholder="Search" />
          </div>
        )}

      <div className="navbar-icons-container">
        <Link to="/login" className="navbar-icon">
          <BsPerson size={25} title="login" />
        </Link>
        <Link to="/note-taking-page" className="navbar-icon">
          <GiNotebook size={25} title="add note" />
        </Link>
        <Link to="/archives" className="navbar-icon">
          <BiArchiveIn size={25} title="archive" />
        </Link>
        <Link to="/trash" className="navbar-icon">
          <VscTrash size={25} title="trash" />
        </Link>
      </div>
    </div>
  );
};
