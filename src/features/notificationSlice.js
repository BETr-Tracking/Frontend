import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notifications",
  initialState: [],
  reducers: {
    addNotification: (state, action) => {
      state = [...state, { ...action.payload }];
    },
    deleteNotification: (state, action) => {
      state = state.filter((item) => item.id === action.payload);
    },
  },
});

export const { addNotification, deleteNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;
