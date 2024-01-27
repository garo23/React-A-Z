import React, { useState } from "react";

function ItemList({ items, onFilterChange }) {
  const [filter, setFilter] = useState("");

  const handleFilter = () => {
    const filteredData = items.filter((item) =>
      item.toLowerCase().includes(filter.toLowerCase())
    );
    setFilter("");
    onFilterChange(filteredData); // Pass the filtered data back to the parent component
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter items"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button onClick={handleFilter}>Filter</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
