import axios from "axios";
export const addNoteToArchieveCall = async (noteId, note) => {
  try {
    const { data, status } = await axios.post(
      `/api/notes/archives/${noteId}`,
      { note },
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
