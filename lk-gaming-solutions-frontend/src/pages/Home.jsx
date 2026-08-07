import { useNavigate } from "react-router-dom";
import SectionCard from "../components/card/SectionCard";
import UseTitleName from "../utils/UseTitleName";
import { useEffect, useState } from "react";
import axios from "axios";
import { useData } from "../utils/DataContext";

const Home = () => {
  UseTitleName("");

  const navigate = useNavigate();
  const { games } = useData();

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
              <p className="mb-4" style={{ fontSize: "18px", fontWeight: 600 }}>
                Join over 100,000+ gamers buying and selling game keys. List
                your unused keys or find the best deals from trusted sellers
                worldwide.
              </p>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-browse-games"
                  onClick={() => navigate("/browse-games")}
                >
                  <i className="bi bi-search me-2"></i>Browse Games
                </button>
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
      <SectionCard
        section_data={games.filter((g) => g.stock > 0)}
        section_title={"Featured Games"}
        section_icon={"bi-star-fill"}
        section_style={"#ffd700"}
      />

      {/* Hot Deals Section */}
      <SectionCard
        section_data={games.filter((g) => g.stock > 0 || g.discount > 0)}
        section_title={"Hot Deals"}
        section_icon={"bi-fire"}
        section_style={"#ff0080"}
        section_link={"/hot-deals"}
      />

      {/* Play Station Section */}
      <SectionCard
        section_data={games.filter((g) => g.stock > 0)}
        section_title={"Play Station"}
        section_icon={"bi-playstation"}
        section_style={"#0059B4"}
        section_link={"/play-station"}
      />

      {/* Xbox Section */}
      <SectionCard
        section_data={games.filter((g) => g.stock > 0)}
        section_title={"Xbox"}
        section_icon={"bi-xbox"}
        section_style={"#0F730F"}
        section_link={"/xbox"}
      />

      {/* PC Section */}
      <SectionCard
        section_data={games.filter((g) => g.stock > 0)}
        section_title={"PC"}
        section_icon={"bi-pc-display"}
        section_style={"#FF0000"}
        section_link={"/pc"}
      />

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
};

export default Home;
