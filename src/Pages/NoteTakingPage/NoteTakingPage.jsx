import React from "react";
import "./NoteTakingPage.css";
import { useMainContext } from "../../Context";
import { NoteCard, NoteEditor } from "../../Components";
export const NoteTakingPage = () => {
  const { userInfo } = useMainContext();
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
          {notes &&
            notes.map((note) => (
              <div key={note._id}>
                <NoteCard note={note} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
