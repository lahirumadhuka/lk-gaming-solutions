import React, { useState } from "react";

const ImageGrid = ({ images = [], selectedImage, setSelectedImage }) => {
  const [selectedIndex, setSelectedIndex] = useState(selectedImage || null);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  setSelectedImage(selectedIndex);

  return (
    <>
      <div className="image-grid">
        {images.map((img) => (
          <div
            key={img.id}
            className={`grid-item ${
              selectedIndex === img.id ? "selected" : ""
            }`}
            onClick={() => handleSelect(img.id)}
          >
            <img src={img.image} alt={`img-${img.id}`} />

            {/* optional tick */}
            {selectedIndex === img.id && (
              <span className="check-icon">
                <i className="bi bi-check-circle-fill"></i>
              </span>
            )}
          </div>
        ))}
      </div>

      <style>{`
        .image-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 10px;
        }

        .grid-item {
          position: relative;
          width: 100%;
          height: 150px;
          overflow: hidden;
          border-radius: 8px;
          border: 2px solid #353d4a;
          background: #0f1419;
          transition: 0.3s;
          cursor: pointer;
        }

        .grid-item:hover {
          border-color: #BD9B52;
          box-shadow: 0 0 10px rgba(189,155,82,0.4);
          transform: scale(1.05);
        }

        /* SELECTED STATE */
        .grid-item.selected {
          border-color: #BD9B52;
          box-shadow: 0 0 15px rgba(189,155,82,0.8);
          transform: scale(1.05);
        }

        .grid-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* CHECK ICON */
        .check-icon {
          position: absolute;
          top: 6px;
          right: 6px;
          width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #BD9B52;
          font-size: 18px;
          background: rgba(0,0,0,0.6);
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(189, 155, 82, 0.7);
        }

        @media (max-width: 500px) {
          .image-grid {
            grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
          }

          .grid-item {
            height: 70px;
          }
        }
      `}</style>
    </>
  );
};

export default ImageGrid;