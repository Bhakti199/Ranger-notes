import React from "react";
import "../Navbar/Navbar.css";
import "./NavbarMblView.css";
import { useLocation, Link } from "react-router-dom";
import { BsSearch, BsPerson } from "react-icons/bs";
import { useMainContext, useFilter } from "../../Context";
import { BiArchiveIn, BiNote } from "react-icons/bi";
import { VscTrash } from "react-icons/vsc";
import { GiNotebook } from "react-icons/gi";
export const NavbarMblView = () => {
  const location = useLocation();
  const { setFilterByObj, filterByObj, tags, setTags } = useFilter();
  return (
    <div className="navbar-mbl">
      <div className="navbar-mbl-part-one">
        <Link to="/">
          <img
            className="navbar-logo"
            src="https://res.cloudinary.com/bhakti1801/image/upload/v1649919109/R_ezqx3h.png"
            alt="icon"
          />
        </Link>
      </div>
      <div className="navbar-mbl-part-two">
        <div className="navbar-icons-container navbar-mbl-icons">
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
        {location.pathname === "/note-taking-page" && (
          <>
            <select
              className="filter-select"
              onChange={(event) =>
                setFilterByObj((prevObj) => ({
                  ...prevObj,
                  tag: event.target.value,
                }))
              }
            >
              <option>All tags</option>
              <option>Personal</option>
              <option>Office</option>
              <option>Team</option>
              <option>Project</option>
            </select>

            <select
              className="filter-select"
              onChange={(event) =>
                setFilterByObj((prevObj) => ({
                  ...prevObj,
                  priority: event.target.value,
                }))
              }
            >
              {" "}
              <option>All priority</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>

            <select
              className="filter-select"
              onChange={(event) =>
                setFilterByObj((prevObj) => ({
                  ...prevObj,
                  sortBy: event.target.value,
                }))
              }
            >
              <option>Oldest</option>
              <option>Latest</option>
            </select>
          </>
        )}
      </div>
    </div>
  );
};
