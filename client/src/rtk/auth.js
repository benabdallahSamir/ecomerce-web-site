import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
  name: "auth",
  initialState: {
    isLoggin: false,
    userInfo: {},
  },
  reducers: {
    initAuth: (state, { payload }) => {
      const { isLoggin, userInfo } = payload;
      if (isLoggin) {
        state.isLoggin = isLoggin;
        state.userInfo = userInfo;
      }
      return state;
    },
  },
});

export default auth.reducer;
export const { initAuth } = auth.actions;
