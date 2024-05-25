import React, { useEffect, useState } from "react";
import { getDashboardInfo } from "../../../axios/dashboard";
import { useSelector } from "react-redux";

export const useGetOverview = () => {
  const [data, setData] = useState(null);
  const user = useSelector((state) => state.user);
  const getData = async () => {
    const reqData = {
      uid: user.uid,
      month: new Date().getMonth()+1,
      year: new Date().getFullYear(),
    };
    const res = await getDashboardInfo(reqData);
    if (res) {
      if (res.err) {
      } else {
        setData(res);
      }
    } else {
      setData({});
    }
  };
  useEffect(() => {
    if (user.uid) {
      getData();
    }
  }, [user.uid]);

  return { data };
};

// totalAmt: 10000,
//         totalSpent: 2000,
//         expenses: [
//           {
//             description: "Food Expense",
//             category: { name: "Food" },
//             amount: 2000,
//             date: new Date("09/05/2024"),
//           },
//         ],
//         clms: [
//           { name: "Food", all_amt: 7000, spent_amt: 2000 },
//           { name: "Travel", all_amt: 2000, spent_amt: 0 },
//           { name: "misc", all_amt: 1000, spent_amt: 0 },
//         ],
