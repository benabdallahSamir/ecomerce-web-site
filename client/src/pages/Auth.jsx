import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { reqParams, userApi } from "../main";
import { useDispatch } from "react-redux";
import { initAuth } from "../rtk/auth";
import { useNavigate } from "react-router-dom";

function Login({ changepages }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    userKey: "",
    password: "",
  });
  function valideForm() {
    const { userKey, password } = values;
    if (!(userKey && password)) {
      Swal.fire({
        title: "empty feild",
        text: "enter all input value please",
        icon: "error",
        timer: 3000,
        closeButtonText: "close",
      });
      return false;
    }
    return true;
  }
  async function submit(event) {
    try {
      event.preventDefault();
      if (!valideForm()) return;
      const res = await axios.post(`${userApi}/login`, values, reqParams);
      dispatch(initAuth(res.data));
      Swal.fire({
        title: "welcome back",
        timer: 700,
        icon: "success",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  function changeData(event) {
    setValues((curr) => {
      return {
        ...values,
        [event.target.name]: event.target.value,
      };
    });
  }
  return (
    <div className="w-full h-full rounded-md flex flex-col pt-5 items-center">
      <h1 className="capitalize text-2xl font-semibold mb-10">welcome back</h1>
      <form
        onSubmit={submit}
        className="h-max w-full flex flex-col items-center"
      >
        <input
          type="text"
          name="userKey"
          placeholder="Enter username or email"
          onChange={changeData}
          className="w-4/5 h-10 rounded-md focus:border border-purple-700 pl-3 cursor-pointer focus:outline-none bg-gray-950 mb-4"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={changeData}
          className="w-4/5 h-10 rounded-md focus:border border-purple-700 pl-3 cursor-pointer focus:outline-none bg-gray-950 mb-4"
        />
        <button
          type="submit"
          className="rounded-lg bg-purple-700 capitalize px-8 py-2 mt-16 mb-4 font-semibold"
        >
          login
        </button>
        <p className="capitalize">
          you don't have account ?{" "}
          <span
            className="text-purple-700 cursor-pointer"
            onClick={changepages}
          >
            join us today
          </span>
        </p>
      </form>
    </div>
  );
}
function Singup({ changepages }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  function submit(event) {
    event.preventDefault();
  }
  function changeData(event) {
    setValues((curr) => {
      return {
        ...values,
        [event.target.name]: event.target.value,
      };
    });
  }
  return (
    <div className="w-full h-full rounded-md flex flex-col pt-5 items-center">
      <h1 className="capitalize text-2xl font-semibold mb-10">join us today</h1>
      <form
        onSubmit={submit}
        className="h-max w-full flex flex-col items-center"
      >
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={changeData}
          className="w-4/5 h-10 rounded-md focus:border border-purple-700 pl-3 cursor-pointer focus:outline-none bg-gray-950 mb-4"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={changeData}
          className="w-4/5 h-10 rounded-md focus:border border-purple-700 pl-3 cursor-pointer focus:outline-none bg-gray-950 mb-4"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={changeData}
          className="w-4/5 h-10 rounded-md focus:border border-purple-700 pl-3 cursor-pointer focus:outline-none bg-gray-950 mb-4"
        />
        <button
          type="submit"
          className="rounded-lg bg-purple-700 capitalize px-8 py-2 mt-7 mb-4 font-semibold"
        >
          sinup
        </button>
        <p className="capitalize">
          already have account ?{" "}
          <span
            className="text-purple-700 cursor-pointer"
            onClick={changepages}
          >
            welcome back
          </span>
        </p>
      </form>
    </div>
  );
}
export default function Auth() {
  const [loggin, setLoggin] = useState(true);
  function changeLoggin() {
    setLoggin((curr) => !curr);
  }
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <section className="w-52 h-2 rounded-md bg-gray-900 mb-5 relative">
        <FontAwesomeIcon
          icon={faArrowCircleDown}
          className={`w-7 h-7 rounded-cercle absolute top-1/2 -translate-y-1/2 duration-700 ${
            loggin ? "rotate-45" : "rotate-[315deg] translate-x-48"
          }`}
          onClick={changeLoggin}
        />
      </section>
      <div className="w-[300px] rounded-md h-[400px] bg-gray-900 border border-gray-800">
        {loggin ? (
          <Login changepages={changeLoggin} />
        ) : (
          <Singup changepages={changeLoggin} />
        )}
      </div>
    </div>
  );
}
