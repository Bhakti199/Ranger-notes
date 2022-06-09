import React from "react";
import { FaTrashRestoreAlt } from "react-icons/fa";
import { useMainContext } from "../../Context";

export const TrashNoteIcons = ({ note }) => {
  const { RestoreNoteFromTrash } = useMainContext();
  return (
    <>
      <FaTrashRestoreAlt
        size={22}
        onClick={() => RestoreNoteFromTrash(note.note._id)}
      />
    </>
  );
};
