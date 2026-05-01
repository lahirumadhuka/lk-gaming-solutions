import React, { useState } from "react";
import UseTitleName from "../utils/UseTitleName";

const Profile = () => {
  UseTitleName("Profile");

  const user = {
    username: "Lahiru",
  };

  // 🎮 Games Bought
  const boughtGames = [
    { id: 1, title: "Elden Ring", price: 39.99, rating: 4.5 },
    { id: 2, title: "Cyberpunk 2077", price: 29.99, rating: 4.0 },
  ];

  // 💰 Games Sold
  const [soldGames, setSoldGames] = useState([
    { id: 1, title: "FIFA 24 Account", price: 19.99, rating: 3.5, stock: 42 },
  ]);

  // ➕ Sell form state
  const [sellForm, setSellForm] = useState({
    title: "",
    price: "",
  });

  const handleSellChange = (e) => {
    setSellForm({
      ...sellForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddSellGame = (e) => {
    e.preventDefault();

    if (!sellForm.title || !sellForm.price) return;

    const newGame = {
      id: Date.now(),
      title: sellForm.title,
      price: parseFloat(sellForm.price),
    };

    setSoldGames([...soldGames, newGame]);

    setSellForm({
      title: "",
      price: "",
    });
  };

  const totalSpent = boughtGames.reduce((sum, g) => sum + g.price, 0);
  const totalEarned = soldGames.reduce((sum, g) => sum + g.price, 0);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@500;600;700&display=swap');

        body {
          background: #0a0e1a;
          color: #fff;
        }

        .gaming-bg {
          background: linear-gradient(135deg, #0a0e1a 0%, #1a1f2e 50%, #0f1419 100%);
          min-height: 100vh;
          padding: 60px 20px;
        }

        .profile-card {
          max-width: 1000px;
          margin: auto;
          background: linear-gradient(135deg, #1e2329 0%, #2a313d 100%);
          border: 2px solid #353d4a;
          border-radius: 14px;
          padding: 30px;
        }

        .title {
          font-family: 'Orbitron', sans-serif;
          text-align: center;
          font-size: 36px;
          background: linear-gradient(135deg, #BD9B52, #D4AF6A);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 30px;
        }

        .avatar {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          background: linear-gradient(135deg, #BD9B52, #D4AF6A);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
          font-weight: bold;
          color: #000;
          margin: auto;
        }

        .info {
          text-align: center;
          margin-top: 10px;
        }

        .info h3 {
          font-family: 'Orbitron', sans-serif;
        }

        .box {
          background: #0f1419;
          border: 2px solid #353d4a;
          border-radius: 10px;
          padding: 20px;
        }

        .box h4 {
          font-family: 'Orbitron', sans-serif;
          color: #BD9B52;
          margin-bottom: 15px;
        }

        .item {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid #2a313d;
          font-size: 14px;
        }

        .summary {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
          font-weight: bold;
          color: #BD9B52;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin-top: 25px;
        }

        .stat-box {
          background: #0f1419;
          border: 2px solid #353d4a;
          padding: 15px;
          border-radius: 10px;
          text-align: center;
        }

        .btn-gaming {
          margin-top: 25px;
          width: 100%;
          background: linear-gradient(135deg, #BD9B52, #D4AF6A);
          border: none;
          color: #000;
          font-weight: bold;
          padding: 12px;
          border-radius: 8px;
        }

        .form-control {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          border-radius: 8px;
          border: 2px solid #353d4a;
        }

        .form-control:focus {
          border-color: #BD9B52;
          box-shadow: 0 0 10px rgba(189,155,82,0.3);
        }

        .select-wrapper {
            position: relative;
            width: 100%;
            margin-bottom: 12px;
        }

        /* Main Select */
        .gaming-select {
            width: 100%;
            padding: 12px 14px;
            border-radius: 8px;
            border: 2px solid #353d4a;
            font-weight: 600;
            font-family: 'Rajdhani', sans-serif;
            letter-spacing: 1px;
            appearance: none;
            cursor: pointer;
            transition: 0.3s ease;
        }

        /* Hover effect */
        .gaming-select:hover {
            border-color: #BD9B52;
            box-shadow: 0 0 10px rgba(189, 155, 82, 0.25);
        }

        /* Focus effect */
        .gaming-select:focus {
            outline: none;
            border-color: #D4AF6A;
            box-shadow: 0 0 12px rgba(212, 175, 106, 0.3);
        }

        /* Custom arrow */
        .select-wrapper::after {
            content: "▼";
            position: absolute;
            right: 14px;
            top: 50%;
            transform: translateY(-50%);
            color: #BD9B52;
            pointer-events: none;
            font-size: 12px;
        }
      `}</style>

      <section className="gaming-bg">
        <div className="profile-card">
          <h1 className="title">
            <i className="bi bi-person-circle me-2"></i>
            PROFILE
          </h1>

          <div className="avatar" style={{ userSelect: "none" }}>
            {user.username.charAt(0).toUpperCase()}
          </div>

          <div className="info">
            <h3>{user.username}</h3>
          </div>

          {/* Stats */}
          <div className="stats">
            <div className="stat-box">
              <h3>{boughtGames.length}</h3>
              <p>Games Bought</p>
            </div>

            <div className="stat-box">
              <h3>{soldGames.length}</h3>
              <p>Games For Sale</p>
            </div>

            <div className="stat-box">
              <h3>${(totalEarned - totalSpent).toFixed(2)}</h3>
              <p>Net Balance</p>
            </div>
          </div>

          {/* Bought */}
          <div className="box mt-4">
            <h4>🎮 Bought Games</h4>
            {boughtGames.map((g) => (
              <div className="item" key={g.id}>
                <span>{g.title}</span>
                <span className="bi bi-star-fill text-warning">
                  {" "}
                  {g.rating}
                </span>
                <span>${g.price}</span>
              </div>
            ))}
            <div className="summary">
              <span>Total Earned</span>
              <span>${totalSpent.toFixed(2)}</span>
            </div>
          </div>

          {/* Sale */}
          <div className="box mt-4">
            <h4>💰 Games For Sale</h4>
            {soldGames.map((g) => (
              <div className="item" key={g.id}>
                <span>{g.title}</span>
                <span className="bi bi-star-fill text-warning">
                  {" "}
                  {g.rating}
                </span>
                <span>{g.stock ? `${g.stock} in stock` : "Out of stock"}</span>
                <span>${g.price}</span>
                <span>
                  {/* EDIT */}
                  <button
                    className="me-3"
                    style={{
                      background: "#BD9B52",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#fff",
                    }}
                  >
                    <i className="bi bi-pencil-fill"></i>
                  </button>

                  {/* DELETE */}
                  <button
                    style={{
                      background: "#ff4d4f",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#fff",
                    }}
                  >
                    <i className="bi bi-trash3-fill"></i>
                  </button>
                </span>
              </div>
            ))}
            <div className="summary">
              <span>Total Earned</span>
              <span>${totalEarned.toFixed(2)}</span>
            </div>
          </div>

          {/* ➕ SELL FORM */}
          <div className="box mt-4">
            <h4>➕ Add Game to Sell</h4>

            <form onSubmit={handleAddSellGame}>
              <input
                type="text"
                name="title"
                placeholder="Game Title"
                className="form-control"
                value={sellForm.title}
                onChange={handleSellChange}
              />

              <div className="select-wrapper">
                <select className="gaming-select">
                  <option value="" selected hidden>
                    Select Platform
                  </option>
                  <option value="Steam">Steam</option>
                  <option value="Epic Games">Epic Games</option>
                  <option value="GOG">GOG</option>
                  <option value="Origin">Origin</option>
                  <option value="Battle.net">Battle.net</option>
                  <option value="Ubisoft Connect">Ubisoft Connect</option>
                  <option value="Rockstar">Rockstar</option>
                  <option value="PS5">PS5</option>
                  <option value="PS4">PS4</option>
                  <option value="PS4/PS5">PS4/PS5</option>
                  <option value="Xbox Series X/S">Xbox Series X/S</option>
                  <option value="Xbox One">Xbox One</option>
                  <option value="Xbox One/Series">Xbox One/Series</option>
                </select>
              </div>

              <div className="select-wrapper">
                <select className="gaming-select">
                  <option value="" selected hidden>
                    Select Genre
                  </option>
                  <option value="Action">Action</option>
                  <option value="Adventure">Adventure</option>
                  <option value="RPG">RPG</option>
                  <option value="Strategy">Strategy</option>
                  <option value="Simulation">Simulation</option>
                  <option value="Shooter">Shooter</option>
                  <option value="Sports">Sports</option>
                  <option value="Racing">Racing</option>
                  <option value="Indie">Indie</option>
                </select>
              </div>

              <div className="select-wrapper">
                <select className="gaming-select">
                  <option value="" selected hidden>
                    Select Region
                  </option>
                  <option value="Global">Global</option>
                  <option value="EU">EU</option>
                  <option value="US">US</option>
                  <option value="Asia">Asia</option>
                </select>
              </div>

              <input
                type="number"
                name="price"
                placeholder="Price"
                className="form-control"
                value={sellForm.price}
                onChange={handleSellChange}
              />

              <button className="btn-gaming" type="submit">
                ADD TO SELL LIST
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
