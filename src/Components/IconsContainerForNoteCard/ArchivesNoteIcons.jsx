import React from "react";
import { useMainContext } from "../../Context";
import { BiArchiveOut } from "react-icons/bi";
import "./IconsForNote.css";
export const ArchivesNoteIcons = ({ note }) => {
  const { restoreNoteFromArchives, DeleteNoteFromArchives } = useMainContext();
  return (
    <>
      <button
        className="delete-permanent-button"
        onClick={() => DeleteNoteFromArchives(note.note._id)}
      >
        Delete
      </button>
      <BiArchiveOut
        size={22}
        onClick={() => restoreNoteFromArchives(note.note._id)}
      />
    </>
  );
};
