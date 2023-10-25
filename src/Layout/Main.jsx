import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-150px)] my-container">
        <Outlet />
      </div>
      <p className="text-center text-sm text-[#495057] mb-6 mt-20">Created by the brilliant minds behind SpaceX</p>
    </>
  );
};

export default Main;
