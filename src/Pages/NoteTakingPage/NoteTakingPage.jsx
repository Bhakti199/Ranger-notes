import React from "react";
import "./NoteTakingPage.css";

import { NoteEditor } from "../../Components";
export const NoteTakingPage = () => {
  return (
    <>
      <div className="note-taking-page">
        <div className="note-taking-main">
          <NoteEditor />
        </div>
      </div>
    </>
  );
};
