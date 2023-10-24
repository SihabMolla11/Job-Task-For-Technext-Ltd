import { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { GlobalContext } from "../../../../GlobalContext/GlobalProvider";

const SearchBar = () => {
  const { setSearchText } = useContext(GlobalContext);
  return (
    <div className="flex items-center">
      <input
        onChange={(e) => setSearchText(e.target.value.toLocaleLowerCase())}
        className=" w-full lg:w-80 px-2 h-[42px] border  rounded-md focus:outline-none focus:border-2 focus:border-[#0D6EFD] border-[#CED4DA] placeholder-[#6C757D]"
        type="text"
        placeholder="Search..."
        name="search"
        id="search"
      />
      <label htmlFor="search" className="bg-[#0D6EFD] p-[13px] -ml-10 rounded-r-md cursor-pointer  ">
        <BsSearch className="text-white" />
      </label>
    </div>
  );
};

export default SearchBar;
