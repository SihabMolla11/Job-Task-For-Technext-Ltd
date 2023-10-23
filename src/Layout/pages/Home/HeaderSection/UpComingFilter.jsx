import React from "react";

const UpComingFilter = () => {
  return (
    <div className="md:text-end">
      <input type="checkbox" name="" id="upcoming" />
      <label htmlFor="upcoming" className="text-[#212529] ml-2">
        Show upcoming only
      </label>
    </div>
  );
};

export default UpComingFilter;
