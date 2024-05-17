import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../axios/profile";
import { logoutUser, updateUser } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";

export const useGetUser = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const getUserData = async () => {
    const res = await getUserInfo(user.uid);
    if (res) {
      if (res.err) {
      } else {
        dispatch(
          updateUser({ email: res.email, uid: user.uid, name: res.username })
        );
      }
    }
  };

  useEffect(() => {
    if (user.uid) {
      getUserData();
    }else{
        dispatch(logoutUser())
        navigate("/login")
    }
  }, [user.uid]);
  return {};
};
