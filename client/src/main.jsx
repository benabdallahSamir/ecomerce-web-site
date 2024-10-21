import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import main from "./rtk/main.js";

const httpAPI = "http://localhost:3000";
export const userApi = `${httpAPI}/user`;
export const reqParams = {
  withCredentials: true,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={main}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
