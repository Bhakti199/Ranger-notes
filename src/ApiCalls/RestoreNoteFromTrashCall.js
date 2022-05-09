import axios from "axios";

export const RestoreNoteFromTrashCall = async (noteId) => {
  try {
    const { data, status } = await axios.post(
      `/api/trash/restore/${noteId}`,
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
