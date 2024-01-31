import React, { useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);

  // Example 1: Basic usage of useCallback
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  // Example 2: Using useCallback with dependency array
  const decrement = useCallback(
    (step) => {
      setCount(count - step);
    },
    [count]
  );

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={() => decrement(2)}>Decrement by 2</button>
    </div>
  );
}

export default App;
