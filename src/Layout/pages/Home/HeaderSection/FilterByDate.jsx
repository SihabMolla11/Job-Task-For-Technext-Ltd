import { useContext, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { GoDash } from "react-icons/go";
import { GlobalContext } from "../../../../GlobalContext/GlobalProvider";

const FilterByDate = () => {
  const [openDateByFilter, setOpenDateByFilter] = useState(false);
  const { setFindByLaunchingDate } = useContext(GlobalContext);

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
        <ul className="absolute border border-black w-full z-40 bg-white">
          <li>
            <button className="cursor-pointer hover:bg-[#a7c3ee63] px-2 w-full text-start" type="button" onClick={() => setFindByLaunchingDate("lastWeek")}>
              Last week
            </button>
          </li>
          <li>
            <button className="cursor-pointer hover:bg-[#a7c3ee63] px-2 w-full text-start" type="button" onClick={() => setFindByLaunchingDate("lastMonth")}>
              Last Month
            </button>
          </li>
          <li>
            <button className="cursor-pointer hover:bg-[#a7c3ee63] px-2 w-full text-start" type="button" onClick={() => setFindByLaunchingDate("lastYear")}>
              Last Year
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default FilterByDate;
