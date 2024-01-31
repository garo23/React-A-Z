import React, { useState } from "react";
import useDebounce from "./useDebounce";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const debouncedInputValue = useDebounce(inputValue, 500);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Debounced Value: {debouncedInputValue}</p>
    </div>
  );
}
