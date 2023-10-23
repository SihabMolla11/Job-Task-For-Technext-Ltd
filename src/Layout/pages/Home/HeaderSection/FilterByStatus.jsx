import { useContext, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { GoDash } from "react-icons/go";
import { GlobalContext } from "../../../../GlobalContext/GlobalProvider";

const FilterByStatus = () => {
  const { setStatus } = useContext(GlobalContext);
  const [openStatusByFilter, setOpenStatusByFilter] = useState(false);

  return (
    <div className="w-full relative">
      <button
        onClick={() => setOpenStatusByFilter(!openStatusByFilter)}
        type="button"
        className={`border px-2 h-10 w-full flex rounded-md items-center justify-between cursor-pointer text-[#6C757D] ${openStatusByFilter ? "border-4 border-[#86B7FE]" : "border-[#CED4DA]"}`}
      >
        <span>By Launch Status</span> {openStatusByFilter ? <GoDash /> : <BiChevronDown />}
      </button>
      {openStatusByFilter && (
        <ul className="absolute border border-black w-full z-30 bg-white ">
          <li>
            <button className="cursor-pointer hover:bg-[#a7c3ee63] px-2 w-full text-start" type="button" onClick={() => setStatus(true)}>
              Success
            </button>
          </li>
          <li>
            <button className="cursor-pointer hover:bg-[#a7c3ee63] px-2 w-full text-start" type="button" onClick={() => setStatus(false)}>
              Failed
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default FilterByStatus;
