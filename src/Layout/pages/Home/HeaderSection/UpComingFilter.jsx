import { useContext } from "react";
import { GlobalContext } from "../../../../GlobalContext/GlobalProvider";

const UpComingFilter = () => {
  const { setIsUpcoming } = useContext(GlobalContext);

  return (
    <div className="md:text-end">
      <input onChange={(e) => setIsUpcoming(e.target.checked)} type="checkbox" id="upcoming" />
      <label htmlFor="upcoming" className="text-[#212529] ml-2">
        Show upcoming only
      </label>
    </div>
  );
};

export default UpComingFilter;
