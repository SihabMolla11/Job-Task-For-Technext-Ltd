import { useContext } from "react";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { Link, useParams } from "react-router-dom";
import Loading from "../../../Components/Loading";
import { GlobalContext } from "../../../GlobalContext/GlobalProvider";
import useTitle from "../../../hooks/useTitle";

const RocketDetail = () => {
  const { rockets, fetchLoading } = useContext(GlobalContext);

  const params = useParams();
  const id = parseInt(params?.id);
  const rocket = rockets?.find((rocket) => rocket?.launch_date_unix === id);

  useTitle(rocket?.rocket?.rocket_name);

  if (fetchLoading) {
    return <Loading />;
  }
  return (
    <div className="mt-20">
      <div className="flex gap-20 flex-col md:flex-row items-center ">
        <div className="w-full md:w-[50%] p-4">
          <img src={rocket?.links?.mission_patch} alt="" className="w-full" />
        </div>
        <div className="w-full md:w-[50%] space-y-2">
          <h2 className="text-2xl font-bold text-[#474747] flex items-center gap-4">
            <HiOutlineRocketLaunch /> <span>Rocket Name: {rocket?.rocket?.rocket_name}</span>
          </h2>
          <h3 className="text-xl font-medium">Rocket Mission: {rocket?.mission_name}</h3>
          <h3 className="text-xl font-medium">
            Rocket Launched: <span className={`${rocket?.launch_success ? "text-green-500" : "text-red-500"}`}>{rocket?.launch_success ? "Success" : "Failed"}</span>
          </h3>
          <p className="text-gray-600">{rocket?.details}</p>
          <p>
            <strong>Lunching Date Local:</strong>{" "}
            <span className="text-yellow-500 font-semibold">
              {new Date(rocket?.launch_date_local).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </p>
          <p>
            <strong>Neutrality:</strong> {rocket?.rocket.second_stage.payloads[0].nationality}
          </p>
          <p>
            <strong>Manufacturer By:</strong> {rocket?.rocket.second_stage.payloads[0].manufacturer}
          </p>
          <p>
            <strong>Type:</strong> {rocket?.rocket.second_stage.payloads[0].payload_type}
          </p>
          <div className=" flex flex-col gap-2 md:flex-row ">
            <Link to={rocket?.links.article_link} target="_blank">
              <button className="link-button bg-blue-600" type="button">
                Article Link
              </button>
            </Link>
            <Link to={rocket?.links.wikipedia} target="_blank">
              <button className="link-button bg-gray-500" type="button">
                wikipedia Link
              </button>
            </Link>
            <Link to={rocket?.links.video_link} target="_blank">
              <button className="link-button bg-red-600">Youtube Link</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RocketDetail;
