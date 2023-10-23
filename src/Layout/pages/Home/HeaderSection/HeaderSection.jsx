const HeaderSection = () => {
  return (
    <div className="mt-24">
      <div className="text-end mb-4">
        <input type="checkbox" name="" id="upcoming" />
        <label htmlFor="upcoming" className="text-[#212529] ml-2">
          Show upcoming only
        </label>
      </div>
      <div className=" flex justify-between">
        <div>search</div>
        <div className="flex gap-6">
          <div>by launch Status</div>
          <div>by launch Data</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
