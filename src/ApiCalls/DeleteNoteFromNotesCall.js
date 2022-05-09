import axios from "axios";

export const DeleteNoteFromNotesCall = async (noteId) => {
  try {
    const { data, status } = await axios.delete(`/api/notes/${noteId}`, {
      headers: { authorization: localStorage.getItem("userLoginToken") },
    });

    return { notes: data.notes, status };
  } catch (error) {
    console.error(error);
    return error;
  }
};
