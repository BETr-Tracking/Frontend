// reducers.js
import { combineReducers } from "@reduxjs/toolkit";
import notificationSlice from "../features/notificationSlice";
import userSlice from "../features/userSlice";

const rootReducer = combineReducers({
  notifications: notificationSlice,
  user: userSlice,
});

export default rootReducer;
