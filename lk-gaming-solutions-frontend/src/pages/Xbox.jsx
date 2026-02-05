import React, { useState } from "react";
import GamingCard from "../components/card/GamingCard";
import FilterSidebar from "../components/filter/FilterSidebar";
import SortingSelect from "../components/filter/SortingSelect";
import UseTitleName from "../utils/UseTitleName";

const Xbox = () => {
  UseTitleName("Xbox");

  const [sortBy, setSortBy] = useState("newest");
  const [gamesCount, setGamesCount] = useState();
  const [platform, setPlatform] = useState("All");
  const [price, setPrice] = useState("All");
  const [genre, setGenre] = useState("All");
  const [region, setRegion] = useState("All");

  const xboxGames = [
    {
      title: "Starfield Premium Edition",
      price: 54.99,
      oldPrice: 99.99,
      discount: 45,
      genre: "Adventure",
      platform: "Xbox Series X/S",
      seller: "SpaceKeys_Pro",
      rating: 4.3,
      stock: 18,
      region: "Global",
      gamePass: true,
    },
    {
      title: "Forza Horizon 5",
      price: 39.99,
      oldPrice: 59.99,
      discount: 33,
      platform: "Xbox One/Series",
      seller: "RacingMaster",
      rating: 4.8,
      stock: 31,
      region: "Global",
      gamePass: true,
    },
    {
      title: "Halo Infinite Campaign",
      price: 34.99,
      oldPrice: 59.99,
      discount: 42,
      platform: "Xbox Series X/S",
      seller: "SpartanKeys",
      rating: 4.5,
      stock: 24,
      region: "Global",
      gamePass: true,
    },
    {
      title: "Sea of Thieves",
      price: 29.99,
      oldPrice: 49.99,
      discount: 40,
      platform: "Xbox One/Series",
      seller: "PirateVault",
      rating: 4.6,
      stock: 42,
      region: "Global",
      gamePass: true,
    },
    {
      title: "Cyberpunk 2077",
      price: 29.99,
      oldPrice: 59.99,
      discount: 50,
      platform: "Xbox Series X/S",
      seller: "CyberGamer",
      rating: 4.4,
      stock: 15,
      region: "Global",
      gamePass: false,
    },
    {
      title: "Red Dead Redemption 2",
      price: 24.99,
      oldPrice: 59.99,
      discount: 58,
      platform: "Xbox One",
      seller: "WildWestXbox",
      rating: 4.8,
      stock: 9,
      region: "Global",
      gamePass: true,
    },
    {
      title: "Call of Duty: MW3",
      price: 54.99,
      oldPrice: 69.99,
      discount: 21,
      platform: "Xbox Series X/S",
      seller: "CODExpress",
      rating: 4.3,
      stock: 28,
      region: "Global",
      gamePass: false,
    },
    {
      title: "Minecraft Deluxe",
      price: 19.99,
      oldPrice: 29.99,
      discount: 33,
      platform: "Xbox One/Series",
      seller: "BlockBuster",
      rating: 4.9,
      stock: 67,
      region: "Global",
      gamePass: true,
    },
    {
      title: "FIFA 24",
      price: 39.99,
      oldPrice: 69.99,
      discount: 43,
      platform: "Xbox Series X/S",
      seller: "SportsKeys",
      rating: 4.2,
      stock: 21,
      region: "Global",
      gamePass: true,
    },
    {
      title: "Gears 5 Ultimate",
      price: 29.99,
      oldPrice: 59.99,
      discount: 50,
      platform: "Xbox One/Series",
      seller: "GearsVault",
      rating: 4.6,
      stock: 19,
      region: "Global",
      gamePass: true,
    },
    {
      title: "Assassin's Creed Valhalla",
      price: 34.99,
      oldPrice: 59.99,
      discount: 42,
      platform: "Xbox Series X/S",
      seller: "VikingKeys",
      rating: 4.5,
      stock: 13,
      region: "Global",
      gamePass: false,
    },
    {
      title: "Elden Ring",
      price: 39.99,
      oldPrice: 59.99,
      discount: 33,
      platform: "Xbox One/Series",
      seller: "SoulsKeys",
      rating: 4.8,
      stock: 8,
      region: "Global",
      gamePass: false,
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

        /* Xbox Header */
        .xbox-header {
          background: linear-gradient(135deg, #107c10 0%, #0e6b0e 100%);
          padding: 80px 0 60px;
          position: relative;
          overflow: hidden;
        }

        .xbox-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="30" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" stroke-width="3"/><path d="M 50,30 L 50,70 M 30,50 L 70,50" stroke="rgba(255,255,255,0.1)" stroke-width="3"/></svg>');
          background-size: 300px;
          opacity: 0.4;
        }

        .xbox-title {
          font-family: 'Orbitron', sans-serif;
          font-weight: 900;
          font-size: 56px;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 3px;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }

        .xbox-subtitle {
          font-family: 'Teko', sans-serif;
          font-size: 24px;
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: 2px;
        }

        /* Filter Sidebar */
        .filter-section {
          background: linear-gradient(135deg, #1e2329 0%, #2a313d 100%);
          border: 2px solid #353d4a;
          border-radius: 12px;
          padding: 24px;
          margin-bottom: 24px;
        }

        .filter-title {
          font-family: 'Orbitron', sans-serif;
          font-weight: 700;
          font-size: 16px;
          color: #BD9B52;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .filter-option {
          background: transparent;
          border: 2px solid #353d4a;
          color: #8b95a5;
          font-family: 'Rajdhani', sans-serif;
          font-weight: 600;
          letter-spacing: 1px;
          padding: 10px 16px;
          border-radius: 8px;
          transition: all 0.3s ease;
          width: 100%;
          text-align: left;
          margin-bottom: 8px;
          cursor: pointer;
        }

        .filter-option:hover,
        .filter-option.active {
          border-color: #BD9B52;
          color: #BD9B52;
          background: rgba(189, 155, 82, 0.1);
        }

        /* Sort Dropdown */
        .sort-select {
          background: #1e2329;
          border: 2px solid #353d4a;
          border-radius: 8px;
          padding: 10px 16px;
          color: #fff;
          font-family: 'Rajdhani', sans-serif;
          font-weight: 600;
          cursor: pointer;
        }

        .sort-select:focus {
          border-color: #BD9B52;
          outline: none;
        }

        /* Game Pass Info Box */
        .gamepass-info {
          background: linear-gradient(135deg, #107c10 0%, #0e6b0e 100%);
          border: 2px solid #107c10;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 24px;
          color: white;
        }

        .gamepass-info h6 {
          font-family: 'Orbitron', sans-serif;
          font-weight: 700;
          font-size: 16px;
          margin-bottom: 8px;
        }

        @media (max-width: 768px) {
          .xbox-title {
            font-size: 36px;
          }
        }
      `}</style>

      {/* Xbox Header */}
      <section className="xbox-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h1 className="xbox-title mb-3">
                <i className="bi bi-xbox me-3"></i>XBOX
              </h1>
              <p className="xbox-subtitle mb-0">
                Browse {xboxGames.length} verified Xbox game keys from trusted
                sellers
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
              platformType={"Xbox"}
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
                card_data={xboxGames}
                card_icon={"bi-xbox"}
                setGamesCount={setGamesCount}
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

export default Xbox;
