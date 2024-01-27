import ItemList from "./ItemList";
import "./styles.css";

export default function App() {
  const items = ["apple", "Pineapple", "tomato", "Potato"];

  return <ItemList items={items} />;
}
