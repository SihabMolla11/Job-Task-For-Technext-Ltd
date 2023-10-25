/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../../../Components/GoogleLogin";
import { GlobalContext } from "../../../GlobalContext/GlobalProvider";
import loginAnimation from "../../../assets/animation/login.json";

const Login = () => {
  const { loading, setLoading, loginUser, user } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handelLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    loginUser(email, password)
      .then(() => {
        toast.success("login Successful");
        navigate("/");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col lg:flex-row md:items-center gap-6 mt-10 ">
      <div className="hidden lg:block lg:w-[50%] ">
        <Lottie animationData={loginAnimation} loop={true} />
      </div>
      <div className="w-full lg:w-[50%] border border-gray-100 rounded-md px-10 py-16 shadow-md ">
        <div>
          <h2 className="text-3xl font-bold">Login</h2>
          <p className="text-[#888888]">
            Doesn't have any account yet?{" "}
            <Link className="text-[#0D6EFD] font-semibold underline" to="/sign-up">
              Sign Up
            </Link>
          </p>
          <form onSubmit={handelLogin} className="space-y-6 mt-8">
            <div className="flex flex-col ">
              <label className="font-semibold" htmlFor="email">
                Email Address
              </label>
              <input type="email" name="email" id="email" required placeholder="user@gmail.com" className="border-2 rounded-md p-2 focus:outline-none focus:border-[#0D6EFD]" />
            </div>
            <div className="flex flex-col ">
              <label className="font-semibold" htmlFor="password">
                Password
              </label>
              <input type="password" name="password" id="password" required placeholder="Enter your password" className="border-2 rounded-md p-2 focus:outline-none focus:border-[#0D6EFD]" />
            </div>
            <button disabled={loading || user} type="submit" className="w-full bg-[#0D6EFD] p-2 font-semibold uppercase text-white rounded-md flex justify-center cursor-pointer">
              {loading ? (
                <span>
                  <TbFidgetSpinner className="text-2xl animate-spin" />
                </span>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>
          <div className="flex items-center justify-center gap-5 my-4">
            <hr className="w-full border border-gray-300" /> <span className="font-bold">OR</span> <hr className="w-full border border-gray-300" />
          </div>
          <GoogleLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
