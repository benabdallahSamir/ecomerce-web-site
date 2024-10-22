import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { reqParams, userApi } from "../main";
import { initAuth } from "../rtk/auth";
import Swal from "sweetalert2";

export default function Navbar() {
  const isLoggin = useSelector((state) => state.auth.isLoggin);
  const diapatch = useDispatch();
  async function logout() {
    try {
      const {data} = await axios.get(`${userApi}/logout`,reqParams);
      if (!data.isLoggin) {
        diapatch(initAuth(data));
        Swal.fire({
          title:"log out succesfuly",
          icon:"success",
          timer:1000,
          position:"bottom-left"
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="bg-gray-900 h-16 flex items-center px-3">
      <h1>ecomerce-website</h1>
      <div className="ml-auto flex items-center">
        {isLoggin ? (
          <>
            <FontAwesomeIcon
              icon={faUser}
              className="p-3 cursor-pointer hover:border duration:300 border-gray-50 rounded-cercle w-5 h-5"
            />
            <FontAwesomeIcon
              icon={faShoppingBag}
              className="p-3 cursor-pointer hover:border duration:300 border-gray-50 rounded-cercle w-5 h-5 mx-2"
            />
            <button
              className="px-5 py-2 bg-red-500 duration-300 hover:bg-red-600 capitalize rounded-md font-semibold"
              onClick={logout}
            >
              log out
            </button>
          </>
        ) : (
          <Link
            to={"/register"}
            className="bg-green-400 px-5 py-2 rounded-lg capitalize font-semibold tracking-wide cursor-pointer duration-300 hover:bg-green-300"
          >
            loggin
          </Link>
        )}
      </div>
    </div>
  );
}
