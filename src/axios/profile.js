import { handleErrResponse } from "../miscellaneous/utils";
import axios from "./instance";

export const registerUser = async (data) => {
  try {
    const res = await axios.post("/api/user/createUser", data);
    return res.data;
  } catch (error) {
    return handleErrResponse(error.response);
  }
};

export const getUserInfo = async (uid) => {
  try {
    const res = await axios.get(`/api/user/getUser/${uid}`);
    return res.data;
  } catch (error) {
    return handleErrResponse(error.response);
  }
};

export const updateUsername = async (data) => {
  try {
    const res = await axios.put("/api/user/updateUserName", data);
    return res.data;
  } catch (error) {
    return handleErrResponse(error.response);
  }
};

export const updateUserPassword = async (data) => {
  try {
    const res = await axios.put("/api/user/updateUserPwd", data);
    return res.data;
  } catch (error) {
    return handleErrResponse(error.response);
  }
};
