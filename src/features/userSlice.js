import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    uid: localStorage.getItem("uid") ? localStorage.getItem("uid") : null,
    email: null,
    name: null,
  },
  reducers: {
    updateUser: (state, action) => {
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.name = action.payload.name;

      if (!localStorage.getItem("uid")) {
        localStorage.setItem("uid", action.payload.uid);
      }
    },
    logoutUser: (state) => {
      state.uid = null;
      state.email = null;
      state.name = null;

      localStorage.clear();
    },
  },
});

export const { updateUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
