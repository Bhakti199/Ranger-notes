import "./Navbar.css";
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { VscMenu } from "react-icons/vsc";
import { useMainContext } from "../../Context";
export const Navbar = () => {
  const location = useLocation();
  const { setOpenSidebar, openSidebar } = useMainContext();
  return (
    <div className="navbar">
      {location.pathname === "/note-taking-page" && (
        <VscMenu
          size={24}
          className="hamburgur-display"
          onClick={() => setOpenSidebar((prevState) => !prevState)}
        />
      )}
      <Link to="/">
        <img
          className="navbar-icon"
          src="https://res.cloudinary.com/bhakti1801/image/upload/v1649919109/R_ezqx3h.png"
          alt="icon"
        />
      </Link>

      <Link to="/login" className="link">
        LOGIN
      </Link>
    </div>
  );
};
