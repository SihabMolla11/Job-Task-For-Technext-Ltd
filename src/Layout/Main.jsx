import { useContext } from "react";
import Heading from "../Components/Heading";
import { GlobalContext } from "../GlobalContext/GlobalProvider";
import Home from "./pages/Home/Home";

const Main = () => {
  const { info } = useContext(GlobalContext);
  console.log(info);
  return (
    <div className=" my-container">
      <Home/>
    </div>
  );
};

export default Main;
