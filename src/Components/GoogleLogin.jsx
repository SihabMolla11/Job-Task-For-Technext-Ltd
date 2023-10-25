import { useContext } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../GlobalContext/GlobalProvider";

const GoogleLogin = () => {
  const { loading, setLoading, googleLogin, user } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handelGoogleLogin = () => {
    setLoading(true);
    googleLogin()
      .then(() => {
        toast.success("login Successfully");
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  return (
    <button disabled={loading || user} onClick={handelGoogleLogin} type="button" className="w-full border-2 border-[#0D6EFD] flex items-center justify-center p-2 rounded-md gap-3 cursor-pointer">
      <FcGoogle className="text-2xl" /> <span>Login With Google</span>
    </button>
  );
};

export default GoogleLogin;
