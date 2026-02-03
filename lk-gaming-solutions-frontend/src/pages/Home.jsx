import React, { useState, useEffect } from "react";

export default function GameKeysHomepage() {
  const [countdown, setCountdown] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const featuredGames = [
    {
      title: "Cyberpunk 2077",
      price: 29.99,
      oldPrice: 59.99,
      discount: 50,
      platform: "Steam",
      rating: 4.5,
    },
    {
      title: "Elden Ring",
      price: 39.99,
      oldPrice: 59.99,
      discount: 33,
      platform: "Steam",
      rating: 4.8,
    },
    {
      title: "Baldur's Gate 3",
      price: 44.99,
      oldPrice: 69.99,
      discount: 36,
      platform: "Steam",
      rating: 4.9,
    },
    {
      title: "Starfield",
      price: 69.99,
      oldPrice: 69.99,
      discount: 0,
      platform: "Steam",
      rating: 4.2,
    },
  ];

  const hotDeals = [
    {
      title: "Call of Duty MW3",
      price: 54.99,
      oldPrice: 49.99,
      discount: 10,
      platform: "Battle.net",
    },
    { title: "FIFA 24", price: 39.99, oldPrice: 20, discount: 40, platform: "Origin" },
    { title: "Hogwarts Legacy", price: 34.99, oldPrice: 20, discount: 42, platform: "Steam" },
    { title: "Red Dead 2", price: 24.99, oldPrice: 20, discount: 58, platform: "Rockstar" },
    {
      title: "GTA V Premium",
      price: 14.99,
      oldPrice: 20,
      discount: 70,
      platform: "Rockstar",
    },
    { title: "The Witcher 3", price: 9.99, oldPrice: 20, discount: 75, platform: "GOG" },
  ];

  const playStation = [
    {
      title: "Call of Duty MW3",
      price: 54.99,
      oldPrice: 49.99,
      discount: 10,
      platform: "Battle.net",
    },
    { title: "FIFA 24", price: 39.99, oldPrice: 20, discount: 40, platform: "Origin" },
    { title: "Hogwarts Legacy", price: 34.99, oldPrice: 20, discount: 42, platform: "Steam" },
    { title: "Red Dead 2", price: 24.99, oldPrice: 20, discount: 58, platform: "Rockstar" },
    {
      title: "GTA V Premium",
      price: 14.99,
      oldPrice: 20,
      discount: 70,
      platform: "Rockstar",
    },
    { title: "The Witcher 3", price: 9.99, oldPrice: 20, discount: 75, platform: "GOG" },
  ];

  const xbox = [
    {
      title: "Call of Duty MW3",
      price: 54.99,
      oldPrice: 49.99,
      discount: 10,
      platform: "Battle.net",
    },
    { title: "FIFA 24", price: 39.99, oldPrice: 20, discount: 40, platform: "Origin" },
    { title: "Hogwarts Legacy", price: 34.99, oldPrice: 20, discount: 42, platform: "Steam" },
    { title: "Red Dead 2", price: 24.99, oldPrice: 20, discount: 58, platform: "Rockstar" },
    {
      title: "GTA V Premium",
      price: 14.99,
      oldPrice: 20,
      discount: 70,
      platform: "Rockstar",
    },
    { title: "The Witcher 3", price: 9.99, oldPrice: 20, discount: 75, platform: "GOG" },
  ];


  const pc = [
    {
      title: "Call of Duty MW3",
      price: 54.99,
      oldPrice: 49.99,
      discount: 10,
      platform: "Battle.net",
    },
    { title: "FIFA 24", price: 39.99, oldPrice: 20, discount: 40, platform: "Origin" },
    { title: "Hogwarts Legacy", price: 34.99, oldPrice: 20, discount: 42, platform: "Steam" },
    { title: "Red Dead 2", price: 24.99, oldPrice: 20, discount: 58, platform: "Rockstar" },
    {
      title: "GTA V Premium",
      price: 14.99,
      oldPrice: 20,
      discount: 70,
      platform: "Rockstar",
    },
    { title: "The Witcher 3", price: 9.99, oldPrice: 20, discount: 75, platform: "GOG" },
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

        /* Animated Background */
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

        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, #0a0e1a 0%, #1a1f2e 100%);
          position: relative;
          padding: 120px 0 80px;
          overflow: hidden;
        }

        .hero-section::before {
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

        .hero-title {
          font-family: 'Orbitron', sans-serif;
          font-weight: 900;
          font-size: 72px;
          line-height: 1.1;
          background: linear-gradient(135deg, #BD9B52 0%, #D4AF6A 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 80px rgba(189, 155, 82, 0.3);
          letter-spacing: 3px;
          animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
          from { filter: drop-shadow(0 0 20px rgba(189, 155, 82, 0.5)); }
          to { filter: drop-shadow(0 0 40px rgba(189, 155, 82, 0.8)); }
        }

        .hero-subtitle {
          font-family: 'Teko', sans-serif;
          font-size: 28px;
          color: #8b95a5;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .btn-browse-games {
          background: linear-gradient(135deg, #BD9B52 0%, #D4AF6A 100%);
          border: none;
          color: #000;
          font-weight: 700;
          font-family: 'Orbitron', sans-serif;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 16px 48px;
          font-size: 18px;
          border-radius: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 8px 30px rgba(189, 155, 82, 0.4);
          position: relative;
          overflow: hidden;
        }

        .btn-browse-games::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }

        .btn-browse-games:hover::before {
          left: 100%;
        }

        .btn-browse-games:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(189, 155, 82, 0.6);
          color: #000000;
        }

        /* Game Card */
        .game-card {
          background: linear-gradient(135deg, #1e2329 0%, #2a313d 100%);
          border: 2px solid #353d4a;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          position: relative;
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
          border: 1px solid #BD9B52;
        }

        .game-card:hover::before {
          opacity: 1;
        }

        .game-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          background: linear-gradient(135deg, #2a313d 0%, #1e2329 100%);
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

        .platform-badge {
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

        .price-tag {
          font-family: 'Orbitron', sans-serif;
          font-weight: 700;
          font-size: 28px;
          color: #BD9B52;
          text-shadow: 0 0 20px rgba(189, 155, 82, 0.5);
        }

        .old-price {
          text-decoration: line-through;
          color: #5a6270;
          font-size: 16px;
        }

        /* Section Title */
        .section-title {
          font-family: 'Orbitron', sans-serif;
          font-weight: 900;
          font-size: 42px;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 3px;
          position: relative;
          padding-bottom: 16px;
          margin-bottom: 40px;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #BD9B52 0%, transparent 100%);
        }

        /* Countdown Timer */
        .countdown-timer {
          display: flex;
          gap: 16px;
          justify-content: center;
          margin-top: 24px;
        }

        .countdown-item {
          background: linear-gradient(135deg, #1e2329 0%, #2a313d 100%);
          border: 2px solid #353d4a;
          border-radius: 12px;
          padding: 16px 24px;
          text-align: center;
          min-width: 80px;
        }

        .countdown-number {
          font-family: 'Orbitron', sans-serif;
          font-weight: 900;
          font-size: 32px;
          color: #BD9B52;
          display: block;
          text-shadow: 0 0 20px rgba(189, 155, 82, 0.5);
        }

        .countdown-label {
          font-size: 12px;
          color: #8b95a5;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 4px;
        }

        /* Stats */
        .stat-card {
          background: linear-gradient(135deg, #1e2329 0%, #2a313d 100%);
          border: 2px solid #353d4a;
          border-radius: 12px;
          padding: 24px;
          text-align: center;
        }

        .stat-number {
          font-family: 'Orbitron', sans-serif;
          font-weight: 900;
          font-size: 48px;
          background: linear-gradient(135deg, #BD9B52 0%, #D4AF6A 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          color: #8b95a5;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 1px;
          margin-top: 8px;
        }

        /* Rating Stars */
        .rating-stars {
          color: #ffd700;
          font-size: 14px;
        }

        /* Search Bar */
        .search-bar {
          background: #1e2329;
          border: 2px solid #353d4a;
          border-radius: 50px;
          padding: 12px 24px;
          color: #fff;
          font-family: 'Rajdhani', sans-serif;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .search-bar:focus {
          background: #1e2329;
          border-color: #BD9B52;
          box-shadow: 0 0 20px rgba(189, 155, 82, 0.3);
          color: #fff;
          outline: none;
        }

        .search-bar::placeholder {
          color: #5a6270;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 42px;
          }
          .section-title {
            font-size: 32px;
          }

          .btn-browse-games {
            width: 100%;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section px-3 px-lg-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1
                className="hero-title mb-4"
                style={{ animation: "glow 2s ease-in-out infinite alternate" }}
              >
                BUY & SELL GAME KEYS
              </h1>
              <p className="hero-subtitle mb-4">
                Your Marketplace for Digital Game Keys • Best Prices • Safe
                Trading
              </p>
              <p
                className="mb-4"
                style={{ fontSize: "18px", fontWeight: 600 }}
              >
                Join over 100,000+ gamers buying and selling game keys. List
                your unused keys or find the best deals from trusted sellers
                worldwide.
              </p>
              <div className="d-flex justify-content-center">
                <button className="btn btn-browse-games">
                  <i className="bi bi-search me-2"></i>Browse Games
                </button>
              </div>

              {/* Countdown Timer */}
              <div className="mt-5 px-3 px-lg-0">
                <h5
                  style={{
                    color: "#8b95a5",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    marginBottom: "16px",
                  }}
                >
                  <i
                    className="bi bi-clock-fill me-2"
                    style={{ color: "#ff0080" }}
                  ></i>
                  FLASH SALE ENDS IN
                </h5>
                <div className="countdown-timer">
                  <div className="countdown-item">
                    <span className="countdown-number">
                      {String(countdown.hours).padStart(2, "0")}
                    </span>
                    <div className="countdown-label">Hours</div>
                  </div>
                  <div className="countdown-item">
                    <span className="countdown-number">
                      {String(countdown.minutes).padStart(2, "0")}
                    </span>
                    <div className="countdown-label">Minutes</div>
                  </div>
                  <div className="countdown-item">
                    <span className="countdown-number">
                      {String(countdown.seconds).padStart(2, "0")}
                    </span>
                    <div className="countdown-label">Seconds</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="stat-card">
                    <div className="stat-number">50K+</div>
                    <div className="stat-label">Games Available</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="stat-card">
                    <div className="stat-number">100K+</div>
                    <div className="stat-label">Trusted Sellers</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="stat-card">
                    <div className="stat-number">24/7</div>
                    <div className="stat-label">Buyer Protection</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="stat-card">
                    <div className="stat-number">Instant</div>
                    <div className="stat-label">Key Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="gaming-bg py-5 px-3 px-lg-0">
        <div className="container py-4">
          <h2 className="section-title" style={{ color: "#ffd700" }}><i className="bi bi-star-fill"></i> Featured Games</h2>
          <div className="row g-4">
            {featuredGames.map((game, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="game-card">
                  <div style={{ position: "relative" }}>
                    <div className="game-img d-flex align-items-center justify-content-center">
                      <i
                        className="bi bi-controller"
                        style={{ fontSize: "64px", color: "#353d4a" }}
                      ></i>
                    </div>
                    {game.discount !== 0 && <span className="discount-badge">-{game.discount}%</span>}
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
                    <div className="mb-2">
                      <span className="platform-badge">{game.platform}</span>
                    </div>
                    <div className="rating-stars mb-2">
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
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <div className="price-tag">${game.price}</div>
                        <div className="old-price" style={{color: "#8b95a5", visibility: `${game.oldPrice === game.price ? "hidden" : ""}`}}>${game.oldPrice}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hot Deals Section */}
      <section className="gaming-bg py-5 px-3 px-lg-0">
        <div className="container py-4">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h2 className="section-title mb-0" style={{ color: "#ff0080" }}>
              <i className="bi bi-fire me-3"></i>
              Hot Deals
            </h2>
            <a
              href="#"
              style={{
                color: "#BD9B52",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "16px",
              }}
            >
              View All <i className="bi bi-arrow-right"></i>
            </a>
          </div>
          <div className="row g-3">
            {hotDeals.map((game, index) => (
              <div key={index} className="col-lg-2 col-md-4 col-6">
                <div className="game-card">
                  <div style={{ position: "relative" }}>
                    <div className="game-img d-flex align-items-center justify-content-center">
                      <i
                        className="bi bi-controller"
                        style={{ fontSize: "48px", color: "#353d4a" }}
                      ></i>
                    </div>
                    {game.discount !== 0 && <span className="discount-badge">-{game.discount}%</span>}
                  </div>
                  <div className="p-3">
                    <h6
                      style={{
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "14px",
                        marginBottom: "6px",
                      }}
                    >
                      {game.title}
                    </h6>
                    <div className="mb-2">
                      <span className="platform-badge" style={{fontSize: '9px', padding: '3px 6px'}}>{game.platform}</span>
                    </div>
                    <div className="rating-stars mb-2">
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
                        ({game.rating || 0})
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <div className="price-tag" style={{fontSize: '20px'}}>${game.price}</div>
                        <div className="old-price" style={{fontSize: '14px', color: "#8b95a5", visibility: `${game.oldPrice === game.price ? "hidden" : ""}`}}>${game.oldPrice}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Play Station Section */}
      <section className="gaming-bg py-5 px-3 px-lg-0">
        <div className="container py-4">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h2 className="section-title mb-0" style={{ color: "#003791" }}>
              <i className="bi bi-playstation me-3"></i>
              Play Station
            </h2>
            <a
              href="#"
              style={{
                color: "#BD9B52",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "16px",
              }}
            >
              View All <i className="bi bi-arrow-right"></i>
            </a>
          </div>
          <div className="row g-3">
            {hotDeals.map((game, index) => (
              <div key={index} className="col-lg-2 col-md-4 col-6">
                <div className="game-card">
                  <div style={{ position: "relative" }}>
                    <div className="game-img d-flex align-items-center justify-content-center">
                      <i
                        className="bi bi-controller"
                        style={{ fontSize: "48px", color: "#353d4a" }}
                      ></i>
                    </div>
                    {game.discount !== 0 && <span className="discount-badge">-{game.discount}%</span>}
                  </div>
                  <div className="p-3">
                    <h6
                      style={{
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "14px",
                        marginBottom: "6px",
                      }}
                    >
                      {game.title}
                    </h6>
                    <div className="mb-2">
                      <span className="platform-badge" style={{fontSize: '9px', padding: '3px 6px'}}>{game.platform}</span>
                    </div>
                    <div className="rating-stars mb-2">
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
                        ({game.rating || 0})
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <div className="price-tag" style={{fontSize: '20px'}}>${game.price}</div>
                        <div className="old-price" style={{fontSize: '14px', color: "#8b95a5", visibility: `${game.oldPrice === game.price ? "hidden" : ""}`}}>${game.oldPrice}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Xbox Section */}
      <section className="gaming-bg py-5 px-3 px-lg-0">
        <div className="container py-4">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h2 className="section-title mb-0" style={{color: "#107C10"}}>
              <i className="bi bi-xbox me-3"></i>
              Xbox
            </h2>
            <a
              href="#"
              style={{
                color: "#BD9B52",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "16px",
              }}
            >
              View All <i className="bi bi-arrow-right"></i>
            </a>
          </div>
          <div className="row g-3">
            {hotDeals.map((game, index) => (
              <div key={index} className="col-lg-2 col-md-4 col-6">
                <div className="game-card">
                  <div style={{ position: "relative" }}>
                    <div className="game-img d-flex align-items-center justify-content-center">
                      <i
                        className="bi bi-controller"
                        style={{ fontSize: "48px", color: "#353d4a" }}
                      ></i>
                    </div>
                    {game.discount !== 0 && <span className="discount-badge">-{game.discount}%</span>}
                  </div>
                  <div className="p-3">
                    <h6
                      style={{
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "14px",
                        marginBottom: "6px",
                      }}
                    >
                      {game.title}
                    </h6>
                    <div className="mb-2">
                      <span className="platform-badge" style={{fontSize: '9px', padding: '3px 6px'}}>{game.platform}</span>
                    </div>
                    <div className="rating-stars mb-2">
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
                        ({game.rating || 0})
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <div className="price-tag" style={{fontSize: '20px'}}>${game.price}</div>
                        <div className="old-price" style={{fontSize: '14px', color: "#8b95a5", visibility: `${game.oldPrice === game.price ? "hidden" : ""}`}}>${game.oldPrice}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PC Section */}
      <section className="gaming-bg py-5 px-3 px-lg-0">
        <div className="container py-4">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h2 className="section-title mb-0" style={{ color: "#FF0000" }}>
              <i className="bi bi-pc-display me-3"></i>
              PC
            </h2>
            <a
              href="#"
              style={{
                color: "#BD9B52",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "16px",
              }}
            >
              View All <i className="bi bi-arrow-right"></i>
            </a>
          </div>
          <div className="row g-3">
            {hotDeals.map((game, index) => (
              <div key={index} className="col-lg-2 col-md-4 col-6">
                <div className="game-card">
                  <div style={{ position: "relative" }}>
                    <div className="game-img d-flex align-items-center justify-content-center">
                      <i
                        className="bi bi-controller"
                        style={{ fontSize: "48px", color: "#353d4a" }}
                      ></i>
                    </div>
                    {game.discount !== 0 && <span className="discount-badge">-{game.discount}%</span>}
                  </div>
                  <div className="p-3">
                    <h6
                      style={{
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "14px",
                        marginBottom: "6px",
                      }}
                    >
                      {game.title}
                    </h6>
                    <div className="mb-2">
                      <span className="platform-badge" style={{fontSize: '9px', padding: '3px 6px'}}>{game.platform}</span>
                    </div>
                    <div className="rating-stars mb-2">
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
                        ({game.rating || 0})
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <div className="price-tag" style={{fontSize: '20px'}}>${game.price}</div>
                        <div className="old-price" style={{fontSize: '14px', color: "#8b95a5", visibility: `${game.oldPrice === game.price ? "hidden" : ""}`}}>${game.oldPrice}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="gaming-bg py-5 px-3 px-lg-0">
        <div className="container py-4">
          <h2 className="section-title text-center mb-5">
            Why Choose LK Gaming Solutions?
          </h2>
          <div className="row g-4">
            <div className="col-md-3 col-6 text-center">
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  margin: "0 auto 20px",
                  background:
                    "linear-gradient(135deg, #BD9B52 0%, #D4AF6A 100%)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i
                  className="bi bi-shield-check"
                  style={{ fontSize: "40px", color: "#000" }}
                ></i>
              </div>
              <h5
                style={{ fontWeight: 700, color: "#fff", marginBottom: "12px" }}
              >
                Buyer Protection
              </h5>
              <p style={{ color: "#8b95a5", fontSize: "14px" }}>
                Every purchase is protected with our money-back guarantee
              </p>
            </div>
            <div className="col-md-3 col-6 text-center">
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  margin: "0 auto 20px",
                  background:
                    "linear-gradient(135deg, #BD9B52 0%, #D4AF6A 100%)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i
                  className="bi bi-lightning-charge-fill"
                  style={{ fontSize: "40px", color: "#000" }}
                ></i>
              </div>
              <h5
                style={{ fontWeight: 700, color: "#fff", marginBottom: "12px" }}
              >
                Instant Delivery
              </h5>
              <p style={{ color: "#8b95a5", fontSize: "14px" }}>
                Get your game keys immediately after purchase
              </p>
            </div>
            <div className="col-md-3 col-6 text-center">
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  margin: "0 auto 20px",
                  background:
                    "linear-gradient(135deg, #BD9B52 0%, #D4AF6A 100%)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i
                  className="bi bi-cash-coin"
                  style={{ fontSize: "40px", color: "#000" }}
                ></i>
              </div>
              <h5
                style={{ fontWeight: 700, color: "#fff", marginBottom: "12px" }}
              >
                Sell & Earn
              </h5>
              <p style={{ color: "#8b95a5", fontSize: "14px" }}>
                List your unused keys and start earning money today
              </p>
            </div>
            <div className="col-md-3 col-6 text-center">
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  margin: "0 auto 20px",
                  background:
                    "linear-gradient(135deg, #BD9B52 0%, #D4AF6A 100%)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i
                  className="bi bi-people-fill"
                  style={{ fontSize: "40px", color: "#000" }}
                ></i>
              </div>
              <h5
                style={{ fontWeight: 700, color: "#fff", marginBottom: "12px" }}
              >
                Trusted Community
              </h5>
              <p style={{ color: "#8b95a5", fontSize: "14px" }}>
                Join 100K+ verified buyers and sellers worldwide
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
