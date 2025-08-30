import React from "react";
import Header from "../common/Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
