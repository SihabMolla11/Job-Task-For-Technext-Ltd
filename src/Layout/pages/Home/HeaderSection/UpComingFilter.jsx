import { useContext } from "react";
import { GlobalContext } from "../../../../GlobalContext/GlobalProvider";

const UpComingFilter = () => {
  const { setStatus, setFindByLaunchingDate, setIsUpcoming, handelSetSessionStorage } = useContext(GlobalContext);

  const handelUpComing = (event) => {
    setStatus(null);
    setFindByLaunchingDate(null);
    handelSetSessionStorage(1);
    setIsUpcoming(event);
  };

  return (
    <div className="md:text-end">
      <input onChange={(e) => handelUpComing(e.target.checked)} type="checkbox" id="upcoming" />
      <label htmlFor="upcoming" className="text-[#212529] ml-2">
        Show upcoming only
      </label>
    </div>
  );
};

export default UpComingFilter;
