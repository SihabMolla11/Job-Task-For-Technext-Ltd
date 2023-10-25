import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Loading";
import { GlobalContext } from "../GlobalContext/GlobalProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(GlobalContext);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
