import React, { useEffect, useState } from "react";
import { getUserInfo, updateUserPassword, updateUsername } from "../../../axios/profile";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../features/userSlice";

export const useProfile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    username: "",
    email: "",
    // password: "",
    // rpassword: "",
  });
  const [errs, setErrs] = useState({
    username: "",
    email: "",
    // password: "",
    // rpassword: "",
  });

  const getData = async () => {
    const res = await getUserInfo(user.uid);
    if (res) {
      if (res.err) {
      } else {
        setData((prev) => {
          return { ...prev, username: res.username, email: res.email };
        });
        dispatch(updateUser({ ...user, name: res.username, email: res.email }));
      }
    }
  };

  const updateData = async () => {
    const reqData = { uid: user.uid, name_or_pwd: data.username };
    const res = await updateUsername(reqData);
    if (res) {
      if (res.err) {
      } else {
        getData();
      }
    }
  };

  const updatePassword = async (value) => {
    const reqData = { uid: user.uid, name_or_pwd: value };
    const res = await updateUserPassword(reqData);
    if (res) {
      if (res.err) {
      } else {
        getData();
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, setData, errs, setErrs, updateData,updatePassword };
};
