import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(["item 1", "item 2", "item 3"]);

  const handleIncrement = () => {
    // Pitfall: Mutating state directly
    count += 1;
    // This mutation won't trigger a re-render
  };

  const handleAddItem = () => {
    // Pitfall: Mutating state array directly
    items.push("new item");
    // This mutation won't trigger a re-render
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
}
