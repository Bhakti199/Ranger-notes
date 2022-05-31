import React from "react";
import { useMainContext } from "../../Context";
import { BiArchiveOut } from "react-icons/bi";

export const ArchivesNoteIcons = ({ note }) => {
  const { restoreNoteFromArchives } = useMainContext();
  return (
    <>
      <BiArchiveOut
        size={22}
        onClick={() => restoreNoteFromArchives(note.note._id)}
      />
    </>
  );
};
