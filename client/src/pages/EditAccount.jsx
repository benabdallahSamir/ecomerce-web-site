import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
export default function EditAccount() {
  const selector = useSelector((s) => s);
  const [value, setValue] = useState({
    username: "",
    passowrd: "",
    confirmPassword: "",
    currentPassword: "",
    email: "",
    currentPassword: "",
  });
  async function submit(e) {
    e.preventDefault();
  }
  function changeData(e) {
    setValue((curr) => ({ ...curr, [e.target.name]: e.target.value }));
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="py-20 w-full min-h-10 flex items-center justify-center"
    >
      <form className="flex flex-col w-max mr-20" onSubmit={submit}>
        <input
          type="text"
          name="username"
          placeholder="Edit username"
          onChange={changeData}
          className="w-56 h-10 rounded-md focus:border border-purple-700 pl-3 cursor-pointer focus:outline-none bg-gray-950 mb-4"
        />
        <input
          type="email"
          name="email"
          placeholder="Edit username"
          onChange={changeData}
          className="w-56 h-10 rounded-md focus:border border-purple-700 pl-3 cursor-pointer focus:outline-none bg-gray-950 mb-4"
        />
        <input
          type="password"
          name="current password"
          placeholder="Enter Current Password"
          onChange={changeData}
          className="w-56 h-10 rounded-md focus:border border-purple-700 pl-3 cursor-pointer focus:outline-none bg-gray-950 mb-4"
        />
        <input
          type="password"
          name="password"
          placeholder="Edit Password"
          onChange={changeData}
          className="w-56 h-10 rounded-md focus:border border-purple-700 pl-3 cursor-pointer focus:outline-none bg-gray-950 mb-4"
        />
        <input
          type="passowrd"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={changeData}
          className="w-56 h-10 rounded-md focus:border border-purple-700 pl-3 cursor-pointer focus:outline-none bg-gray-950 mb-4"
        />
        <button
          type="submit"
          className="px-5 py-2 bg-green-500 capitalize duration-300 hover:font-semibold hover:bg-green-600 rounded-md"
        >
          edit my account
        </button>
      </form>
      <aside className="w-max h-full flex flex-col items-center">
        <h1 className="capitalize tracking-wider text-2xl text-center font-semibold">
          my current info
        </h1>
        {selector.auth.userInfo.IsHavePicture ? (
          <img
            src={selector.auth.userInfo.Picture}
            alt="user picture"
            className="w-20 h-20 text-3xl rounded-cercle mx-auto my-5"
          />
        ) : (
          <FontAwesomeIcon
            icon={faUser}
            className="w-20 h-20 text-3xl rounded-cercle mx-auto my-5"
          />
        )}
        <div className="flex justify-between items-center mb-5">
          <button className="px-2 py-1 bg-red-500 capitalize duration-300 hover:font-semibold hover:bg-red-600 rounded-md mr-1">
            remove picture
          </button>
          <button className="px-2 py-1 bg-green-500 capitalize duration-300 hover:font-semibold hover:bg-green-600 rounded-md">
            change picture
          </button>
        </div>
        <div className="flex items-center w-52">
          <p className="mr-2 capitalize font-semibold text-gray-300 tracking-wide">
            username:
          </p>
          <p className="mr-2 font-semibold tracking-wide">
            {selector.auth.userInfo.username}
          </p>
        </div>
        <div className="flex items-center">
          <p className="mr-2 capitalize font-semibold text-gray-300 tracking-wide">
            email:
          </p>
          <p className="mr-2 font-semibold tracking-wide">
            {selector.auth.userInfo.email}
          </p>
        </div>
      </aside>
    </motion.div>
  );
}
