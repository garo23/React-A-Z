import "./styles.css";
import useLocalStorage from "./useLocalStorage";

export default function App() {
  const [name, setName] = useLocalStorage("username", "Guest");

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
  };

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleNameChange}
      />
    </div>
  );
}
                                                                       
