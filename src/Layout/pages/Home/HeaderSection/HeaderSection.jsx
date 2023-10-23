import FilterByDate from "./FilterByDate";
import FilterByStatus from "./FilterByStatus";
import SearchBar from "./SearchBar";
import UpComingFilter from "./UpComingFilter";

const HeaderSection = () => {
  return (
    <div className=" mt-24 flex flex-col md:flex-row justify-between md:items-end gap-6">
      <div className=" w-full md:w-[60%]">
        <SearchBar />
      </div>
      <div className="w-full md:w-[40%]">
        <UpComingFilter />
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <FilterByStatus />
          <FilterByDate />
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
