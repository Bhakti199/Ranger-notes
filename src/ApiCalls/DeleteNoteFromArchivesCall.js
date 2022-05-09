import axios from "axios";

export const DeleteNoteFromArchivesCall = async (noteId) => {
  try {
    const { data, status } = await axios.delete(
      `/api/archives/delete/${noteId}`,
      {
        headers: {
          authorization: localStorage.getItem("userLoginToken"),
        },
      }
    );
    return { archives: data.archives, status };
  } catch (error) {
    console.error(error);
    return error;
  }
};
