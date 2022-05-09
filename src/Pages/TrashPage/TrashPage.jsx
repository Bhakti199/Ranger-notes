import React from "react";
import "../ArchivePage/ArchivePage.css";
import { Link } from "react-router-dom";
import { useMainContext } from "../../Context";
import { NoteCard } from "../../Components";
export const TrashPage = () => {
  const { userInfo } = useMainContext();
  const { trash } = userInfo;
  return (
    <div className="archives-page">
      <div className="archives-title">Trash</div>
      {trash && trash.length === 0 && (
        <div className="archives-content">
          <div className="archives-text">No notes in Trash</div>
          <Link to="/note-taking-page" className="add-note">
            Add note
          </Link>
        </div>
      )}
      {trash &&
        trash.length > 0 &&
        trash.map((note, index) => (
          <div key={index}>
            <NoteCard note={note} />
          </div>
        ))}
    </div>
  );
};
