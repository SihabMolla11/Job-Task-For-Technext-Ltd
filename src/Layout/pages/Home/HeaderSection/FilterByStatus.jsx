import { useContext, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { GoDash } from "react-icons/go";
import { GlobalContext } from "../../../../GlobalContext/GlobalProvider";

const FilterByStatus = () => {
  const { setStatus, setFindByLaunchingDate, setIsUpcoming, status, handelSetSessionStorage } = useContext(GlobalContext);
  const [openStatusByFilter, setOpenStatusByFilter] = useState(false);
  const handelStatusFilter = (event) => {
    setFindByLaunchingDate(null);
    setIsUpcoming(false);
    handelSetSessionStorage(1);
    setStatus(event);
  };

  return (
    <div className="w-full relative">
      <button onClick={() => setOpenStatusByFilter(!openStatusByFilter)} type="button" className={`filter border ${openStatusByFilter ? "border-4 border-[#86B7FE]" : "border-[#CED4DA]"}`}>
        <span>By Launch Status</span> {openStatusByFilter ? <GoDash /> : <BiChevronDown />}
      </button>
      {openStatusByFilter && (
        <ul className="filter-container">
          <li>
            <button className={`filter-button ${status === true && "bg-[#a7c3ee63]"}`} type="button" onClick={() => handelStatusFilter(true)}>
              Success Rocket
            </button>
          </li>
          <li>
            <button className={`filter-button ${status === false && "bg-[#a7c3ee63]"}`} type="button" onClick={() => handelStatusFilter(false)}>
              Failed Rocket
            </button>
          </li>
          <li>
            <button className={`filter-button ${status === null && "bg-[#a7c3ee63]"}`} type="button" onClick={() => handelStatusFilter(null)}>
              All Rocket
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default FilterByStatus;
