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

  const games = [
    {
      title: "Spider-Man 2",
      price: 54.99,
      oldPrice: 69.99,
      discount: 21,
      genre: "Action",
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
      genre: "Adventure",
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
      genre: "Racing",
      platform: "PS5",
      seller: "KeyMaster_Pro",
      rating: 4.7,
      stock: 8,
      region: "EU",
    },
    {
      title: "The Last of Us Part II",
      price: 29.99,
      oldPrice: 49.99,
      discount: 40,
      genre: "Adventure",
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
      genre: "Racing",
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
      genre: "Action",
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
      genre: "Action",
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
      genre: "Action",
      platform: "PS5",
      seller: "KeysExpress",
      rating: 4.4,
      stock: 25,
      region: "US/EU",
    },
    {
      title: "Cyberpunk 2077",
      price: 29.99,
      oldPrice: 59.99,
      discount: 50,
      genre: "Adventure",
      platform: "Ubisoft Connect",
      seller: "CyberKeys_Pro",
      rating: 4.5,
      stock: 42,
      region: "Global",
    },
    {
      title: "Baldur's Gate 3",
      price: 44.99,
      oldPrice: 69.99,
      discount: 36,
      genre: "Strategy",
      platform: "Steam",
      seller: "RPGMaster",
      rating: 4.9,
      stock: 28,
      region: "Global",
    },
    {
      title: "Starfield",
      price: 49.99,
      oldPrice: 69.99,
      discount: 29,
      genre: "Simulation",
      platform: "Steam",
      seller: "SpaceGamer_88",
      rating: 4.2,
      stock: 15,
      region: "Global",
    },
    {
      title: "Elden Ring",
      price: 39.99,
      oldPrice: 59.99,
      discount: 33,
      platform: "Steam",
      genre: "RPG",
      seller: "SoulsVault",
      rating: 4.8,
      stock: 7,
      region: "Global",
    },
    {
      title: "Red Dead Redemption 2",
      price: 24.99,
      oldPrice: 59.99,
      discount: 58,
      genre: "Action",
      platform: "Rockstar",
      seller: "WildWestKeys",
      rating: 4.7,
      stock: 33,
      region: "Global",
    },
    {
      title: "GTA V Premium Edition",
      price: 14.99,
      oldPrice: 49.99,
      discount: 70,
      genre: "Action",
      platform: "Rockstar",
      seller: "GTAExpress",
      rating: 4.6,
      stock: 51,
      region: "Global",
    },
    {
      title: "Hogwarts Legacy",
      price: 34.99,
      oldPrice: 59.99,
      discount: 42,
      genre: "Adventure",
      platform: "Steam",
      seller: "MagicKeys",
      rating: 4.5,
      stock: 19,
      region: "Global",
    },
    {
      title: "The Witcher 3 GOTY",
      price: 9.99,
      oldPrice: 39.99,
      discount: 75,
      genre: "Adventure",
      platform: "GOG",
      seller: "CDProjektFan",
      rating: 4.9,
      stock: 8,
      region: "Global",
    },
    {
      title: "Counter-Strike 2",
      price: 10.0,
      oldPrice: 10.0,
      discount: 0,
      genre: "Shooter",
      platform: "Steam",
      seller: "ValveOfficial",
      rating: 4.6,
      stock: 0,
      region: "Global",
    },
    {
      title: "Palworld",
      price: 24.99,
      oldPrice: 29.99,
      discount: 17,
      genre: "RPG",
      platform: "Steam",
      seller: "PocketpairKeys",
      rating: 4.4,
      stock: 62,
      region: "Global",
    },
    {
      title: "Call of Duty: MW3",
      price: 54.99,
      oldPrice: 69.99,
      discount: 21,
      genre: "Shooter",
      platform: "Battle.net",
      seller: "CODMaster",
      rating: 4.3,
      stock: 25,
      region: "Global",
    },
    {
      title: "Resident Evil 4 Remake",
      price: 39.99,
      oldPrice: 59.99,
      discount: 33,
      genre: "Action",
      platform: "Steam",
      seller: "HorrorKeys",
      rating: 4.8,
      stock: 14,
      region: "Global",
    },
    {
      title: "Starfield Premium Edition",
      price: 54.99,
      oldPrice: 99.99,
      discount: 45,
      genre: "Simulation",
      platform: "Xbox Series X/S",
      seller: "SpaceKeys_Pro",
      rating: 4.3,
      stock: 18,
      region: "Global",
    },
    {
      title: "Forza Horizon 5",
      price: 39.99,
      oldPrice: 59.99,
      discount: 33,
      genre: "Racing",
      platform: "Xbox One/Series",
      seller: "RacingMaster",
      rating: 4.8,
      stock: 31,
      region: "Global",
    },
    {
      title: "Halo Infinite Campaign",
      price: 34.99,
      oldPrice: 59.99,
      discount: 42,
      genre: "Action",
      platform: "Xbox Series X/S",
      seller: "SpartanKeys",
      rating: 4.5,
      stock: 24,
      region: "Global",
    },
    {
      title: "Sea of Thieves",
      price: 29.99,
      oldPrice: 49.99,
      discount: 40,
      genre: "Adventure",
      platform: "Xbox One/Series",
      seller: "PirateVault",
      rating: 4.6,
      stock: 42,
      region: "Global",
    },
    {
      title: "Cyberpunk 2077",
      price: 29.99,
      oldPrice: 59.99,
      discount: 50,
      genre: "Action",
      platform: "Xbox Series X/S",
      seller: "CyberGamer",
      rating: 4.4,
      stock: 15,
      region: "Global",
    },
    {
      title: "Red Dead Redemption 2",
      price: 24.99,
      oldPrice: 59.99,
      discount: 58,
      genre: "Action",
      platform: "Xbox One",
      seller: "WildWestXbox",
      rating: 4.8,
      stock: 9,
      region: "Global",
    },
    {
      title: "Call of Duty: MW3",
      price: 54.99,
      oldPrice: 69.99,
      discount: 21,
      genre: "Shooter",
      platform: "Xbox Series X/S",
      seller: "CODExpress",
      rating: 4.3,
      stock: 28,
      region: "Global",
    },
    {
      title: "Minecraft Deluxe",
      price: 19.99,
      oldPrice: 29.99,
      discount: 33,
      genre: "Adventure",
      platform: "Xbox One/Series",
      seller: "BlockBuster",
      rating: 4.9,
      stock: 67,
      region: "Global",
    },
    {
      title: "FIFA 24",
      price: 39.99,
      oldPrice: 69.99,
      discount: 43,
      genre: "Sports",
      platform: "Xbox Series X/S",
      seller: "SportsKeys",
      rating: 4.2,
      stock: 21,
      region: "Global",
    },
    {
      title: "Gears 5 Ultimate",
      price: 29.99,
      oldPrice: 59.99,
      discount: 50,
      genre: "Action",
      platform: "Xbox One/Series",
      seller: "GearsVault",
      rating: 4.6,
      stock: 19,
      region: "Global",
    },
    {
      title: "Assassin's Creed Valhalla",
      price: 34.99,
      oldPrice: 59.99,
      discount: 42,
      genre: "Adventure",
      platform: "Xbox Series X/S",
      seller: "VikingKeys",
      rating: 4.5,
      stock: 13,
      region: "Global",
    },
    {
      title: "Elden Ring",
      price: 39.99,
      oldPrice: 59.99,
      discount: 33,
      genre: "RPG",
      platform: "Xbox One/Series",
      seller: "SoulsKeys",
      rating: 4.8,
      stock: 8,
      region: "Global",
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
                card_data={games}
                setGamesCount={setGamesCount}
                platform={platform}
                discount={discount}
                price={price}
                sortBy={sortBy}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotDeals;
