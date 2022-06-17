import React from "react";
import "./NoteCard.css";
import { useLocation } from "react-router-dom";
import { BsX, BsPinAngleFill, BsPinAngle } from "react-icons/bs";
import { useMainContext } from "../../Context";
import { MyNotesIcons } from "../../Components";
import { TrashNoteIcons } from "../IconsContainerForNoteCard/TrashNoteIcons";
import { ArchivesNoteIcons } from "../IconsContainerForNoteCard/ArchivesNoteIcons";
export const NoteCard = (note) => {
  const location = useLocation();
  const {
    DeleteNoteFromNotes,
    DeleteNoteFromArchives,
    DeleteNoteFromTrash,
    pinnedNotes,
    setPinnedNotes,
    removePinnedNote,
  } = useMainContext();

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
        {location.pathname === "/note-taking-page" &&
          (pinnedNotes.some(
            (pinnedNote) => pinnedNote._id === note.note._id
          ) ? (
            <span className="pin-icon-on-card">
              <BsPinAngleFill
                size={25}
                onClick={() => removePinnedNote(note.note)}
              />
            </span>
          ) : (
            <span className="pin-icon-on-card">
              <BsPinAngle
                size={25}
                onClick={() => {
                  setPinnedNotes((prevNotes) => [...prevNotes, note.note]);
                  DeleteNoteFromNotes(note.note._id);
                }}
              />{" "}
            </span>
          ))}
        {location.pathname === "/trash" && (
          <span className="pin-icon-on-card">
            <div size={30} onClick={() => DeleteNoteFromTrash(note.note._id)}>
              delete permanently
            </div>
          </span>
        )}
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
      </div>
      <div className="priority-container">
        <div>{note.note.priority}</div>
        <div>{note.note.tag}</div>
        <div>{note.note.label}</div>
      </div>
      <div className="note-card-footer">
        {location.pathname === "/note-taking-page" &&
          !pinnedNotes.some(
            (pinnedNote) => pinnedNote._id === note.note._id
          ) && <MyNotesIcons note={note} />}
        {location.pathname === "/archives" && <ArchivesNoteIcons note={note} />}
        {location.pathname === "/trash" && <TrashNoteIcons note={note} />}
      </div>
    </div>
  );
};
