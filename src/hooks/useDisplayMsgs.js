import React from "react";
import { useDispatch } from "react-redux";

export const useDisplayMsgs = () => {
  const dispatch = useDispatch();

  const addMsg = (msg) => {
    // dispatch add notificaton here
    console.log(JSON.stringify(msg))
  };

  const handleErr = (data) => {
    const msgFormat = {
      type: "E",
      title: "Error",
      msg: data,
    };
    addMsg(msgFormat);
  };

  const handleSuccess = (data) => {
    const msgFormat = {
      type: "S",
      title: "Success",
      msg: data,
    };
    addMsg(msgFormat);
  };

  const handleWarning = (data) => {
    const msgFormat = {
      type: "W",
      title: "Warning",
      msg: data,
    };
    addMsg(msgFormat);
  };

  const handleInfo = (data) => {
    const msgFormat = {
      type: "I",
      title: "Info",
      msg: data,
    };
    addMsg(msgFormat);
  };

  const handleBackendResponse = (data) => {
    if ([500, 503, 404].includes(data.err)) {
      handleErr(data);
    } else {
      handleWarning(data);
    }
  };

  return {
    handleErr,
    handleInfo,
    handleSuccess,
    handleWarning,
    handleBackendResponse,
  };
};
