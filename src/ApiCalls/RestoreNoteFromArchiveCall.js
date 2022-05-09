import axios from "axios";

export const RestoreNoteFromArchiveCall = async (noteId) => {
  try {
    const { data, status } = await axios.post(
      `/api/archives/restore/${noteId}`,
      {},
      {
        headers: {
          authorization: localStorage.getItem("userLoginToken"),
        },
      }
    );
    return { notes: data.notes, archives: data.archives, status };
  } catch (error) {
    console.error(error);
    return error;
  }
};
