const GamingCard = ({
  card_data,
  card_icon,
  setGamesCount,
  isStockAvailable = "All",
  platform,
  discount = "All",
  price = "All",
  genre = "All",
  region = "All",
  sortBy,
  searchValue = "",
}) => {
  // Filter games
  const games = card_data
    .filter(
      (c) =>
        isStockAvailable === "All" ||
        (isStockAvailable === true && c.stock > 0) ||
        (isStockAvailable === false && c.stock === 0),
    )
    .filter((c) => platform === "All" || c.platform === platform)
    .filter(
      (c) =>
        discount === "All" ||
        c.discount >= discount ||
        (c.discount >= discount[0] && c.discount < discount[1]),
    )
    .filter(
      (c) =>
        price === "All" ||
        c.price >= price ||
        (c.price >= price[0] && c.price < price[1]),
    )
    .filter((c) => genre === "All" || c.genre === genre)
    .filter((c) => region === "All" || c.region === region)
    .filter(
      (c) =>
        searchValue === "" ||
        c.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        c.genre.toLowerCase().includes(searchValue.toLowerCase()) ||
        c.platform.toLowerCase().includes(searchValue.toLowerCase()),
    )
    .sort((a, b) => {
      if (sortBy === "name") {
        return a.title.localeCompare(b.title);
      }

      if (sortBy === "price-low") {
        return a.price - b.price;
      }

      if (sortBy === "price-high") {
        return b.price - a.price;
      }

      if (sortBy === "discount") {
        return b.discount - a.discount;
      }

      if (sortBy === "rating") {
        return parseFloat(b.rating) - parseFloat(a.rating);
      }

      return 0;
    });

  // Get games count
  setGamesCount(games.length);

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

        /* Game Card */
        .game-card {
          background: linear-gradient(135deg, #1e2329 0%, #2a313d 100%);
          border: 2px solid #353d4a;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          position: relative;
          height: 100%;
        }

        .game-card::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border-radius: 12px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .game-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(189, 155, 82, 0.3);
          border: 2px solid #BD9B52;
        }

        .game-card:hover::before {
          opacity: 1;
        }

        .game-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          background: linear-gradient(135deg, #800000 0%, #FF0000 100%);
        }
        
        .game-img.xbox {
          background: linear-gradient(135deg, #107c10 0%, #0e6b0e 100%);
        }

        .game-img.ps4,
        .game-img.ps5 {
          background: linear-gradient(135deg, #003087 0%, #0070cc 100%);
        }

        .discount-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: linear-gradient(135deg, #ff0080 0%, #ff8c00 100%);
          color: white;
          font-family: 'Orbitron', sans-serif;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 14px;
          letter-spacing: 1px;
          box-shadow: 0 4px 15px rgba(255, 0, 128, 0.4);
        }

        .free-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: linear-gradient(135deg, #00ff88 0%, #00ccaa 100%);
          color: #000;
          font-family: 'Orbitron', sans-serif;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 14px;
          letter-spacing: 1px;
          box-shadow: 0 4px 15px rgba(0, 255, 136, 0.4);
        }

        .stock-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          backdrop-filter: blur(10px);
          color: #fff;
          font-size: 11px;
          padding: 4px 10px;
          border-radius: 6px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .platform-badge {
          display: inline-block;
          background: rgba(185, 11, 6, 0.2);
          border: 1px solid rgba(185, 11, 6, 0.4);
          color: #B90B06;
          font-size: 11px;
          padding: 4px 10px;
          border-radius: 6px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .platform-badge.steam {
          background: rgba(23, 26, 33, 0.5);
          border-color: rgba(102, 192, 244, 0.4);
          color: #66c0f4;
        }

        .platform-badge.epic {
          background: rgba(18, 18, 18, 0.5);
          border-color: rgba(255, 255, 255, 0.4);
          color: #fff;
        }

        .platform-badge.gog {
          background: rgba(134, 26, 168, 0.2);
          border-color: rgba(134, 26, 168, 0.4);
          color: #b666d2;
        }

        .platform-badge.rockstar {
          display: inline-block;
          background: rgba(189, 155, 82, 0.2);
          border: 1px solid rgba(189, 155, 82, 0.4);
          color: #BD9B52;
          font-size: 11px;
          padding: 4px 10px;
          border-radius: 6px;
          font-weight: 700;
          letter-spacing: 1px;
        }
        
        .platform-badge.ps4,
        .platform-badge.ps5 {
          background: rgba(0, 89, 180, 0.2);
          border-color: rgba(0, 89, 180, 0.4);
          color: #0059B4;
        }
        
        .platform-badge.xbox {
          background: rgba(16, 124, 16, 0.2);
          border-color: rgba(16, 124, 16, 0.4);
          color: #107c10;
        }

        .seller-info {
          font-size: 12px;
          color: #8b95a5;
          font-weight: 600;
        }

        .verified-seller {
          color: #00ff88;
        }

        .price-tag {
          font-family: 'Orbitron', sans-serif;
          font-weight: 700;
          font-size: 28px;
          color: #BD9B52;
          text-shadow: 0 0 20px rgba(189, 155, 82, 0.5);
        }

        .price-tag.free {
          color: #00ff88;
          text-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
        }

        .old-price {
          text-decoration: line-through;
          color: #5a6270;
          font-size: 16px;
        }

        .rating-stars {
          color: #ffd700;
          font-size: 14px;
        }
      `}</style>

      <div className="row g-4">
        {games.map((game, index) => (
          <div key={index} className="col-lg-4 col-md-6">
            <div className="game-card">
              <div style={{ position: "relative" }}>
                <div
                  className={`game-img ${game.platform.toLowerCase().replace(/\//g, " ")} d-flex align-items-center justify-content-center`}
                >
                  <i
                    className={`bi ${card_icon}`}
                    style={{ fontSize: "48px", color: "#353d4a" }}
                  ></i>
                </div>
                {game.discount !== 0 && (
                  <span className="discount-badge">-{game.discount}%</span>
                )}
                <span
                  className={`stock-badge ${game.stock === 0 ? "bg-danger" : "bg-success"}`}
                >
                  {game.stock === 0 ? `Out of stock` : `${game.stock} in stock`}
                </span>
              </div>
              <div className="p-3">
                <h5
                  style={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "18px",
                    marginBottom: "8px",
                  }}
                >
                  {game.title}
                </h5>
                <div className="mb-2 d-flex gap-2 align-items-center flex-wrap">
                  <span
                    className={`platform-badge ${game.platform.toLowerCase().replace(/\//g, " ")}`}
                  >
                    {game.platform}
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      background: "rgba(189, 155, 82, 0.15)",
                      border: "1px solid rgba(189, 155, 82, 0.3)",
                      color: "#BD9B52",
                      fontSize: "10px",
                      padding: "3px 8px",
                      borderRadius: "4px",
                      fontWeight: 600,
                      letterSpacing: "0.5px",
                    }}
                  >
                    {game.genre}
                  </span>
                  <span
                    style={{
                      color: "#8b95a5",
                      fontSize: "10px",
                      fontWeight: 600,
                    }}
                  >
                    {game.region}
                  </span>
                </div>
                <div className="seller-info mb-2">
                  <i className="bi bi-person-check verified-seller me-1"></i>
                  Sold by:{" "}
                  <span style={{ color: "#BD9B52" }}>{game.seller}</span>
                </div>
                <div className="rating-stars mb-3">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`bi bi-star${i < Math.floor(game.rating) ? "-fill" : ""}`}
                    ></i>
                  ))}
                  <span
                    style={{
                      color: "#8b95a5",
                      fontSize: "13px",
                      marginLeft: "8px",
                    }}
                  >
                    ({game.rating})
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div>
                    <div className="price-tag">${game.price}</div>
                    {game.price !== game.oldPrice && (
                      <div className="old-price" style={{ color: "#8b95a5" }}>
                        ${game.oldPrice}
                      </div>
                    )}
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-gaming flex-grow-1"
                    style={{ padding: "10px", fontSize: "13px" }}
                  >
                    <i className="bi bi-cart-plus me-1"></i>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GamingCard;
