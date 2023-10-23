const HeaderSection = () => {
  return (
    <div className="mt-24">
      <div className=" flex flex-col md:flex-row justify-between md:items-end gap-6">
        <div>search</div>
        <div className=" md:text-end">
          <input type="checkbox" name="" id="upcoming" />
          <label htmlFor="upcoming" className="text-[#212529] ml-2">
            Show upcoming only
          </label>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div>by launch Status</div>
            <div>by launch Data</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
