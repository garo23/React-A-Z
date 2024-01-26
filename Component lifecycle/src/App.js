import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component has mounted.");
    return () => {
      console.log("Component will unmount.");
    };
  }, []);

  useEffect(() => {
    console.log("Count state has changed.");
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
