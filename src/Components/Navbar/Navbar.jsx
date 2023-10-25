import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext/GlobalProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logOut, user } = useContext(GlobalContext);

  const handelLogout = () => {
    logOut().then(() => {
      toast.success("Log Out Successful");
    });
  };

  const navItems = (
    <>
      <li>
        <NavLink className="hover:border-b border-white" to="/">
          Home
        </NavLink>
      </li>
      { !user ? (
        <>
          <li>
            <NavLink className="hover:border-b border-white" to="/login">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className="hover:border-b border-white" to="/sign-up">
              Sing Up
            </NavLink>
          </li>
        </>
      ) : (
        <button onClick={handelLogout} className="bg-white px-2 text-red-500 font-semibold rounded-sm" type="button">
          Logout
        </button>
      )}
    </>
  );

  return (
    <div className="nav-container">
      {isOpen ? (
        <button onClick={() => setIsOpen(!isOpen)} type="button" className="md:hidden">
          <AiOutlineClose className="text-4xl" />
        </button>
      ) : (
        <button onClick={() => setIsOpen(!isOpen)} type="button" className="md:hidden">
          <HiMenuAlt2 className="text-4xl " />
        </button>
      )}

      <div className="space-x-3">
        <h2 className="font-bold text-xl md:text-3xl">
          <span className="text-[#0AF8FF]">Space</span> Curiosity
        </h2>
      </div>
      <div className=" items-center gap-6 flex">
        <ul className=" hidden md:flex items-center gap-4 font-semibold text-lg ">{navItems}</ul>
        <div className="">
          <FaUserAlt className="text-2xl cursor-pointer" />
        </div>
        <div>
          <ul className={`absolute top-[68px] bg-[#000000d2] w-40 font-semibold p-4 space-y-2 rounded-br-md ease-in-out duration-300 ${isOpen ? "left-0" : "-left-52"}`}>{navItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
