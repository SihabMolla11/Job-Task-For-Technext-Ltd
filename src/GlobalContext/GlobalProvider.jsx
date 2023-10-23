import { createContext } from "react";

export const GlobalContext = createContext(null);

const GlobalProvider = ({ children }) => {
  const info = "this is info";

  const contextInfo = { info };

  return <GlobalContext.Provider value={contextInfo}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
