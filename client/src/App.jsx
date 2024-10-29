import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { reqParams, userApi } from "./main";
import { initAuth } from "./rtk/auth";
import Navbar from "./pages/Navbar";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import AdminDashboard from "./pages/AdminDashboard";

const App = () => {
  const dispatch = useDispatch();
  const selector = useSelector((s) => s);
  (async () => {
    try {
      const res = await axios.get(`${userApi}/isLoggin`, reqParams);
      if (!res) {
        console.log("some thing rong");
        return;
      }
      dispatch(initAuth(res.data));
    } catch (error) {
      console.log(error);
    }
  })();
  return (
    <div className="w-[100vw] h-[100vh] bg-gray-950 text-gray-50 flex flex-col">
      <Navbar />
      <div className="grow">
        <Routes>
          {!selector.auth.isLoggin ? (
            <Route path="/register" element={<Auth />} />
          ) : (
            <>
              {selector.auth.userInfo.isAdmin && (
                <Route path="/adminDashboard" element={<AdminDashboard />} />
              )}
            </>
          )}
        </Routes>
      </div>
    </div>
  );
};

export default App;
