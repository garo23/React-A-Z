import { useState } from "react";
import "./styles.css";
import ChildComponent from "./ChildComponent";

export default function ParentComponent() {
  const [value, setValue] = useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  console.log("Parent's value " + value);
  return (
    <div className="App">
      <div>
        <ChildComponent value={value} onChange={handleChange} />
      </div>
    </div>
  );
}
