import { handleErrResponse } from "../miscellaneous/utils";
import axios from "./instance";

export const getDashboardInfo = async (data) => {
  try {
    const res = await axios.get("http://localhost:8081/api/dashboard/getDashboardDetails", data);
    return res.data;
  } catch (error) {
    return handleErrResponse(error.response);
  }
};
