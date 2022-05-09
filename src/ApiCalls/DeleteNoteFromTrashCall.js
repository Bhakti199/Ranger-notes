import axios from "axios";

export const DeleteNoteFromTrashCall = async (noteId) => {
  try {
    const { data, status } = await axios.delete(`/api/trash/delete/${noteId}`, {
      headers: {
        authorization: localStorage.getItem("userLoginToken"),
      },
    });
    return { trash: data.trash, status };
  } catch (error) {
    console.error(error);
    return error;
  }
};
