import axios from "axios";
export const loginCall = async (email, password) => {
  try {
    const { data, status } = await axios.post("/api/auth/login", {
      email,
      password,
    });
    return { data, status };
  } catch (error) {
    console.error(error);
    return error;
  }
};
