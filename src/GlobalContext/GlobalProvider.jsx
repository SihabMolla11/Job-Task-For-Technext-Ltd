import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalProvider = ({ children }) => {
  const [allData, setAllData] = useState([]);
  const [rockets, setRockets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(null);
  const [isUpcoming, setIsUpcoming] = useState(false);
  const [findByLaunchingDate, setFindByLaunchingDate] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get("https://api.spacexdata.com/v3/launches").then((res) => {
      setAllData(res?.data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (status === null && findByLaunchingDate === null && isUpcoming === false) {
      setRockets(allData);
    } else if (status === false || status === true) {
      const statusFiltering = allData.filter((data) => data?.launch_success === status);
      setRockets(statusFiltering);
    } else if (isUpcoming === true) {
      const upComingRockets = allData.filter((data) => data?.upcoming === true);
      setRockets(upComingRockets);
    }
  }, [status, setRockets, allData, findByLaunchingDate, isUpcoming]);

  const contextInfo = { allData, rockets, loading, setStatus, setFindByLaunchingDate, setIsUpcoming };

  console.log(isUpcoming);

  return <GlobalContext.Provider value={contextInfo}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
