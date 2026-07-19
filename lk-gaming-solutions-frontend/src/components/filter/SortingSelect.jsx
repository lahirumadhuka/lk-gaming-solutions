const SortingSelect = ({ sortBy, setSortBy }) => {
  return (
    <>
      <style>{`
        /* Sort Dropdown */
        .select-wrapper {
          position: relative;
        }

        select {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
        }

        .select-wrapper i {
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
        }

        .sort-select {
          background: #1e2329;
          border: 2px solid #353d4a;
          border-radius: 8px;
          padding: 10px 16px;
          color: #fff;
          font-family: 'Rajdhani', sans-serif;
          font-weight: 600;
          cursor: pointer;
        }

        .sort-select:focus {
          border-color: #BD9B52;
          outline: none;
        }`}</style>

      <div className="d-flex align-items-center gap-3">
        <span
          style={{
            color: "#8b95a5",
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          Sort by:
        </span>
        <div className="select-wrapper">
          <select
            className="sort-select pe-5"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">Name: A to Z</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="discount">Biggest Discount</option>
            <option value="rating">Highest Rated</option>
          </select>
          <i className="bi bi-chevron-down"></i>
        </div>
      </div>
    </>
  );
};

export default SortingSelect;
