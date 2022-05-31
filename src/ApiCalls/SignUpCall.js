import axios from "axios";
export const signUpCall = async (email, password, firstName, lastName) => {
  try {
    const { data, status } = await axios.post("/api/auth/signup", {
      email,
      password,
      firstName,
      lastName,
    });
    return { data, status };
  } catch (error) {
    console.error(error);
    return error;
  }
};
