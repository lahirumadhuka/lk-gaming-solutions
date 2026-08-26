import React, { useEffect, useState } from "react";
import GamingCard from "../components/card/GamingCard";
import FilterSidebar from "../components/filter/FilterSidebar";
import SortingSelect from "../components/filter/SortingSelect";
import UseTitleName from "../utils/UseTitleName";
import axios from "axios";
import Pending from "../components/status/Pending";
import Error from "../components/status/Error";

const BrowseGames = ({user}) => {
  UseTitleName("Browse Games");

  const [games, setGames] = useState([]);
  const [isPendingGames, setIsPendingGames] = useState(true);
  const [errorGames, setErrorGames] = useState(null);

  const [gamesCount, setGamesCount] = useState(0);

  const [sortBy, setSortBy] = useState("title");
  const [isStockAvailable, setIsStockAvailable] = useState("All");
  const [platform, setPlatform] = useState("All");
  const [price, setPrice] = useState("All");
  const [genre, setGenre] = useState("All");
  const [region, setRegion] = useState("All");
  const [searchValue, setSearchValue] = useState("");

  const [page, setPage] = useState(1);
  const limit = 12;

  useEffect(() => {
    axios
      .get(
        `http://localhost:3001/api/v1/games?search=${searchValue}&platform=${platform}&genre=${genre}&region=${region}&stock=${isStockAvailable}&price=${price}&sort=${sortBy}&page=${page}&limit=${limit}`,
      )
      .then((res) => {
        setGames(res.data?.response || []);
        setGamesCount(res.data?.gamesCount || 0);
        setErrorGames(null);
      })
      .catch((err) => {
        setErrorGames(err.message);
      })
      .finally(() => {
        setIsPendingGames(false);
      });
  }, [searchValue, platform, genre, region, isStockAvailable, sortBy, price, page]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Orbitron:wght@700;900&family=Teko:wght@600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: #0a0e1a;
          color: #fff;
          overflow-x: hidden;
        }

        .gaming-bg {
          background: linear-gradient(135deg, #0a0e1a 0%, #1a1f2e 50%, #0f1419 100%);
          position: relative;
          overflow: hidden;
        }

        .gaming-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 200%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #BD9B52, transparent);
          animation: scan 4s linear infinite;
        }

        @keyframes scan {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }

        .btn-gaming {
          background: linear-gradient(135deg, #BD9B52 0%, #D4AF6A 100%);
          border: none;
          color: #000;
          font-weight: 700;
          font-family: 'Orbitron', sans-serif;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 12px 32px;
          font-size: 14px;
          border-radius: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 8px 30px rgba(189, 155, 82, 0.4);
          position: relative;
          overflow: hidden;
        }

        .btn-gaming:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(189, 155, 82, 0.6);
          color: #000;
        }

        /* Browse Header */
        .browse-header {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          padding: 80px 0 60px;
          position: relative;
          overflow: hidden;
        }

        .browse-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(189, 155, 82, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(212, 175, 106, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .browse-title {
          font-family: 'Orbitron', sans-serif;
          font-weight: 900;
          font-size: 56px;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 3px;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }

        .browse-subtitle {
          font-family: 'Teko', sans-serif;
          font-size: 24px;
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: 2px;
        }

        /* Search Bar */
        .search-container {
          position: relative;
          max-width: 600px;
          margin: 0 auto;
        }

        .search-container i {
            position: absolute;
            right: 24px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 18px;
            color: #6c757d;
        }

        .search-input {
          width: 100%;
          border: 2px solid #353d4a;
          border-radius: 50px;
          padding: 16px 60px 16px 24px;
          
          font-family: 'Rajdhani', sans-serif;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .search-input:focus {
          border-color: #BD9B52;
          box-shadow: 0 0 20px rgba(189, 155, 82, 0.3);
          outline: none;
        }

        .search-input::placeholder {
          color: #5a6270;
        }

        @media (max-width: 768px) {
          .browse-title {
            font-size: 36px;
          }
        }
      `}</style>

      {/* Browse Header */}
      <section className="browse-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="browse-title mb-3 text-center">
                <i className="bi bi-grid-3x3-gap-fill me-3"></i>BROWSE GAMES
              </h1>
              <p className="browse-subtitle mb-4 text-center">
                Discover game keys across all platforms from trusted sellers
              </p>

              {/* Search Bar */}
              <div className="search-container mt-4">
                <i className="bi bi-search" style={{ fontSize: "18px" }}></i>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search for games, genres, or platforms..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="gaming-bg py-5 px-3 px-lg-0">
        <div className="container">
          <div className="row">
            {/* Filters Sidebar */}
            <FilterSidebar
              isStockAvailable={isStockAvailable}
              setIsStockAvailable={setIsStockAvailable}
              platform={platform}
              setPlatform={setPlatform}
              price={price}
              setPrice={setPrice}
              genre={genre}
              setGenre={setGenre}
              region={region}
              setRegion={setRegion}
            />

            {/* Games Grid */}
            <div className="col-lg-9">
              {isPendingGames ? (
                <Pending minHeight={"220px"} />
              ) : errorGames ? (
                <Error />
              ) : (
                <>
                  {/* Sort Bar */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 style={{ color: "#fff", fontWeight: 700, margin: 0 }}>
                      {gamesCount === 0
                        ? "No Games Found"
                        : `${gamesCount} Game${gamesCount > 1 ? "s" : ""} Found`}
                    </h5>
                    <SortingSelect sortBy={sortBy} setSortBy={setSortBy} />
                  </div>

                  {/* Games Grid */}
                  <GamingCard
                    card_data={games}
                    page={page}
                    setPage={setPage}
                    gamesCount={gamesCount}
                    limit={limit}
                    user={user}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrowseGames;
