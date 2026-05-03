const SaleForm = ({
  handleSubmit,
  handleSellChange,
  sellForm,
  errors,
  noOfKeys,
  setNoOfKeys,
  handleDigitalKeysChange,
  image,
  getImage,
  formTitle,
  buttonType,
  handleClose,
}) => {
  return (
    <>
      <div className="box">
        <h4>{formTitle}</h4>

        <form onSubmit={handleSubmit}>
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

          <div className="p-3 rounded" style={{ border: "2px solid #BD9B52" }}>
            <h5 style={{ fontFamily: "Orbitron, sans-serif" }}>
              🔑 Add Digital Keys
            </h5>

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
            {buttonType}
          </button>

          {handleClose && (
            <button className="btn-cancel mt-2 w-100" onClick={handleClose}>
              CANCEL
            </button>
          )}
        </form>
      </div>

      <style>
        {`
        .btn-gaming {
          width: 100%;
          margin-top: 20px;
          padding: 12px;
          border: none;
          border-radius: 8px;
          font-weight: bold;
          background: linear-gradient(135deg, #BD9B52, #D4AF6A);
          color: #000;
          transition: 0.3s;
        }

        .btn-gaming:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(189,155,82,0.5);
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
        }`}
      </style>
    </>
  );
};

export default SaleForm;
