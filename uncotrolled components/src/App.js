import "./styles.css";
import { useRef } from "react";

export default function App() {
  const inputRef = useRef();

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Input value: " + inputRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
