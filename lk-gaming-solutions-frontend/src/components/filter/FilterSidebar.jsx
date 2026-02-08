import { useLocation } from "react-router-dom";

const FilterSidebar = ({
  isStockAvailable,
  setIsStockAvailable,
  platform,
  setPlatform,
  discount,
  setDiscount,
  price,
  setPrice,
  genre,
  setGenre,
  region,
  setRegion,
}) => {
  const { pathname } = useLocation();
  return (
    <>
      <style>
        {`/* Filter Sidebar */
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
      `}
      </style>

      <div className="col-lg-3 mb-4">
        {/* Stock Filter */}
        {pathname !== "/hot-deals" && (
          <div className="filter-section">
            <h6 className="filter-title">Stock</h6>
            <button
              className={`filter-option ${isStockAvailable === "All" ? "active" : ""}`}
              onClick={() => setIsStockAvailable("All")}
            >
              All
            </button>
            <button
              className={`filter-option ${isStockAvailable === true ? "active" : ""}`}
              onClick={() => setIsStockAvailable(true)}
            >
              In Stock
            </button>
            <button
              className={`filter-option ${isStockAvailable === false ? "active" : ""}`}
              onClick={() => setIsStockAvailable(false)}
            >
              Out of Stock
            </button>
          </div>
        )}

        {/* Platform Filter */}
        <div className="filter-section">
          <h6 className="filter-title">Platform</h6>
          <button
            className={`filter-option ${platform === "All" ? "active" : ""}`}
            onClick={() => setPlatform("All")}
          >
            <i className="bi bi-check2 me-2"></i>All Platforms
          </button>
          {["/pc", "/hot-deals", "/browse-games"].includes(pathname) && (
            <>
              <button
                className={`filter-option ${platform === "Steam" ? "active" : ""}`}
                onClick={() => setPlatform("Steam")}
              >
                <i className="bi bi-steam me-2"></i>Steam
              </button>
              <button
                className={`filter-option ${platform === "Epic Games" ? "active" : ""}`}
                onClick={() => setPlatform("Epic Games")}
              >
                <i className="bi bi-controller me-2"></i>Epic Games
              </button>
              <button
                className={`filter-option ${platform === "GOG" ? "active" : ""}`}
                onClick={() => setPlatform("GOG")}
              >
                <i className="bi bi-controller me-2"></i>GOG
              </button>
              <button
                className={`filter-option ${platform === "Origin" ? "active" : ""}`}
                onClick={() => setPlatform("Origin")}
              >
                <i className="bi bi-controller me-2"></i>Origin
              </button>
              <button
                className={`filter-option ${platform === "Battle.net" ? "active" : ""}`}
                onClick={() => setPlatform("Battle.net")}
              >
                <i className="bi bi-controller me-2"></i>Battle.net
              </button>
              <button
                className={`filter-option ${platform === "Ubisoft Connect" ? "active" : ""}`}
                onClick={() => setPlatform("Ubisoft Connect")}
              >
                <i className="bi bi-controller me-2"></i>Ubisoft Connect
              </button>
              <button
                className={`filter-option ${platform === "Rockstar" ? "active" : ""}`}
                onClick={() => setPlatform("Rockstar")}
              >
                <i className="bi bi-controller me-2"></i>Rockstar
              </button>
            </>
          )}
          {["/play-station", "/hot-deals", "/browse-games"].includes(pathname) && (
            <>
              <button
                className={`filter-option ${platform === "PS5" ? "active" : ""}`}
                onClick={() => setPlatform("PS5")}
              >
                <i className="bi bi-playstation me-2"></i>PS5
              </button>
              <button
                className={`filter-option ${platform === "PS4" ? "active" : ""}`}
                onClick={() => setPlatform("PS4")}
              >
                <i className="bi bi-playstation me-2"></i>PS4
              </button>
              <button
                className={`filter-option ${platform === "PS4/PS5" ? "active" : ""}`}
                onClick={() => setPlatform("PS4/PS5")}
              >
                <i className="bi bi-playstation me-2"></i>PS4/PS5
              </button>
            </>
          )}
          {["/xbox", "/hot-deals", "/browse-games"].includes(pathname) && (
            <>
              <button
                className={`filter-option ${platform === "Xbox Series X/S" ? "active" : ""}`}
                onClick={() => setPlatform("Xbox Series X/S")}
              >
                <i className="bi bi-xbox me-2"></i>Xbox Series X/S
              </button>
              <button
                className={`filter-option ${platform === "Xbox One" ? "active" : ""}`}
                onClick={() => setPlatform("Xbox One")}
              >
                <i className="bi bi-xbox me-2"></i>Xbox One
              </button>
              <button
                className={`filter-option ${platform === "Xbox One/Series" ? "active" : ""}`}
                onClick={() => setPlatform("Xbox One/Series")}
              >
                <i className="bi bi-xbox me-2"></i>Xbox One/Series
              </button>
            </>
          )}
        </div>

        {/* Discount Filter */}
        {pathname === "/hot-deals" && (
          <div className="filter-section">
            <h6 className="filter-title">Discount</h6>
            <button
              className={`filter-option ${discount === "All" ? "active" : ""}`}
              onClick={() => setDiscount("All")}
            >
              All Deals
            </button>
            <button
              className={`filter-option ${discount === 70 ? "active" : ""}`}
              onClick={() => setDiscount(70)}
            >
              70% OFF or more
            </button>
            <button
              className={`filter-option ${discount[0] === 50 && discount[1] === 70 ? "active" : ""}`}
              onClick={() => setDiscount([50, 70])}
            >
              50% - 70% OFF
            </button>
            <button
              className={`filter-option ${discount[0] === 30 && discount[1] === 50 ? "active" : ""}`}
              onClick={() => setDiscount([30, 50])}
            >
              30% - 50% OFF
            </button>
          </div>
        )}

        {/* Price Filter */}
        <div className="filter-section">
          <h6 className="filter-title">Price Range</h6>
          <button
            className={`filter-option ${price === "All" ? "active" : ""}`}
            onClick={() => setPrice("All")}
          >
            All Prices
          </button>
          <button
            className={`filter-option ${price[0] === 0 && price[1] === 10 ? "active" : ""}`}
            onClick={() => setPrice([0, 10])}
          >
            Under $10
          </button>
          <button
            className={`filter-option ${price[0] === 10 && price[1] === 30 ? "active" : ""}`}
            onClick={() => setPrice([10, 30])}
          >
            $10 - $30
          </button>
          <button
            className={`filter-option ${price[0] === 30 && price[1] === 50 ? "active" : ""}`}
            onClick={() => setPrice([30, 50])}
          >
            $30 - $50
          </button>
          <button
            className={`filter-option ${price === 50 ? "active" : ""}`}
            onClick={() => setPrice(50)}
          >
            Over $50
          </button>
        </div>

        {/* Genre Filter */}
        {pathname !== "/hot-deals" && (
          <div className="filter-section">
            <h6 className="filter-title">Genre</h6>
            <button
              className={`filter-option ${genre === "All" ? "active" : ""}`}
              onClick={() => setGenre("All")}
            >
              All Genre
            </button>
            <button
              className={`filter-option ${genre === "Action" ? "active" : ""}`}
              onClick={() => setGenre("Action")}
            >
              Action
            </button>
            <button
              className={`filter-option ${genre === "Adventure" ? "active" : ""}`}
              onClick={() => setGenre("Adventure")}
            >
              Adventure
            </button>
            <button
              className={`filter-option ${genre === "RPG" ? "active" : ""}`}
              onClick={() => setGenre("RPG")}
            >
              RPG
            </button>
            <button
              className={`filter-option ${genre === "Strategy" ? "active" : ""}`}
              onClick={() => setGenre("Strategy")}
            >
              Strategy
            </button>
            <button
              className={`filter-option ${genre === "Simulation" ? "active" : ""}`}
              onClick={() => setGenre("Simulation")}
            >
              Simulation
            </button>
            <button
              className={`filter-option ${genre === "Shooter" ? "active" : ""}`}
              onClick={() => setGenre("Shooter")}
            >
              Shooter
            </button>
            <button
              className={`filter-option ${genre === "Sports" ? "active" : ""}`}
              onClick={() => setGenre("Sports")}
            >
              Sports
            </button>
            <button
              className={`filter-option ${genre === "Racing" ? "active" : ""}`}
              onClick={() => setGenre("Racing")}
            >
              Racing
            </button>
            <button
              className={`filter-option ${genre === "Indie" ? "active" : ""}`}
              onClick={() => setGenre("Indie")}
            >
              Indie
            </button>
          </div>
        )}

        {/* Region Filter */}
        {pathname !== "/hot-deals" && (
          <div className="filter-section">
            <h6 className="filter-title">Region</h6>
            <button
              className={`filter-option ${region === "All" ? "active" : ""}`}
              onClick={() => setRegion("All")}
            >
              All Regions
            </button>
            <button
              className={`filter-option ${region === "Global" ? "active" : ""}`}
              onClick={() => setRegion("Global")}
            >
              Global
            </button>
            <button
              className={`filter-option ${region === "EU" ? "active" : ""}`}
              onClick={() => setRegion("EU")}
            >
              EU
            </button>
            <button
              className={`filter-option ${region === "US" ? "active" : ""}`}
              onClick={() => setRegion("US")}
            >
              US
            </button>
            <button
              className={`filter-option ${region === "Asia" ? "active" : ""}`}
              onClick={() => setRegion("Asia")}
            >
              Asia
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default FilterSidebar;
