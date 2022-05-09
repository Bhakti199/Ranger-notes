import axios from "axios";

export const EditNoteCall = async (noteId, note) => {
  try {
    const { data, status } = await axios.post(
      `/api/notes/${noteId}`,
      { note },
      {
        headers: {
          authorization: localStorage.getItem("userLoginToken"),
        },
      }
    );
    return { notes: data.notes, status };
  } catch (error) {
    console.error(error);
    return error;
  }
};
