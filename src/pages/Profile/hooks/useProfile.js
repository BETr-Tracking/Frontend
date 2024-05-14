import React, { useState } from "react";

export const useProfile = () => {
  const [data, setData] = useState({
    name: "abc",
    email: "abc",
    password: "abc",
    rpassword: "abc",
  });
  const [errs, setErrs] = useState({
    name: "",
    email: "",
    password: "",
    rpassword: "",
  });

  const getData = async () => {
    // const res=await getProfile()
    return null;
  };

  const updateData = async () => {};
  return { data, setData, errs, setErrs, updateData };
};
