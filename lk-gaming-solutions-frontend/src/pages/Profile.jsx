import React, { useState } from "react";
import UseTitleName from "../utils/UseTitleName";

const Profile = () => {
  UseTitleName("Profile");

  const [image, setImage] = useState("");

  const [errors, setErrors] = useState({});

  const user = {
    username: "Lahiru",
  };

  // Games Bought
  const boughtGames = [
    {
      id: 1,
      title: "Elden Ring",
      price: 39.99,
      rating: 4.5,
      digitalKeys: ["1", "2", "3"],
    },
    {
      id: 2,
      title: "Cyberpunk 2077",
      price: 29.99,
      rating: 4.0,
      digitalKeys: ["1", "2"],
    },
  ];

  // Games Sold
  const [soldGames, setSoldGames] = useState([
    {
      id: 1,
      title: "FIFA 24 Account",
      price: 19.99,
      rating: 3.5,
      digitalKeys: ["1", "2"],
    },
  ]);

  // Games for Sale
  const [gamesForSale, setGamesForSale] = useState([
    {
      id: 1,
      title: "FIFA 24 Account",
      price: 19.99,
      rating: 3.5,
      digitalKeys: ["1", "2", "4", "7"],
    },
  ]);

  // Sell form state
  const [sellForm, setSellForm] = useState({
    title: "",
    price: "",
    platform: "",
    genre: "",
    region: "",
    digitalKeys: [],
  });

  const [noOfKeys, setNoOfKeys] = useState(0);

  const handleDigitalKeysChange = (e, index) => {
    const updatedKeys = [...(sellForm.digitalKeys || [])];
    updatedKeys[index] = e.target.value;

    setSellForm({
      ...sellForm,
      digitalKeys: updatedKeys,
    });
  };

  const handleSellChange = (e) => {
    setSellForm({
      ...sellForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddSellGame = (e) => {
    e.preventDefault();

    let newErrors = {};

    // Form validation
    if (!sellForm.title) {
      newErrors.title = "Game title is required";
    }

    if (!sellForm.platform) {
      newErrors.platform = "Platform is required";
    }

    if (!sellForm.genre) {
      newErrors.genre = "Genre is required";
    }

    if (!sellForm.region) {
      newErrors.region = "Region is required";
    }

    if (!sellForm.price) {
      newErrors.price = "Price is required";
    }

    if (sellForm.digitalKeys.length === 0) {
      newErrors.digitalKeys = "At least 1 digital key is required";
    }

    // Image validation
    if (!image || image === "") {
      newErrors.image = "Image is required";
    }

    setErrors(newErrors);

    // If no errors then submit
    if (Object.keys(newErrors).length === 0) {
      const newGame = {
        id: Date.now(),
        title: sellForm.title,
        price: parseFloat(sellForm.price),
        rating: 0,
        digitalKeys: sellForm.digitalKeys || [],
      };

      setGamesForSale([...gamesForSale, newGame]);

      // reset
      setSellForm({
        title: "",
        price: "",
        platform: "",
        genre: "",
        region: "",
        digitalKeys: [],
      });
      setNoOfKeys(0);
      setImage("");
    }
  };

  const totalSpent = boughtGames.reduce(
    (sum, g) => sum + g.price * (g.digitalKeys?.length || 1),
    0,
  );
  const totalEarned = soldGames.reduce(
    (sum, g) => sum + g.price * (g.digitalKeys?.length || 1),
    0,
  );
  const totalValue = gamesForSale.reduce(
    (sum, g) => sum + g.price * (g.digitalKeys?.length || 1),
    0,
  );

  // Get Image
  const getImage = (e) => {
    const img = e.target.files[0];

    if (img && img.type.startsWith("image/")) {
      setImage(img);
    } else {
      setImage("");
    }
  };

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

        .item-title {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid #2a313d;
          font-size: 14px;
          font-weight: bold;
          color: #BD9B52;
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

        /* Input image file */
        input[type="file"] {
          display: none;
        }

        .custom-image-upload {
          background: #000000;
          display: inline-block;
          padding: 6px 12px;
          cursor: pointer;
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
              <p>Sold Games</p>
            </div>

            <div className="stat-box">
              <h3>{gamesForSale.length}</h3>
              <p>Games For Sale</p>
            </div>
          </div>

          {/* Bought */}
          <div className="box mt-4">
            <h4>🎮 Bought Games</h4>
            <div className="item-title">
              <span>Game Title</span>
              <span>Ratings</span>
              <span>Digital Keys</span>
              <span>Price</span>
              <span>Total Price</span>
            </div>
            {boughtGames.map((g) => (
              <div className="item" key={g.id}>
                <span>{g.title}</span>
                <span className="bi bi-star-fill text-warning">
                  {" "}
                  {g.rating}
                </span>
                <span>{g.digitalKeys.length}</span>
                <span>${g.price}</span>
                <span>${g.price * g.digitalKeys.length}</span>
              </div>
            ))}
            <div className="summary">
              <span>Total Spent</span>
              <span>${totalSpent.toFixed(2)}</span>
            </div>
          </div>

          {/* Sold */}
          <div className="box mt-4">
            <h4>💰 Sold Games</h4>
            <div className="item-title">
              <span>Game Title</span>
              <span>Ratings</span>
              <span>Digital Keys</span>
              <span>Price</span>
              <span>Total Price</span>
            </div>
            {soldGames.map((g) => (
              <div className="item" key={g.id}>
                <span>{g.title}</span>
                <span className="bi bi-star-fill text-warning">
                  {" "}
                  {g.rating}
                </span>
                <span>{g.digitalKeys.length}</span>
                <span>${g.price}</span>
                <span>${g.price * g.digitalKeys.length}</span>
              </div>
            ))}
            <div className="summary">
              <span>Total Earned</span>
              <span>${totalEarned.toFixed(2)}</span>
            </div>
          </div>

          {/* Sale */}
          <div className="box mt-4">
            <h4>💵 Games For Sale</h4>
            <div className="item-title">
              <span>Game Title</span>
              <span>Ratings</span>
              <span>Digital Keys</span>
              <span>Price</span>
              <span>Total Price</span>
              <span>Action</span>
            </div>
            {gamesForSale.map((g) => (
              <div className="item" key={g.id}>
                <span>{g.title}</span>
                <span className="bi bi-star-fill text-warning">
                  {" "}
                  {g.rating}
                </span>
                <span>{g.digitalKeys.length}</span>
                <span>${g.price}</span>
                <span>${g.price * g.digitalKeys.length}</span>
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
              <span>Total Value</span>
              <span>${totalValue.toFixed(2)}</span>
            </div>
          </div>

          {/* SELL FORM */}
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

              {errors.title && (
                <p style={{ color: "red", fontSize: "13px" }}>
                  <i class="bi bi-exclamation-circle"></i> {errors.title}
                </p>
              )}

              <div className="select-wrapper">
                <select
                  className="gaming-select"
                  value={sellForm.platform}
                  onChange={handleSellChange}
                  name="platform"
                >
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

              {errors.platform && (
                <p style={{ color: "red", fontSize: "13px" }}>
                  <i class="bi bi-exclamation-circle"></i> {errors.platform}
                </p>
              )}

              <div className="select-wrapper">
                <select
                  className="gaming-select"
                  value={sellForm.genre}
                  onChange={handleSellChange}
                  name="genre"
                >
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

              {errors.genre && (
                <p style={{ color: "red", fontSize: "13px" }}>
                  <i class="bi bi-exclamation-circle"></i> {errors.genre}
                </p>
              )}

              <div className="select-wrapper">
                <select
                  className="gaming-select"
                  value={sellForm.region}
                  onChange={handleSellChange}
                  name="region"
                >
                  <option value="" selected hidden>
                    Select Region
                  </option>
                  <option value="Global">Global</option>
                  <option value="EU">EU</option>
                  <option value="US">US</option>
                  <option value="Asia">Asia</option>
                </select>
              </div>

              {errors.region && (
                <p style={{ color: "red", fontSize: "13px" }}>
                  <i class="bi bi-exclamation-circle"></i> {errors.region}
                </p>
              )}

              <input
                type="number"
                name="price"
                placeholder="Price"
                className="form-control"
                value={sellForm.price}
                onChange={handleSellChange}
              />

              {errors.price && (
                <p style={{ color: "red", fontSize: "13px" }}>
                  <i class="bi bi-exclamation-circle"></i> {errors.price}
                </p>
              )}

              <div
                className="p-3 rounded"
                style={{ border: "2px solid #BD9B52" }}
              >
                <h5>🔑 Add Digital Keys</h5>

                <div className="select-wrapper">
                  <select
                    className="gaming-select"
                    value={noOfKeys}
                    onChange={(e) => setNoOfKeys(Number(e.target.value))}
                  >
                    <option value="" selected hidden>
                      Select Number of Digital Keys
                    </option>
                    {[...Array(10)].map((_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>

                {noOfKeys > 0 &&
                  [...Array(noOfKeys)].map((_, i) => (
                    <input
                      key={i}
                      type="text"
                      name="digitalKeys"
                      placeholder={`Digital Key ${i + 1}`}
                      className="form-control mt-2"
                      value={sellForm.digitalKeys?.[i] || ""}
                      onChange={(e) => handleDigitalKeysChange(e, i)}
                    />
                  ))}
              </div>

              {errors.digitalKeys && (
                <p style={{ color: "red", fontSize: "13px" }}>
                  <i class="bi bi-exclamation-circle"></i> {errors.digitalKeys}
                </p>
              )}

              {/* Image Upload Area */}
              <div
                className="rounded p-2 bg-white w-100 h-100 mt-3"
                style={{ border: "2px solid #BD9B52" }}
              >
                <div
                  className="p-3 rounded w-100 h-100"
                  style={{ border: "2px dashed #BD9B52" }}
                >
                  {image ? (
                    <div className="d-flex justify-content-center mb-2">
                      <img
                        src={URL.createObjectURL(image)}
                        style={{ width: "250px" }}
                        className="rounded"
                      />
                    </div>
                  ) : (
                    <div className="text-center">
                      <i
                        className="bi bi-cloud-arrow-up-fill mb-2"
                        style={{ color: "#BD9B52", fontSize: "100px" }}
                      ></i>
                    </div>
                  )}
                  <div className="d-flex justify-content-center">
                    <label
                      for="image-upload"
                      className="custom-image-upload rounded text-white"
                    >
                      Choose an Image
                    </label>
                    <input
                      type="file"
                      id="image-upload"
                      accept="image/*"
                      onChange={getImage}
                    />
                  </div>
                </div>
              </div>

              {errors.image && (
                <p style={{ color: "red", fontSize: "13px" }}>
                  <i class="bi bi-exclamation-circle"></i> {errors.image}
                </p>
              )}

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
