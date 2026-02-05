const SortingSelect = ({ sortBy, setSortBy }) => {
  return (
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
      <select
        className="sort-select"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="newest">Newest First</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="discount">Biggest Discount</option>
        <option value="rating">Highest Rated</option>
      </select>
    </div>
  );
};

export default SortingSelect;
