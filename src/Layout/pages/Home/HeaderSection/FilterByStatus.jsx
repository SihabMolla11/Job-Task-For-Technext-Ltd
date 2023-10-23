import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { GoDash } from "react-icons/go";

const FilterByStatus = () => {
  const [openStatusByFilter, setOpenStatusByFilter] = useState(false);

  return (
    <div className="w-64 relative">
      <button
        onClick={() => setOpenStatusByFilter(!openStatusByFilter)}
        type="button"
        className={`border border-[#CED4DA] px-2 h-10 w-full flex rounded-md items-center justify-between cursor-pointer text-[#6C757D] ${openStatusByFilter && "border-4 border-[#86B7FE]"}`}
      >
        <span>By Launch Date</span> {openStatusByFilter ? <GoDash /> : <BiChevronDown />}
      </button>
      {openStatusByFilter && (
        <ul className="absolute border border-black w-full ">
          <li className="cursor-pointer hover:bg-[#a7c3ee63] px-2">Last week</li>
          <li className="cursor-pointer hover:bg-[#a7c3ee63] px-2">Last Month</li>
          <li className="cursor-pointer hover:bg-[#a7c3ee63] px-2">Last Year</li>
        </ul>
      )}
    </div>
  );
};

export default FilterByStatus;
