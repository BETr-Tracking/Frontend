import React from "react";
import { useNavigate } from "react-router-dom";
import { loginSystemUser } from "../../../axios/auth";
import { useDisplayMsgs } from "../../../hooks/useDisplayMsgs";
import { registerUser } from "../../../axios/profile";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../features/userSlice";

export const useUser = () => {
  const navigate = useNavigate();
  const { handleBackendResponse, handleErr, handleSuccess } = useDisplayMsgs();
  const dispatch = useDispatch();
  const loginUser = async (data) => {
    const res = await loginSystemUser(data);
    if (res) {
      if (res.err) {
        // handle error accordingly
        handleBackendResponse(res);
      } else {
        if (res.userId) {
          // update user in store
          dispatch(updateUser({ uid: res.userId }));
          handleSuccess("You have Successfully logged in.");
          navigate("/dashboard");
        } else {
          // add notification msg : "Sorry! Problem in Sign in the User." or msg from backend
          if (res.errmsg) {
            handleErr(res.errmsg);
          } else {
            handleErr("Sorry! Problem in Sign in the User.");
          }
        }
      }
    } else {
      // add notification msg : "Sorry! Problem in Sign in the User."
      handleErr("Sorry! Problem in Sign in the User.");
    }
  };

  const createUser = async (data) => {
    const res = await registerUser(data);
    if (res) {
      if (res.err) {
      } else {
        navigate("/login");
      }
    }
  };
  return { loginUser, createUser };
};
