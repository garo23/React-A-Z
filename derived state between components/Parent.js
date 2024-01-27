// ParentComponent.js
import React, { useState } from "react";
import ItemList from "./Child";

function ParentComponent() {
  const [items, setItems] = useState([
    "apple",
    "Pineapple",
    "tomato",
    "Potato"
  ]);
  const [filteredItems, setFilteredItems] = useState(items);

  const handleFilterChange = (filteredData) => {
    setFilteredItems(filteredData);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <ItemList items={filteredItems} onFilterChange={handleFilterChange} />
    </div>
  );
}

export default ParentComponent;
