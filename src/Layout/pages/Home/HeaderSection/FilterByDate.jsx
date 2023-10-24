import { useContext, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { GoDash } from "react-icons/go";
import { GlobalContext } from "../../../../GlobalContext/GlobalProvider";

const FilterByDate = () => {
  const [openDateByFilter, setOpenDateByFilter] = useState(false);
  const [date, setDate] = useState(null);
  const { setStatus, setFindByLaunchingDate, setIsUpcoming } = useContext(GlobalContext);

  const handelFilterByDate = (event) => {
    setStatus(null);
    setIsUpcoming(false);
    setDate(event);
    if (event) {
      const currentDate = new Date();
      const sevenDaysAgo = new Date(currentDate);
      sevenDaysAgo.setDate(currentDate.getDate() - event);
      const year = sevenDaysAgo.getFullYear();
      const month = sevenDaysAgo.getMonth() + 1;
      const day = sevenDaysAgo.getDate();
      const hours = sevenDaysAgo.getHours();
      const minutes = sevenDaysAgo.getMinutes();
      const seconds = sevenDaysAgo.getSeconds();

      const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")} ${hours}:${minutes}:${seconds}`;

      setFindByLaunchingDate(formattedDate);
    } else {
      setFindByLaunchingDate(event);
    }
  };

  return (
    <div className="w-full relative">
      <button
        onClick={() => setOpenDateByFilter(!openDateByFilter)}
        type="button"
        className={`border px-2 h-10 w-full flex rounded-md items-center justify-between cursor-pointer text-[#6C757D] ${openDateByFilter ? "border-4 border-[#86B7FE]" : "border-[#CED4DA]"}`}
      >
        <span>By Launch Date</span> {openDateByFilter ? <GoDash /> : <BiChevronDown />}
      </button>
      {openDateByFilter && (
        <ul className="absolute border border-black w-full z-40 bg-white space-y-1">
          <li>
            <button className={`cursor-pointer hover:bg-[#a7c3ee63] px-2 w-full text-start ${date === 7 && "bg-[#a7c3ee63]"}`} type="button" onClick={() => handelFilterByDate(7)}>
              Last week
            </button>
          </li>
          <li>
            <button className={`cursor-pointer hover:bg-[#a7c3ee63] px-2 w-full text-start ${date === 30 && "bg-[#a7c3ee63]"}`} type="button" onClick={() => handelFilterByDate(30)}>
              Last Month
            </button>
          </li>
          <li>
            <button className={`cursor-pointer hover:bg-[#a7c3ee63] px-2 w-full text-start ${date === 365 && "bg-[#a7c3ee63]"}`} type="button" onClick={() => handelFilterByDate(365)}>
              Last Year
            </button>
          </li>
          <li>
            <button className={`cursor-pointer hover:bg-[#a7c3ee63] px-2 w-full text-start ${!date && "bg-[#a7c3ee63]"}`} type="button" onClick={() => handelFilterByDate(null)}>
              All Rocket
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default FilterByDate;
