import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const [isPendingUser, setIsPendingUser] = useState(true);

  const [errorUser, setErrorUser] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  // Get data from APIs
  const getUser = () => {
    axios
      .get("")
      .then((res) => {
        setUser(res.data?.response || []);
        setErrorUser(null);
      })
      .catch((err) => {
        setErrorUser(err.message);
      })
      .finally(() => {
        setIsPendingUser(false);
      });
  };

  return (
    <DataContext.Provider
      value={{
        user,
        isPendingUser,
        errorUser,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
