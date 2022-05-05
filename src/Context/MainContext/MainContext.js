import { createContext, useContext, useState } from "react";
const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  return (
    <MainContext.Provider
      value={{
        openSidebar,
        setOpenSidebar,
        isUserLoggedIn,
        setIsUserLoggedIn,
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

const useMainContext = () => useContext(MainContext);

export { MainContextProvider, useMainContext };
