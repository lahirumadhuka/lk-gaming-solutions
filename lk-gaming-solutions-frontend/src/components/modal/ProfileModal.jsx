import { Modal } from "react-bootstrap";
import ImageGrid from "../grid/ImageGrid";
import { useState } from "react";

const ProfileModal = ({
  isModalOpen,
  setIsModalOpen,
  username,
  modal_image,
}) => {
  const handleClose = () => setIsModalOpen(false);

  const images = [
    {
      id: 1,
      image:
        "https://www.wallpaperflare.com/static/462/374/374/spider-man-photo-spider-man-wallpaper.jpg",
    },
    {
      id: 2,
      image: "https://images6.alphacoders.com/136/1368549.jpeg",
    },
    {
      id: 3,
      image:
        "https://c4.wallpaperflare.com/wallpaper/910/58/385/dr-strange-marvel-comics-marvel-cinematic-universe-marvel-super-heroes-hd-wallpaper-preview.jpg",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF5dG_yyhG52xpLuPJa7gcd67qldFVcbkLkA&s",
    },
    {
      id: 5,
      image:
        "https://m.media-amazon.com/images/I/31LoLnTU56L._AC_UF1000,1000_QL80_.jpg",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(
    modal_image ? modal_image : "",
  );
  const [profileImage, setProfileImage] = useState(
    modal_image ? images.find((i) => i.id === modal_image).image : "",
  );

  const handleSubmit = () => {
    const selected = images.find((i) => i.id === selectedImage);
    setProfileImage(selected ? selected.image : null);
  };

  return (
    <>
      {profileImage ? (
        <div className="avatar my-3" style={{ userSelect: "none" }}>
          <img src={profileImage} alt="profile" />
        </div>
      ) : (
        <div className="avatar my-3" style={{ userSelect: "none" }}>
          {username.charAt(0).toUpperCase()}
        </div>
      )}

      {/* DELETE BUTTON */}
      <div className="d-flex justify-content-center mb-3">
        <div
          className="btn-edit border border-1 border-white"
          onClick={() => setIsModalOpen(true)}
        >
          Edit Profile Picture
        </div>
      </div>

      {/* MODAL */}
      <Modal
        show={isModalOpen}
        onHide={handleClose}
        centered
        backdrop="static"
        className="modal-lg"
      >
        <div className="gaming-modal">
          <Modal.Header className="border-0">
            <Modal.Title className="modal-title-gaming">
              <i className="bi bi-image"></i> EDIT PROFILE PICTURE
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className="text-center">
            <ImageGrid
              images={images}
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
          </Modal.Body>

          <Modal.Footer className="border-0 d-flex justify-content-center gap-3">
            <button className="btn-cancel" onClick={handleClose}>
              CANCEL
            </button>

            <button
              className="btn-save-gaming"
              onClick={() => {
                handleClose();
                handleSubmit();
              }}
            >
              SAVE
            </button>
          </Modal.Footer>
        </div>
      </Modal>

      {/* STYLE */}
      <style>{`
        .btn-edit {
          background: rgba(0, 0, 0, 0.5);
          border: none;
          padding: 5px 10px;
          border-radius: 6px;
          cursor: pointer;
          color: #fff;
          font-size: 12px;
          transition: 0.5s;
        }

        .btn-edit:hover {
          transform: scale(1.1);
          box-shadow: 0 0 10px rgba(50, 48, 48, 0.5);
        }

        .gaming-modal {
          background: linear-gradient(135deg, #1e2329, #2a313d);
          border: 2px solid #353d4a;
          border-radius: 12px;
          color: #fff;
          padding: 10px;
        }

        .modal-title-gaming {
          font-family: 'Orbitron', sans-serif;
          color: #BD9B52;
          letter-spacing: 2px;
        }

        .highlight {
          color: #BD9B52;
          font-weight: bold;
        }

        .btn-cancel {
          background: transparent;
          border: 2px solid #BD9B52;
          color: #BD9B52;
          padding: 8px 18px;
          border-radius: 8px;
          font-weight: bold;
          transition: 0.3s;
        }

        .btn-cancel:hover {
          background: rgba(189,155,82,0.2);
          box-shadow: 0 0 10px rgba(189,155,82,0.4);
        }

        .btn-save-gaming {
          background: linear-gradient(135deg, #BD9B52, #D4AF6A);
          border: none;
          color: #fff;
          padding: 8px 18px;
          border-radius: 8px;
          font-weight: bold;
          transition: 0.3s;
        }

        .btn-save-gaming:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(189,155,82,0.5);
        }

        .avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
        }
      `}</style>
    </>
  );
};

export default ProfileModal;
