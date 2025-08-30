import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IoIosSearch, IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
export default function SearchBar({ searchButtonClick }) {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    if (value.trim().length !== 0) navigate(`/product?search=${value}`);
    searchButtonClick();
  }
  const searchInput = useRef();
  useEffect(() => {
    searchInput.current.focus();
    function handleKeyDown(event) {
      if (event.key === "Enter") {
        handleSearch();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <motion.div
      initial={{ width: 0, height: 0 }}
      animate={{
        width: "100%",
        height: "100%",
      }}
      className={`absolute inset-0 overflow-hidden bg-white shadow flex justify-between items-center px-5 gap-2`}
    >
      <input
        ref={searchInput}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search for products..."
        className="flex-1 p-2 border border-gray-400 focus:border-gray-600 outline-none rounded-md"
      />
      <IoIosSearch
        className="w-8 h-8 cursor-pointer hover:text-gray-500 duration-300"
        onClick={handleSearch}
      />
      <IoIosClose
        className="absolute top-1 right-1 w-8 h-8 cursor-pointer hover:text-gray-500 duration-300"
        onClick={searchButtonClick}
      />
    </motion.div>
  );
}
