import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [games, setGames] = useState([]);

  const [isPendingGames, setIsPendingGames] = useState(true);

  const [errorGames, setErrorGames] = useState(null);

  useEffect(() => {
    getGames();
  }, []);

  // Get data from APIs
  const getGames = () => {
    axios
      .get("http://localhost:3001/api/games")
      .then((res) => {
        setGames(res.data?.response || []);
        setErrorGames(null);
      })
      .catch((err) => {
        setErrorGames(err.message);
      })
      .finally(() => {
        setIsPendingGames(false);
      });
  };

  return (
    <DataContext.Provider
      value={{
        games,
        getGames,
        isPendingGames,
        errorGames,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
