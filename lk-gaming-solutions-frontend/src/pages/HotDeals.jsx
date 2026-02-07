import React, { useState } from "react";
import GamingCard from "../components/card/GamingCard";
import FilterSidebar from "../components/filter/FilterSidebar";
import SortingSelect from "../components/filter/SortingSelect";
import UseTitleName from "../utils/UseTitleName";

const HotDeals = () => {
  UseTitleName("Hot Deals");
  
  const [sortBy, setSortBy] = useState("name");
  const [gamesCount, setGamesCount] = useState();
  const [platform, setPlatform] = useState("All");
  const [discount, setDiscount] = useState("All");
  const [price, setPrice] = useState("All");

  const hotDeals = [
    {
      title: "GTA V Premium Edition",
      price: 9.99,
      oldPrice: 49.99,
      discount: 80,
      platform: "Steam",
      platformType: "Rockstar",
      seller: "GTAKings",
      rating: 4.7,
      stock: 156,
      region: "Global",
      timeLeft: "2h 15m",
      soldCount: 342,
    },
    {
      title: "The Witcher 3 GOTY",
      price: 7.99,
      oldPrice: 39.99,
      discount: 80,
      platform: "Steam",
      platformType: "GOG",
      seller: "CDPRKeys",
      rating: 4.9,
      stock: 89,
      region: "Global",
      timeLeft: "5h 42m",
      soldCount: 523,
    },
    {
      title: "Cyberpunk 2077",
      price: 19.99,
      oldPrice: 59.99,
      discount: 67,
      platform: "Epic Games",
      platformType: "Steam",
      seller: "CyberDeals",
      rating: 4.5,
      stock: 234,
      region: "Global",
      timeLeft: "8h 30m",
      soldCount: 412,
    },
    {
      title: "Red Dead Redemption 2",
      price: 19.99,
      oldPrice: 59.99,
      discount: 67,
      platform: "PC",
      platformType: "Rockstar",
      seller: "WildKeys",
      rating: 4.8,
      stock: 67,
      region: "Global",
      timeLeft: "3h 20m",
      soldCount: 289,
    },
    {
      title: "Elden Ring",
      price: 29.99,
      oldPrice: 59.99,
      discount: 50,
      platform: "PS5",
      platformType: "PlayStation",
      seller: "SoulsVault",
      rating: 4.8,
      stock: 45,
      region: "Global",
      timeLeft: "12h 05m",
      soldCount: 567,
    },
    {
      title: "Hogwarts Legacy",
      price: 24.99,
      oldPrice: 59.99,
      discount: 58,
      platform: "Xbox",
      platformType: "Xbox Series",
      seller: "MagicKeys",
      rating: 4.6,
      stock: 92,
      region: "Global",
      timeLeft: "6h 15m",
      soldCount: 378,
    },
    {
      title: "FIFA 24",
      price: 29.99,
      oldPrice: 69.99,
      discount: 57,
      platform: "PS5",
      platformType: "PlayStation",
      seller: "SportsDeals",
      rating: 4.3,
      stock: 128,
      region: "Global",
      timeLeft: "9h 45m",
      soldCount: 445,
    },
    {
      title: "Baldur's Gate 3",
      price: 39.99,
      oldPrice: 69.99,
      discount: 43,
      platform: "PC",
      platformType: "Steam",
      seller: "RPGMaster",
      rating: 4.9,
      stock: 73,
      region: "Global",
      timeLeft: "15h 30m",
      soldCount: 621,
    },
    {
      title: "Call of Duty: MW3",
      price: 44.99,
      oldPrice: 69.99,
      discount: 36,
      platform: "PC",
      platformType: "Battle.net",
      seller: "CODDeals",
      rating: 4.4,
      stock: 112,
      region: "Global",
      timeLeft: "7h 55m",
      soldCount: 356,
    },
    {
      title: "Resident Evil 4 Remake",
      price: 29.99,
      oldPrice: 59.99,
      discount: 50,
      platform: "PS5",
      platformType: "PlayStation",
      seller: "HorrorKeys",
      rating: 4.7,
      stock: 58,
      region: "Global",
      timeLeft: "4h 40m",
      soldCount: 298,
    },
    {
      title: "Starfield",
      price: 39.99,
      oldPrice: 69.99,
      discount: 43,
      platform: "Xbox",
      platformType: "Xbox Series",
      seller: "SpaceDeals",
      rating: 4.2,
      stock: 95,
      region: "Global",
      timeLeft: "11h 20m",
      soldCount: 267,
    },
    {
      title: "Spider-Man 2",
      price: 44.99,
      oldPrice: 69.99,
      discount: 35,
      platform: "PS5",
      platformType: "PlayStation",
      seller: "MarvelKeys",
      rating: 4.9,
      stock: 41,
      region: "Global",
      timeLeft: "1h 50m",
      soldCount: 489,
    },
  ];

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
              <GamingCard
                card_data={hotDeals}
                card_icon={"bi-fire"}
                setGamesCount={setGamesCount}
                platform={platform}
                discount={discount}
                price={price}
                sortBy={sortBy}
              />

              {/* Pagination */}
              <div className="d-flex justify-content-center mt-5">
                <nav>
                  <ul className="pagination">
                    <li className="page-item">
                      <a
                        className="page-link"
                        href="#"
                        style={{
                          background: "#1e2329",
                          border: "2px solid #353d4a",
                          color: "#8b95a5",
                          fontWeight: 600,
                        }}
                      >
                        Previous
                      </a>
                    </li>
                    <li className="page-item active">
                      <a
                        className="page-link"
                        href="#"
                        style={{
                          background:
                            "linear-gradient(135deg, #BD9B52 0%, #D4AF6A 100%)",
                          border: "none",
                          color: "#000",
                          fontWeight: 700,
                        }}
                      >
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link"
                        href="#"
                        style={{
                          background: "#1e2329",
                          border: "2px solid #353d4a",
                          color: "#8b95a5",
                          fontWeight: 600,
                        }}
                      >
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link"
                        href="#"
                        style={{
                          background: "#1e2329",
                          border: "2px solid #353d4a",
                          color: "#8b95a5",
                          fontWeight: 600,
                        }}
                      >
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link"
                        href="#"
                        style={{
                          background: "#1e2329",
                          border: "2px solid #353d4a",
                          color: "#8b95a5",
                          fontWeight: 600,
                        }}
                      >
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotDeals;
