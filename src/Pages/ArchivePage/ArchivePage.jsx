import React from "react";
import "./ArchivePage.css";
import { Link } from "react-router-dom";
import { useMainContext } from "../../Context";
import { NoteCard } from "../../Components";
export const ArchivePage = () => {
  const { userInfo } = useMainContext();
  const { archives } = userInfo;
  return (
    <div className="archives-page">
      <div className="archives-title">Archives</div>
      {archives && archives.length === 0 && (
        <div className="archives-content">
          <div className="archives-text">No notes in Archives</div>
          <Link to="/note-taking-page" className="add-note">
            Add note
          </Link>
        </div>
      )}

      <div className="archives-notes">
        {archives &&
          archives.length > 0 &&
          archives.map((note, index) => (
            <div key={index}>
              <NoteCard note={note} />
            </div>
          ))}
      </div>
    </div>
  );
};
