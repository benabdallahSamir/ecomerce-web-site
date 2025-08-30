import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
export default function Navigator({ mobileNavBarOpen, mobileNavBarClick }) {
  const navigate = useNavigate();

  return (  
    <ul
      className={`nav-bar duration-300 ${
        mobileNavBarOpen
          ? "aside-bar-open max-md:!pt-10"
          : "max-md:!w-0 max-md:!p-0 max-md:!m-0"
      }`}
      onClick={mobileNavBarClick}
    >
      <IoMdClose className="cursor-pointer md:hidden w-8 h-8 absolute right-0 top-0.5" />
      <li>
        <Link to="/" className="hover:text-gray-500">
          Men
        </Link>
      </li>
      <li>
        <Link to="/" className="hover:text-gray-500">
          Women
        </Link>
      </li>
      <li>
        <Link to="/" className="hover:text-gray-500">
          Top Wear
        </Link>
      </li>
      <li>
        <Link to="/" className="hover:text-gray-500">
          Bottom Wear
        </Link>
      </li>
    </ul>
  );
}
