import axios from "axios";
import React from "react";

const App = () => {
  async function s() {
    try {
      const res = await axios.post("http://localhost:3000/user/singup", {
        username: "ssss",
        email: "samir@gmail.com",
        password: "samirsamir",
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  s();

  return <div>App</div>;
};

export default App;
