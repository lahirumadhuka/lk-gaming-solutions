import React, { useEffect, useState } from "react";
import GamingCard from "../components/card/GamingCard";
import FilterSidebar from "../components/filter/FilterSidebar";
import SortingSelect from "../components/filter/SortingSelect";
import UseTitleName from "../utils/UseTitleName";
import axios from "axios";

const HotDeals = () => {
  UseTitleName("Hot Deals");

  const [games, setGames] = useState([]);
  const [isPendingGames, setIsPendingGames] = useState(true);
  const [errorGames, setErrorGames] = useState(null);

  const [gamesCount, setGamesCount] = useState(0);

  const [sortBy, setSortBy] = useState("name");
  const [platform, setPlatform] = useState("All");
  const [discount, setDiscount] = useState("All");
  const [price, setPrice] = useState("All");

  useEffect(() => {
    axios
      .get(
        `http://localhost:3001/api/v1/games?platform=${platform}&price=${price}&stock=true&sort=${sortBy}`,
      )
      .then((res) => {
        setGames(res.data?.response || []);
        setGamesCount(res.data?.gamesCount || 0);
      })
      .catch((err) => {
        setErrorGames(err.message);
      })
      .finally(() => {
        setIsPendingGames(false);
      });
  }, [platform, sortBy, price]);

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

        /* Hot Deals Header */
        .deals-header {
          background: linear-gradient(135deg, #ff0080 0%, #ff8c00 100%);
          padding: 80px 0 60px;
          position: relative;
          overflow: hidden;
        }

        .deals-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .deals-header::after {
          content: '🔥';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 300px;
          opacity: 0.1;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.1); }
        }

        .deals-title {
          font-family: 'Orbitron', sans-serif;
          font-weight: 900;
          font-size: 56px;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 3px;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }

        .deals-subtitle {
          font-family: 'Teko', sans-serif;
          font-size: 24px;
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: 2px;
        }

        /* Loader */
        .loader-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 220px;
        }

        .loader {
          width: 70px;
          height: 70px;
          border: 8px dotted transparent;
          border-left-color: #BD9B52;
          border-top-color: #BD9B52;
          border-right-color: #BD9B52;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 768px) {
          .deals-title {
            font-size: 36px;
          }
        }
      `}</style>

      {/* Hot Deals Header */}
      <section className="deals-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h1 className="deals-title mb-3">
                <i className="bi bi-fire me-3"></i>HOT DEALS
              </h1>
              <p className="deals-subtitle mb-0">
                Limited Time Offers • Up to 80% OFF
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="gaming-bg py-5">
        <div className="container">
          <div className="row">
            {/* Filters Sidebar */}
            <FilterSidebar
              platform={platform}
              setPlatform={setPlatform}
              discount={discount}
              setDiscount={setDiscount}
              price={price}
              setPrice={setPrice}
            />

            {/* Games Grid */}
            <div className="col-lg-9">
              {isPendingGames ? (
                <div className="loader-container">
                  <div className="loader"></div>
                </div>
              ) : errorGames ? (
                <div>Something Went Wrong!</div>
              ) : (
                <>
                  {/* Sort Bar */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 style={{ color: "#fff", fontWeight: 700, margin: 0 }}>
                      {gamesCount === 0
                        ? "No Hot Deals Available"
                        : `${gamesCount} Hot Deal${gamesCount > 1 ? "s" : ""} Available`}
                    </h5>
                    <SortingSelect sortBy={sortBy} setSortBy={setSortBy} />
                  </div>

                  {/* Games Grid */}
                  <GamingCard card_data={games} />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotDeals;
