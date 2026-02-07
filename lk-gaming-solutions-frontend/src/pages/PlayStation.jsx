import React, { useState } from "react";
import GamingCard from "../components/card/GamingCard";
import FilterSidebar from "../components/filter/FilterSidebar";
import SortingSelect from "../components/filter/SortingSelect";
import UseTitleName from "../utils/UseTitleName";

const PlayStation = () => {
  UseTitleName("PlayStation");
  
  const [sortBy, setSortBy] = useState("name");
  const [gamesCount, setGamesCount] = useState();
  const [isStockAvailable, setIsStockAvailable] = useState();
  const [platform, setPlatform] = useState("All");
  const [price, setPrice] = useState("All");
  const [genre, setGenre] = useState("All");
  const [region, setRegion] = useState("All");

  const playstationGames = [
    {
      title: "Spider-Man 2",
      price: 54.99,
      oldPrice: 69.99,
      discount: 21,
      platform: "PS5",
      seller: "ProGamer_88",
      rating: 4.9,
      stock: 15,
      region: "Global",
    },
    {
      title: "God of War Ragnarök",
      price: 44.99,
      oldPrice: 69.99,
      discount: 35,
      platform: "PS4/PS5",
      seller: "GameHunter",
      rating: 4.8,
      stock: 23,
      region: "Global",
    },
    {
      title: "Horizon Forbidden West",
      price: 39.99,
      oldPrice: 59.99,
      discount: 33,
      platform: "PS5",
      seller: "KeyMaster_Pro",
      rating: 4.7,
      stock: 8,
      region: "US/EU",
    },
    {
      title: "The Last of Us Part II",
      price: 29.99,
      oldPrice: 49.99,
      discount: 40,
      platform: "PS4",
      seller: "TrustedKeys",
      rating: 4.6,
      stock: 31,
      region: "Global",
    },
    {
      title: "Gran Turismo 7",
      price: 49.99,
      oldPrice: 69.99,
      discount: 28,
      platform: "PS5",
      seller: "SpeedRacer",
      rating: 4.5,
      stock: 12,
      region: "Global",
    },
    {
      title: "Ratchet & Clank: Rift Apart",
      price: 34.99,
      oldPrice: 59.99,
      discount: 41,
      platform: "PS5",
      seller: "GameVault",
      rating: 4.7,
      stock: 19,
      region: "Global",
    },
    {
      title: "Ghost of Tsushima Director's Cut",
      price: 44.99,
      oldPrice: 69.99,
      discount: 35,
      platform: "PS4/PS5",
      seller: "SamuraiKeys",
      rating: 4.9,
      stock: 7,
      region: "Global",
    },
    {
      title: "Returnal",
      price: 24.99,
      oldPrice: 49.99,
      discount: 50,
      platform: "PS5",
      seller: "KeysExpress",
      rating: 4.4,
      stock: 25,
      region: "US/EU",
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

        /* PlayStation Header */
        .ps-header {
          background: linear-gradient(135deg, #003087 0%, #0070cc 100%);
          padding: 80px 0 60px;
          position: relative;
          overflow: hidden;
        }

        .ps-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="50" font-size="80" fill="rgba(255,255,255,0.05)" font-family="Arial">PS</text></svg>');
          background-size: 200px;
          opacity: 0.3;
        }

        .ps-title {
          font-family: 'Orbitron', sans-serif;
          font-weight: 900;
          font-size: 56px;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 3px;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }

        .ps-subtitle {
          font-family: 'Teko', sans-serif;
          font-size: 24px;
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: 2px;
        }

        @media (max-width: 768px) {
          .ps-title {
            font-size: 36px;
          }
        }
      `}</style>

      {/* PlayStation Header */}
      <section className="ps-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h1 className="ps-title mb-3">
                <i className="bi bi-playstation me-3"></i>PLAYSTATION
              </h1>
              <p className="ps-subtitle mb-0">
                Browse {playstationGames.length} verified PlayStation game keys
                from trusted sellers
              </p>
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
                card_data={playstationGames}
                card_icon={"bi-playstation"}
                setGamesCount={setGamesCount}
                isStockAvailable={isStockAvailable}
                platform={platform}
                price={price}
                genre={genre}
                region={region}
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

export default PlayStation;
