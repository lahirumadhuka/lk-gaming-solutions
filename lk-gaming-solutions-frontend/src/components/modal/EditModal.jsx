import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import SaleForm from "../Sale Form/SaleForm";

const EditModal = ({
  game_id,
  gamesForSale,
  setGamesForSale,
  isModalOpen,
  setIsModalOpen,
}) => {
  const handleClose = () => setIsModalOpen(false);

  const game = gamesForSale.find((g) => g.id === game_id);

  const [noOfKeys, setNoOfKeys] = useState(game.digitalKeys.length);
  const [image, setImage] = useState(game.image);
  const [errors, setErrors] = useState({});

  const [sellForm, setSellForm] = useState({
    title: game.title,
    price: game.price,
    platform: game.platform,
    genre: game.genre,
    region: game.region,
    digitalKeys: game.digitalKeys.map(d => d),
  });

  // Handlers
  const handleSellChange = (e) => {
    setSellForm({
      ...sellForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleDigitalKeysChange = (e, index) => {
    const updatedKeys = [...sellForm.digitalKeys];
    updatedKeys[index] = e.target.value;

    setSellForm({
      ...sellForm,
      digitalKeys: updatedKeys,
    });
  };

  const handleEditGame = (e) => {
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
      {/* EDIT BUTTON */}
      <button className="btn-edit me-3" onClick={() => setIsModalOpen(true)}>
        <i className="bi bi-pencil-fill"></i>
      </button>

      {/* MODAL */}
      <Modal show={isModalOpen} onHide={handleClose} centered backdrop="static" className="modal-lg">
        <div className="gaming-modal">
          <Modal.Body>
            <SaleForm
              formTitle={"✏ Edit Game"}
              buttonType={"UPDATE GAME"}
              handleSubmit={handleEditGame}
              handleSellChange={handleSellChange}
              handleDigitalKeysChange={handleDigitalKeysChange}
              sellForm={sellForm}
              errors={errors}
              noOfKeys={noOfKeys}
              setNoOfKeys={setNoOfKeys}
              image={image}
              getImage={getImage}
            />

            <div className="px-4">
              <button className="btn-cancel mt-2 w-100" onClick={handleClose}>
                CANCEL
              </button>
            </div>
          </Modal.Body>
        </div>
      </Modal>

      {/* STYLE */}
      <style>{`
        .btn-edit {
          background: linear-gradient(135deg, #BD9B52, #D4AF6A);
          border: none;
          padding: 5px 10px;
          border-radius: 6px;
          cursor: pointer;
          color: #ffffff;
          font-size: 12px;
          font-weight: bold;
          transition: 0.3s;
        }

        .btn-edit:hover {
          transform: scale(1.1);
          box-shadow: 0 0 10px rgba(189,155,82,0.5);
        }

        .gaming-modal {
          background: linear-gradient(135deg, #1e2329, #2a313d);
          border: 2px solid #353d4a;
          border-radius: 12px;
          color: #fff;
          padding: 10px;
        }

        .btn-cancel {
          background: transparent;
          border: 2px solid #BD9B52;
          color: #BD9B52;
          padding: 8px;
          border-radius: 8px;
          font-weight: bold;
        }

        .btn-cancel:hover {
          background: rgba(189,155,82,0.2);
        }
      `}</style>
    </>
  );
};

export default EditModal;
