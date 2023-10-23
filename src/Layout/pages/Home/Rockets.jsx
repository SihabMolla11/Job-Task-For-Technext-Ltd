import { useContext } from "react";
import { GlobalContext } from "../../../GlobalContext/GlobalProvider";

const Rockets = () => {
  const { rockets, loading } = useContext(GlobalContext);

  if (loading) {
    return <p>Loading........</p>;
  }

  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {rockets?.map((rocket) => (
        <div key={rocket?.mission_name} className="w-full border rounded-md text-center p-8 border-[#CED4DA] space-y-10">
          <img src={rocket?.links?.mission_patch} alt={rocket?.rocket?.rocket_name} className="w-32 h-32 mx-auto" />
          <div>
            <p className="text-[#6C757D]">
              Launch Date:{" "}
              {new Date(rocket?.launch_date_local).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
            <h4 className="text-2xl font-medium">{rocket?.mission_name}</h4>
            <p className="text-[#495057]">{rocket?.rocket?.rocket_name}</p>
          </div>
          <div>
            <p className="text-[#6C757D]">Launch Status:</p>
            <button type="button">
              {rocket?.launch_success ? (
                <span className="text-white bg-[#198754] px-2 rounded-md text-sm font-bold">Success</span>
              ) : (
                <span className="text-white bg-[#DC3545] px-2 rounded-md text-sm font-bold">Failed </span>
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
