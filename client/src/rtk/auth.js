import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
  name: "auth",
  initialState: {
    userId: "",
    token: "",
    userInfo: {},
  },
  reducers: {
    setUserInfo: (state, { payload: userInfo }) => {
      state.userInfo = userInfo;
      return state;
    },
    setConfig: (state, { payload: config }) => {
      const { token, userId } = config;
      state.userId = userId;
      state.token = token;
    },
  },
});

export default auth.reducer;
export const { setUserInfo , setConfig } = auth.actions;
