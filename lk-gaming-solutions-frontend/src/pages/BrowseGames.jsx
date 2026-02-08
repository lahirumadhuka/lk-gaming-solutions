import React, { useState } from "react";
import GamingCard from "../components/card/GamingCard";
import FilterSidebar from "../components/filter/FilterSidebar";
import SortingSelect from "../components/filter/SortingSelect";
import UseTitleName from "../utils/UseTitleName";

const BrowseGames = () => {
  UseTitleName("Browse Games");

  const [sortBy, setSortBy] = useState("name");
  const [gamesCount, setGamesCount] = useState();
  const [isStockAvailable, setIsStockAvailable] = useState("All");
  const [platform, setPlatform] = useState("All");
  const [discount, setDiscount] = useState("All");
  const [price, setPrice] = useState("All");
  const [genre, setGenre] = useState("All");
  const [region, setRegion] = useState("All");
  const [searchValue, setSearchValue] = useState("");

  const allGames = [
    {
      title: "Cyberpunk 2077",
      price: 29.99,
      oldPrice: 59.99,
      discount: 50,
      platform: "Steam",
      platformType: "Steam",
      seller: "CyberKeys_Pro",
      rating: 4.5,
      stock: 42,
      region: "Global",
      genre: "RPG",
      releaseYear: 2020,
    },
    {
      title: "Spider-Man 2",
      price: 54.99,
      oldPrice: 69.99,
      discount: 21,
      platform: "PlayStation",
      platformType: "PS5",
      seller: "ProGamer_88",
      rating: 4.9,
      stock: 15,
      region: "Global",
      genre: "Action",
      releaseYear: 2023,
    },
    {
      title: "Starfield Premium",
      price: 54.99,
      oldPrice: 99.99,
      discount: 45,
      platform: "Xbox",
      platformType: "Xbox Series X/S",
      seller: "SpaceKeys_Pro",
      rating: 4.3,
      stock: 18,
      region: "Global",
      genre: "Adventure",
      releaseYear: 2023,
    },
    {
      title: "Baldur's Gate 3",
      price: 44.99,
      oldPrice: 69.99,
      discount: 36,
      platform: "Steam",
      platformType: "Steam",
      seller: "RPGMaster",
      rating: 4.9,
      stock: 28,
      region: "Global",
      genre: "RPG",
      releaseYear: 2023,
    },
    {
      title: "God of War Ragnarök",
      price: 44.99,
      oldPrice: 69.99,
      discount: 35,
      platform: "PlayStation",
      platformType: "PS4/PS5",
      seller: "GameHunter",
      rating: 4.8,
      stock: 23,
      region: "Global",
      genre: "Action",
      releaseYear: 2022,
    },
    {
      title: "Forza Horizon 5",
      price: 39.99,
      oldPrice: 59.99,
      discount: 33,
      platform: "Xbox",
      platformType: "Xbox One/Series",
      seller: "RacingMaster",
      rating: 4.8,
      stock: 31,
      region: "Global",
      genre: "Racing",
      releaseYear: 2021,
    },
    {
      title: "Elden Ring",
      price: 39.99,
      oldPrice: 59.99,
      discount: 33,
      platform: "Steam",
      platformType: "Steam",
      seller: "SoulsVault",
      rating: 4.8,
      stock: 7,
      region: "Global",
      genre: "Action",
      releaseYear: 2022,
    },
    {
      title: "Hogwarts Legacy",
      price: 34.99,
      oldPrice: 59.99,
      discount: 42,
      platform: "Steam",
      platformType: "Steam",
      seller: "MagicKeys",
      rating: 4.5,
      stock: 19,
      region: "Global",
      genre: "Adventure",
      releaseYear: 2023,
    },
    {
      title: "The Last of Us Part II",
      price: 29.99,
      oldPrice: 49.99,
      discount: 40,
      platform: "PlayStation",
      platformType: "PS4",
      seller: "TrustedKeys",
      rating: 4.6,
      stock: 31,
      region: "Global",
      genre: "Action",
      releaseYear: 2020,
    },
    {
      title: "Halo Infinite Campaign",
      price: 34.99,
      oldPrice: 59.99,
      discount: 42,
      platform: "Xbox",
      platformType: "Xbox Series X/S",
      seller: "SpartanKeys",
      rating: 4.5,
      stock: 24,
      region: "Global",
      genre: "Shooter",
      releaseYear: 2021,
    },
    {
      title: "Red Dead Redemption 2",
      price: 24.99,
      oldPrice: 59.99,
      discount: 58,
      platform: "Epic Games",
      platformType: "Rockstar",
      seller: "WildWestKeys",
      rating: 4.7,
      stock: 33,
      region: "Global",
      genre: "Action",
      releaseYear: 2019,
    },
    {
      title: "Gran Turismo 7",
      price: 49.99,
      oldPrice: 69.99,
      discount: 28,
      platform: "PlayStation",
      platformType: "PS5",
      seller: "SpeedRacer",
      rating: 4.5,
      stock: 12,
      region: "Global",
      genre: "Racing",
      releaseYear: 2022,
    },
    {
      title: "Call of Duty: MW3",
      price: 54.99,
      oldPrice: 69.99,
      discount: 21,
      platform: "Epic Games",
      platformType: "Battle.net",
      seller: "CODMaster",
      rating: 4.3,
      stock: 25,
      region: "Global",
      genre: "Shooter",
      releaseYear: 2023,
    },
    {
      title: "FIFA 24",
      price: 39.99,
      oldPrice: 69.99,
      discount: 43,
      platform: "Xbox",
      platformType: "Xbox Series X/S",
      seller: "SportsKeys",
      rating: 4.2,
      stock: 21,
      region: "Global",
      genre: "Sports",
      releaseYear: 2023,
    },
    {
      title: "The Witcher 3 GOTY",
      price: 9.99,
      oldPrice: 39.99,
      discount: 75,
      platform: "Epic Games",
      platformType: "GOG",
      seller: "CDProjektFan",
      rating: 4.9,
      stock: 8,
      region: "Global",
      genre: "RPG",
      releaseYear: 2015,
    },
    {
      title: "Resident Evil 4 Remake",
      price: 39.99,
      oldPrice: 59.99,
      discount: 33,
      platform: "Epic Games",
      platformType: "Steam",
      seller: "HorrorKeys",
      rating: 4.8,
      stock: 14,
      region: "Global",
      genre: "Horror",
      releaseYear: 2023,
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
          background: rgba(30, 35, 41, 0.8);
          border: 2px solid #353d4a;
          border-radius: 50px;
          padding: 16px 60px 16px 24px;
          color: #fff;
          font-family: 'Rajdhani', sans-serif;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .search-input:focus {
          background: rgba(30, 35, 41, 0.95);
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
                Discover {gamesCount} game keys across all platforms from
                trusted sellers
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
              discount={discount}
              setDiscount={setDiscount}
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
                card_data={allGames}
                card_icon={"bi-grid-3x3-gap-fill"}
                setGamesCount={setGamesCount}
                isStockAvailable={isStockAvailable}
                platform={platform}
                price={price}
                discount={discount}
                genre={genre}
                region={region}
                sortBy={sortBy}
                searchValue={searchValue}
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

export default BrowseGames;
