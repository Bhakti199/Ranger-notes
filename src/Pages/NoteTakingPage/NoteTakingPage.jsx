import React from "react";
import "./NoteTakingPage.css";
import { useFilter, useMainContext } from "../../Context";
import { NoteCard, NoteEditor } from "../../Components";
export const NoteTakingPage = () => {
  const { userInfo } = useMainContext();
  const { showNotesList } = useFilter();
  const { notes } = userInfo;
  return (
    <>
      <div className="note-taking-page">
        <div className="add-note-title">Add Note</div>
        <NoteEditor />
        {notes && notes.length > 0 && (
          <div className="my-notes-title">My Notes</div>
        )}

        <div className="notes-container">
          {showNotesList &&
            showNotesList.length > 0 &&
            showNotesList.map((note) => (
              <div key={note._id}>
                <NoteCard note={note} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
