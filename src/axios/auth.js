import { handleErrResponse } from "../miscellaneous/utils";
import axios from "./instance";

export const loginSystemUser = async (data) => {
  try {
    const res = await axios.post("/api/auth/login", data);
    return res.data;
  } catch (error) {
    const errRes = handleErrResponse(error.response)
    return errRes;
  }
};
