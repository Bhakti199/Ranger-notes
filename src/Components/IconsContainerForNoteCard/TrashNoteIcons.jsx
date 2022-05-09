import React from "react";
import { FaTrashRestoreAlt } from "react-icons/fa";
import { useMainContext } from "../../Context";
import "./IconsForNote.css";
export const TrashNoteIcons = ({ note }) => {
  const { RestoreNoteFromTrash, DeleteNoteFromTrash } = useMainContext();
  return (
    <>
      <button
        className="delete-permanent-button"
        onClick={() => DeleteNoteFromTrash(note.note._id)}
      >
        Delete
      </button>
      <FaTrashRestoreAlt
        size={22}
        onClick={() => RestoreNoteFromTrash(note.note._id)}
      />
    </>
  );
};
