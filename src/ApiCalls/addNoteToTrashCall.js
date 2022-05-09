import axios from "axios";

export const addNoteToTrashCall = async (noteId) => {
  try {
    const { data, status } = await axios.post(
      `/api/notes/trash/${noteId}`,
      {},
      {
        headers: {
          authorization: localStorage.getItem("userLoginToken"),
        },
      }
    );
    return { notes: data.notes, trash: data.trash, status };
  } catch (error) {
    console.error(error);
    return error;
  }
};
