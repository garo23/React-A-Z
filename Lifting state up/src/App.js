import "./styles.css";
import React, { useState } from "react";

// Child Component 1: Input field for entering the name
function NameInput(props) {
  return (
    <input
      type="text"
      value={props.name}
      onChange={(e) => props.onNameChange(e.target.value)}
    />
  );
}

// Child Component 2: Displaying the name
function DisplayName(props) {
  return <div>Your Name: {props.name}</div>;
}

// Parent Component: Manages the name state and passes it down to children
export default function NameForm() {
  // State for the name
  const [name, setName] = useState("");

  // Function to update the name
  const handleNameChange = (newName) => {
    setName(newName);
  };

  return (
    <div>
      {/* Child Component 1 */}
      <NameInput name={name} onNameChange={handleNameChange} />

      {/* Child Component 2 */}
      <DisplayName name={name} />
    </div>
  );
}
