import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const error = count < 0 ? "Cannot be less than 0" : "";

  function subtract() {
    setCount(count - 1);
  }
  //no state management needed

  function add() {
    setCount(count + 1);
  }
  //no state management needed

  return (
    <div>
      <button onClick={subtract}>Subtract</button>
      <div>{count}</div>
      <button onClick={add}>Add</button>
      <p>{error}</p>
    </div>
  );
}
