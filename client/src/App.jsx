import { useDispatch } from "react-redux";
import { setConfig } from "./rtk/auth";

const App = () => {
  const dispatch = useDispatch();
  
  return <div className="w-[100vw] h-[100vw] overflow-x-hidden">App</div>;
};

export default App;
