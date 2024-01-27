import "./styles.css";
import { useCallback } from "react";
import ChildComponent from "./ChildComponent";

export default function Parent() {
  const handleClick = useCallback(() => {
    // Add your click handling logic here
    console.log("Button clicked!");
  }, []);

  return <ChildComponent onClick={handleClick} />;
}
