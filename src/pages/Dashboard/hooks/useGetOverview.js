import React, { useEffect, useState } from "react";
import { getDashboardInfo } from "../../../axios/dashboard";
import { useSelector } from "react-redux";

export const useGetOverview = () => {
  const [data, setData] = useState(null);
  const user = useSelector((state) => state.user);
  const getData = async () => {
    const reqData = {
      uid: user.uid,
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    };
    const res = await getDashboardInfo(reqData);
    if (res) {
      if (res.err) {
      } else {
        setData(res);
      }
    }
  };
  useEffect(() => {
    if (user.uid) {
      getData();
    }
  }, [user.uid]);

  return { data };
};
