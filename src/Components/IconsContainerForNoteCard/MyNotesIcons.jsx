import React from "react";
import { MdEdit } from "react-icons/md";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import { VscTrash } from "react-icons/vsc";
import { useMainContext } from "../../Context";
export const MyNotesIcons = ({ note }) => {
  const {
    setUpdateNoteState,
    setNoteInput,
    addNoteToArchives,
    addNoteToTrash,
  } = useMainContext();
  return (
    <>
      <MdEdit
        size={22}
        onClick={() => {
          setUpdateNoteState(true);
          setNoteInput({ ...note.note });
        }}
      />
      <BiArchiveIn
        size={22}
        onClick={() => addNoteToArchives(note.note._id, note.note)}
      />
      <VscTrash size={22} onClick={() => addNoteToTrash(note.note._id)} />
    </>
  );
};
