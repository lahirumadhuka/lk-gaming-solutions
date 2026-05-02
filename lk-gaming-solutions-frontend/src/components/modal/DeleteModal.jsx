import { Modal } from "react-bootstrap";

const DeleteModal = ({
  modal_id,
  modal_title,
  modal_delete,
  isModalOpen,
  setIsModalOpen,
}) => {
  const handleClose = () => setIsModalOpen(false);

  return (
    <>
      {/* DELETE BUTTON */}
      <button
        className="btn-delete"
        onClick={() => setIsModalOpen(true)}
      >
        <i className="bi bi-trash3-fill"></i>
      </button>

      {/* MODAL */}
      <Modal
        show={isModalOpen}
        onHide={handleClose}
        centered
        backdrop="static"
      >
        <div className="gaming-modal">
          <Modal.Header className="border-0">
            <Modal.Title className="modal-title-gaming">
              ⚠ DELETE GAME
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className="text-center">
            <p>
              Are you sure you want to delete <br />
              <span className="highlight">"{modal_title}"</span> ?
            </p>
          </Modal.Body>

          <Modal.Footer className="border-0 d-flex justify-content-center gap-3">
            <button className="btn-cancel" onClick={handleClose}>
              CANCEL
            </button>

            <button
              className="btn-danger-gaming"
              onClick={() => {
                // modal_delete(modal_id);
                handleClose();
              }}
            >
              DELETE
            </button>
          </Modal.Footer>
        </div>
      </Modal>

      {/* STYLE */}
      <style>{`
        .btn-delete {
          background: linear-gradient(135deg, #ff4d4f, #ff7875);
          border: none;
          padding: 5px 10px;
          border-radius: 6px;
          cursor: pointer;
          color: #fff;
          font-size: 12px;
          transition: 0.3s;
        }

        .btn-delete:hover {
          transform: scale(1.1);
          box-shadow: 0 0 10px rgba(255,77,79,0.5);
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

        .btn-danger-gaming {
          background: linear-gradient(135deg, #ff4d4f, #ff7875);
          border: none;
          color: #fff;
          padding: 8px 18px;
          border-radius: 8px;
          font-weight: bold;
          transition: 0.3s;
        }

        .btn-danger-gaming:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 15px rgba(255,77,79,0.6);
        }
      `}</style>
    </>
  );
};

export default DeleteModal;