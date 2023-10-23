import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalProvider = ({ children }) => {
  const [allData, setAllData] = useState([]);
  const [rockets, setRockets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterByStatus, setFilterByStatus] = useState([]);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get("https://api.spacexdata.com/v3/launches").then((res) => {
      setAllData(res?.data);
      setLoading(false);
    });
  }, []);

  

  useEffect(() => {
    if (status === null) {
      setRockets(allData);
    } else if (status === false || status === true) {
      const statusFiltering = allData.filter((data) => data?.launch_success === status);
      setRockets(statusFiltering);
    }
  }, [status, setRockets, allData]);







  const contextInfo = { allData, rockets, loading, setStatus };

  return <GlobalContext.Provider value={contextInfo}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
