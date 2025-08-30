import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLayout from "./components/layout/UserLayout";
import AdminLayout from "./components/layout/AdminLayout";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          {/* admin layout */}
        </Route>
      </Routes>
    </div>
  );
}
