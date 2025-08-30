import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiBars3BottomRight,
  HiOutlineUser,
  HiOutlineShoppingBag,
} from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import SearchBar from "../common/SearchBar";
import CardLayout from "../common/CardLayout";
import Navigator from "../common/Navigator";
function Navbar() {
  // state
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [cardLayoutOpen, setCardLayoutOpen] = useState(false);
  const [mobileNavBarOpen, setMobileNavBarOpen] = useState(false);
  // handlers
  function searchButtonClick() {
    setSearchBarOpen((curr) => !curr);
  }
  function mobileNavBarClick() {
    setMobileNavBarOpen((curr) => !curr);
  }
  // render
  return (
    <>
      <nav className="container mx-auto py-3 px-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Rabbit</h1>
        <Navigator
          mobileNavBarClick={mobileNavBarClick}
          mobileNavBarOpen={mobileNavBarOpen}
        />
        <div className="flex space-x-4">
          <HiOutlineUser className="w-5 h-5" />
          <button
            className="relative cursor-pointer"
            onClick={() => setCardLayoutOpen((curr) => !curr)}
          >
            <HiOutlineShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2.5 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </button>
          <IoIosSearch
            className="w-5 h-5 cursor-pointer"
            onClick={searchButtonClick}
          />
          <HiBars3BottomRight
            className="w-5 h-5 md:hidden cursor-pointer"
            onClick={() => setMobileNavBarOpen((curr) => !curr)}
          />
        </div>
      </nav>
      {/* cart layout */}
      <CardLayout
        className={cardLayoutOpen ? "aside-bar-open" : "w-0 !p-0 !m-0"}
        hideCardLayout={() => setCardLayoutOpen(false)}
      />
      {/* mobile NavBar */}
      {/* search bar */}
      {searchBarOpen && <SearchBar searchButtonClick={searchButtonClick} />}
    </>
  );
}

export default Navbar;
