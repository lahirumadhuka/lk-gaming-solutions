import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HotDeals from "./pages/HotDeals";
import ScrollToTop from "./utils/ScrollToTop";
import BrowseGames from "./pages/BrowseGames";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Games from "./pages/Games";
import { DataProvider } from "./utils/DataContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Error from "./components/status/Error";
import Loader from "./components/status/Loader";

const App = () => {
  ScrollToTop();

  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [fetchTime, setFetchTime] = useState(null);

  const [gamesCount, setGamesCount] = useState(0);
  const [user, setUser] = useState(null);

  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user)
      return setUser(user);
  }, []);

  useEffect(() => {
    setFetchTime(null);
    const start = performance.now();
    axios
      .get("http://localhost:3001")
      .then((res) => {
        setError(null);
      })
      .catch((err) => {
        setTimeout(
          () => {
            setError(err.message);
          },
          Math.round(performance.now() - start),
        );
      })
      .finally(() => {
        const time = Math.round(performance.now() - start);
        setFetchTime(time);
        setTimeout(() => {
          setIsPending(false);
          setFetchTime(null);
        }, time);
      });
  }, []);

  useEffect(() => {
    setGamesCount(0);

    axios.get(`http://localhost:3001/api/v1/cart?id=${user}`).then((res) => {
      setGamesCount(res.data?.gamesCount || 0);
    });
  }, [user]);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/v1/user/${user}`).then((res) => {
      setUserInfo(res.data?.response);
    });
  }, [user]);

  return (
    <>
      <ToastContainer
        position="top-center"
        theme="dark"
        toastClassName="toast-message"
        hideProgressBar={true}
      />

      {fetchTime && isPending ? (
        <Loader time={fetchTime} />
      ) : error ? (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
          <Error />
        </div>
      ) : (
        !isPending && (
          <DataProvider>
            <header>
              <Header gamesCount={gamesCount} user={user} setUser={setUser} />
            </header>

            <main className="min-vh-100">
              <Routes>
                <Route>
                  <Route path="/" element={<Home user={user} />} />
                  <Route
                    path="/play-station"
                    element={<Games pathname={"PlayStation"} user={user} />}
                  />
                  <Route
                    path="/xbox"
                    element={<Games pathname={"Xbox"} user={user} />}
                  />
                  <Route
                    path="/pc"
                    element={<Games pathname={"PC"} user={user} />}
                  />
                  <Route path="/hot-deals" element={<HotDeals user={user} />} />
                  <Route
                    path="/browse-games"
                    element={<BrowseGames user={user} />}
                  />
                  <Route path="/cart" element={<Cart user={user} />} />
                  <Route path="/login" element={<Login setUser={setUser} />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route
                    path="/profile"
                    element={<Profile userInfo={userInfo} />}
                  />
                  <Route
                    path="/settings"
                    element={<Settings userInfo={userInfo} />}
                  />
                </Route>
              </Routes>
            </main>

            <footer>
              <Footer />
            </footer>
          </DataProvider>
        )
      )}
    </>
  );
};

export default App;
