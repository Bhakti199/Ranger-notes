import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
export const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <div className="landing-img">
          <img
            src="./assets/notes.png"
            alt="notes"
            className="responsive-img"
          />
          <div className="landing-page-text">
            <div className="landing-page-title">
              Create and Manage your notes easily.
            </div>
            <Link to="/note-taking-page">
              <button className="cta-button">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
