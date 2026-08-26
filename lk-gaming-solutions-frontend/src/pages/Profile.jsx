import React, { useState } from "react";
import UseTitleName from "../utils/UseTitleName";
import SaleForm from "../components/form/SaleForm";
import DeleteModal from "../components/modal/DeleteModal";
import EditModal from "../components/modal/EditModal";
import { useData } from "../utils/DataContext";

const Profile = () => {
  UseTitleName("Profile");

  const [image, setImage] = useState("");

  const [errors, setErrors] = useState({});

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const {user} = useData();

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
      platform: "Steam",
      genre: "Sports",
      region: "EU",
    },
  ]);

  // Add sell form
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
      `}</style>

      <section className="gaming-bg">
        <div className="profile-card">
          <h1 className="title">
            <i className="bi bi-person-circle me-2"></i>
            PROFILE
          </h1>

          <div className="avatar" style={{ userSelect: "none" }}>
            {user?.username?.charAt(0).toUpperCase()}
          </div>

          <div className="info">
            <h3>{user?.username}</h3>
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
                  <EditModal
                    game_id={g.id}
                    gamesForSale={gamesForSale}
                    setGamesForSale={setGamesForSale}
                    isModalOpen={isEditModalOpen}
                    setIsModalOpen={setIsEditModalOpen}
                  />

                  {/* DELETE */}
                  <DeleteModal
                    modal_title={g.title}
                    modal_id={g.id}
                    isModalOpen={isDeleteModalOpen}
                    setIsModalOpen={setIsDeleteModalOpen}
                  />
                </span>
              </div>
            ))}
            <div className="summary">
              <span>Total Value</span>
              <span>${totalValue.toFixed(2)}</span>
            </div>
          </div>

          {/* SELL FORM */}
          <div className="mt-4">
            <SaleForm
              formTitle={"➕ Add Game to Sell"}
              buttonType={"ADD TO SELL LIST"}
              handleSubmit={handleAddSellGame}
              handleSellChange={handleSellChange}
              handleDigitalKeysChange={handleDigitalKeysChange}
              sellForm={sellForm}
              errors={errors}
              noOfKeys={noOfKeys}
              setNoOfKeys={setNoOfKeys}
              image={image}
              getImage={getImage}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
