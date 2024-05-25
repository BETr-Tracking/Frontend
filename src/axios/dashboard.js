import { handleErrResponse } from "../miscellaneous/utils";
import axios from "./instance";

export const getDashboardInfo = async (data) => {
  try {
    const res = await axios.get("/api/dashboard/getDashboardDetails", {
      params: data,
    });
    return res.data;
  } catch (error) {
    return handleErrResponse(error.response);
  }
};
