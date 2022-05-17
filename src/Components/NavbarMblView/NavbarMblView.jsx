import React from "react";
import "../Navbar/Navbar.css";
import "./NavbarMblView.css";
import { useLocation, Link } from "react-router-dom";
import { BsSearch, BsPerson } from "react-icons/bs";
import { useMainContext } from "../../Context";
import { BiArchiveIn, BiNote } from "react-icons/bi";
import { VscTrash } from "react-icons/vsc";
import { GiNotebook } from "react-icons/gi";
export const NavbarMblView = () => {
  const location = useLocation();
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
        <div className="search">
          <BsSearch />
          <input className="search-input" placeholder="Search" />
        </div>
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
          <div className="navbar-mbl-filter">
            <div>Tags</div>
            <div>Priority</div>
          </div>
        )}
      </div>
    </div>
  );
};
