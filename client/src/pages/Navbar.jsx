import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const auth = useSelector((state) => state);
  const isLoggin = auth.auth.isLoggin;
  return (
    <div className="bg-gray-900 h-16 flex items-center px-3">
      <h1>ecomerce-website</h1>
      <div className="ml-auto">
        {isLoggin ? (
          <>
            <FontAwesomeIcon
              icon={faUser}
              className="p-3 cursor-pointer hover:border duration:300 border-gray-50 rounded-cercle w-5 h-5"
            />
            <FontAwesomeIcon
              icon={faShoppingBag}
              className="p-3 cursor-pointer hover:border duration:300 border-gray-50 rounded-cercle w-5 h-5"
            />
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
