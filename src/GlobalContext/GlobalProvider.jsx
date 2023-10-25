import axios from "axios";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";

export const GlobalContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const GlobalProvider = ({ children }) => {
  const [allData, setAllData] = useState([]);
  const [rockets, setRockets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [status, setStatus] = useState(null);
  const [isUpcoming, setIsUpcoming] = useState(false);
  const [findByLaunchingDate, setFindByLaunchingDate] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [user, setUser] = useState(null);

  const handelSetSessionStorage = (event) => {
    sessionStorage.setItem("pageNumber", event);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const profileUpdate = async (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  useEffect(() => {
    setFetchLoading(true);
    axios.get("https://api.spacexdata.com/v3/launches").then((res) => {
      setAllData(res?.data);
    });
  }, []);

  useEffect(() => {
    setFetchLoading(true);
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
    setFetchLoading(false);
  }, [status, setRockets, allData, findByLaunchingDate, isUpcoming, searchText]);

  const contextInfo = {
    user,
    allData,
    rockets,
    loading,
    status,
    fetchLoading,
    setLoading,
    setStatus,
    setFindByLaunchingDate,
    setIsUpcoming,
    setSearchText,
    handelSetSessionStorage,
    createUser,
    loginUser,
    profileUpdate,
    googleLogin,
    logOut,
  };

  return <GlobalContext.Provider value={contextInfo}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
