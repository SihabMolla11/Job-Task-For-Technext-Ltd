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
  const [searchText, setSearchText] = useState("");

  const handelSetSessionStorage = (event) => {
    sessionStorage.setItem("pageNumber", event);
  };

  useEffect(() => {
    setLoading(true);
    axios.get("https://api.spacexdata.com/v3/launches").then((res) => {
      setAllData(res?.data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (status === false || status === true) {
      const statusFiltering = allData.filter((data) => data?.launch_success === status);
      setRockets(statusFiltering);
    } else if (isUpcoming === true) {
      const upComingRockets = allData.filter((data) => data?.upcoming === true);
      setRockets(upComingRockets);
    } else if (findByLaunchingDate) {
      const filterByDate = allData.filter((data) => new Date(data.launch_date_local) >= new Date(findByLaunchingDate));
      setRockets(filterByDate);
    } else if (searchText) {
      const searchRocket = allData.filter((data) => {
        const rocketName = data?.rocket?.rocket_name;
        if (rocketName) {
          return rocketName.toLowerCase().includes(searchText);
        }
      });
      setRockets(searchRocket);
    } else {
      setRockets(allData);
    }
  }, [status, setRockets, allData, findByLaunchingDate, isUpcoming, searchText]);

  const contextInfo = { allData, rockets, loading, status, setStatus, setFindByLaunchingDate, setIsUpcoming, setSearchText, handelSetSessionStorage };

  return <GlobalContext.Provider value={contextInfo}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
