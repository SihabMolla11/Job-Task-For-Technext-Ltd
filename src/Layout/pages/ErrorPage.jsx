import Lottie from "lottie-react";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import errorAnimation from "../../assets/animation/errpr.json";
const ErrorPage = () => {
  return (
    <div>
      <Lottie className="h-[70vh]" animationData={errorAnimation} loop={true} />
      <div>
        <h2 className="text-center text-4xl font-bold text-gray-700">Sorry The page Not found</h2>
        <div className=" flex justify-center mt-5">
          <Link to="/" className="flex items-center gap-4 text-xl border-2 py-1 px-4 rounded-md border-[#0D6EFD] font-semibold hover:bg-[#0D6EFD] hover:text-white ease-in-out duration-500 ">
            Got To Home <AiOutlineHome />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
