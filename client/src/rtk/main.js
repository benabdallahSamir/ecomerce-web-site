import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
const main = configureStore({
  reducer: {
    auth,
  },
});
export default main;
