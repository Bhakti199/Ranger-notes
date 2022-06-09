import React from "react";
import "./NoteCard.css";
import { useLocation } from "react-router-dom";
import { BsX, BsPinAngleFill } from "react-icons/bs";
import { useMainContext } from "../../Context";
import { MyNotesIcons } from "../../Components";
import { TrashNoteIcons } from "../IconsContainerForNoteCard/TrashNoteIcons";
import { ArchivesNoteIcons } from "../IconsContainerForNoteCard/ArchivesNoteIcons";
export const NoteCard = (note) => {
  const location = useLocation();
  const { DeleteNoteFromNotes, DeleteNoteFromArchives, DeleteNoteFromTrash } =
    useMainContext();

  const deleteNoteHandler = (noteId) => {
    if (location.pathname === "/trash") DeleteNoteFromTrash(noteId);
    if (location.pathname === "/archives") DeleteNoteFromArchives(noteId);
    if (location.pathname === "/note-taking-page") DeleteNoteFromNotes(noteId);
  };
  return (
    <div
      key={note.note._id}
      className="note-card"
      style={{
        backgroundColor: note.note.color === "" ? "white" : note.note.color,
      }}
    >
      <div className="note-card-title">
        <span className="note-card-title">{note.note.title}</span>
        <span className="pin-icon-on-card">
          <BsX size={30} onClick={() => deleteNoteHandler(note.note._id)} />
        </span>
      </div>
      <div
        className="note-card-content"
        dangerouslySetInnerHTML={{
          __html: note.note.content,
        }}
      ></div>
      <div className="date-label-container">
        <div>{note.note.date}</div>
        <div>{`${note.note.time.hours}:${note.note.time.minutes}:${note.note.time.seconds}`}</div>
        <div>{note.note.priority}</div>
        <div>{note.note.tag}</div>
        <div>{note.note.label}</div>
      </div>
      <div className="note-card-footer">
        {location.pathname === "/note-taking-page" && (
          <MyNotesIcons note={note} />
        )}
        {location.pathname === "/archives" && <ArchivesNoteIcons note={note} />}
        {location.pathname === "/trash" && <TrashNoteIcons note={note} />}
      </div>
    </div>
  );
};
